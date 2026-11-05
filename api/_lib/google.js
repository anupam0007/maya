/* ==========================================================================
   google.js: everything that talks to Google.

   One OAuth refresh token covers both jobs:
     · Calendar  : create the event and mint a real Google Meet link
     · Gmail     : send the branded confirmation emails

   Required env (see .env.example):
     GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN
   Optional:
     OWNER_EMAIL (default anupamgowda1999@gmail.com), CALENDAR_ID (default primary)

   With none of them set the site runs in demo mode. See handlers.js.
   Zero dependencies: plain fetch against the REST APIs.
   ========================================================================== */

export const OWNER_EMAIL = process.env.OWNER_EMAIL || 'anupamgowda1999@gmail.com';
export const CALENDAR_ID = process.env.CALENDAR_ID || 'primary';
export const TZ = 'Asia/Kolkata';

/** A fixed Meet room, used when OAuth is not set up (see mailer.js). */
export const MEET_LINK = (process.env.MEET_LINK || '').trim();

export function hasGoogleOAuth() {
  return Boolean(
    process.env.GOOGLE_CLIENT_ID &&
    process.env.GOOGLE_CLIENT_SECRET &&
    process.env.GOOGLE_REFRESH_TOKEN
  );
}

/* ---- access token, cached until shortly before it expires ---- */
let cached = { token: null, expires: 0 };

export async function accessToken() {
  if (cached.token && Date.now() < cached.expires - 60_000) return cached.token;

  const body = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  });

  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || !j.access_token) {
    throw new Error(`Google auth failed: ${j.error_description || j.error || r.status}`);
  }
  cached = { token: j.access_token, expires: Date.now() + (j.expires_in || 3600) * 1000 };
  return cached.token;
}

async function gapi(url, init = {}) {
  const token = await accessToken();
  const r = await fetch(url, {
    ...init,
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json',
      ...(init.headers || {}),
    },
  });
  const text = await r.text();
  let j = null;
  try { j = text ? JSON.parse(text) : null; } catch { /* keep raw */ }
  if (!r.ok) {
    const msg = (j && j.error && (j.error.message || j.error)) || text || r.status;
    throw new Error(`Google API ${r.status}: ${typeof msg === 'string' ? msg : JSON.stringify(msg)}`);
  }
  return j;
}

/* ==========================================================================
   Calendar
   ========================================================================== */

/** Busy intervals on the studio calendar between two instants. */
export async function freeBusy(timeMin, timeMax) {
  const j = await gapi('https://www.googleapis.com/calendar/v3/freeBusy', {
    method: 'POST',
    body: JSON.stringify({
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      timeZone: TZ,
      items: [{ id: CALENDAR_ID }],
    }),
  });
  const cal = (j.calendars && j.calendars[CALENDAR_ID]) || {};
  if (cal.errors && cal.errors.length) {
    throw new Error(`Calendar unreadable: ${cal.errors[0].reason}`);
  }
  return (cal.busy || []).map((b) => ({ start: new Date(b.start), end: new Date(b.end) }));
}

/**
 * Create the call. `conferenceDataVersion=1` is what actually mints the Meet
 * link; `sendUpdates=all` makes Google email the invite to both attendees,
 * on top of the branded mail we send ourselves.
 */
export async function createEvent({ start, end, summary, description, attendees }) {
  const requestId = `maya-${start.getTime()}-${Math.random().toString(36).slice(2, 10)}`;

  const event = await gapi(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events` +
    `?conferenceDataVersion=1&sendUpdates=all`,
    {
      method: 'POST',
      body: JSON.stringify({
        summary,
        description,
        start: { dateTime: start.toISOString(), timeZone: TZ },
        end: { dateTime: end.toISOString(), timeZone: TZ },
        attendees: attendees.map((email) => ({ email })),
        guestsCanInviteOthers: false,
        conferenceData: {
          createRequest: {
            requestId,
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 60 },
            { method: 'popup', minutes: 10 },
          ],
        },
      }),
    }
  );

  const entry = (event.conferenceData && event.conferenceData.entryPoints || [])
    .find((e) => e.entryPointType === 'video');

  return {
    id: event.id,
    meetLink: event.hangoutLink || (entry && entry.uri) || '',
    htmlLink: event.htmlLink || '',
  };
}

/* ==========================================================================
   Gmail
   ========================================================================== */

/* Subjects and names may contain non-ASCII (₹, accents), so encode them. */
const enc = (s) => `=?UTF-8?B?${Buffer.from(String(s), 'utf8').toString('base64')}?=`;

const b64 = (s) => Buffer.from(s, 'utf8').toString('base64').replace(/(.{76})/g, '$1\r\n');

function buildMime({ to, from, subject, html, text, replyTo, attachments = [] }) {
  const alt = `alt_${Math.random().toString(36).slice(2)}`;
  const mixed = `mix_${Math.random().toString(36).slice(2)}`;
  const hasFiles = attachments.length > 0;

  const headers = [
    `From: ${from}`,
    `To: ${to}`,
    replyTo ? `Reply-To: ${replyTo}` : null,
    `Subject: ${enc(subject)}`,
    'MIME-Version: 1.0',
    hasFiles
      ? `Content-Type: multipart/mixed; boundary="${mixed}"`
      : `Content-Type: multipart/alternative; boundary="${alt}"`,
  ].filter(Boolean).join('\r\n');

  const part = (type, body) => [
    `--${alt}`,
    `Content-Type: ${type}; charset="UTF-8"`,
    'Content-Transfer-Encoding: base64',
    '',
    b64(body),
    '',
  ].join('\r\n');

  const body = [part('text/plain', text), part('text/html', html), `--${alt}--`, ''].join('\r\n');
  if (!hasFiles) return [headers, '', body].join('\r\n');

  const files = attachments.map((a) => [
    `--${mixed}`,
    `Content-Type: ${a.contentType || 'application/octet-stream'}; name="${a.filename}"`,
    `Content-Disposition: attachment; filename="${a.filename}"`,
    'Content-Transfer-Encoding: base64',
    '',
    b64(a.content),
    '',
  ].join('\r\n')).join('');

  return [
    headers, '',
    `--${mixed}`,
    `Content-Type: multipart/alternative; boundary="${alt}"`,
    '',
    body,
    files,
    `--${mixed}--`, '',
  ].join('\r\n');
}

export async function sendMail({ to, subject, html, text, replyTo, attachments }) {
  const raw = Buffer.from(
    buildMime({ to, from: `Maya Studio <${OWNER_EMAIL}>`, subject, html, text, replyTo, attachments }),
    'utf8'
  ).toString('base64url');

  await gapi('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    body: JSON.stringify({ raw }),
  });
  return true;
}
