/* ==========================================================================
   handlers.js — the booking logic, shared by the Vercel functions and the
   local dev server so both behave identically.

   Studio hours: Monday–Saturday, 09:00–18:00 IST, in 30-minute slots.
   These constants must stay in step with src/booking.js.

   There are three possible states, decided purely by which environment
   variables are present:

     "google"  GOOGLE_CLIENT_ID/SECRET/REFRESH_TOKEN
               A real calendar event with its own Google Meet link, real
               calendar invites, real email, and taken slots read live from
               the calendar. This is the full thing.

     "smtp"    GMAIL_USER + GMAIL_APP_PASSWORD + MEET_LINK
               Real email to both people carrying your fixed Meet room.
               No calendar event, so slots are not de-duplicated.

     "preview" Neither. Nothing is sent and NO link is invented — the two
               emails are written to .data/outbox/ so you can read them.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import {
  hasGoogleOAuth, freeBusy, createEvent, OWNER_EMAIL, MEET_LINK, TZ,
} from './google.js';
import { deliver, mailMode, GMAIL_USER } from './mailer.js';
import { clientEmail, ownerEmail } from './email.js';

export const OPEN_HOUR = 9;
export const CLOSE_HOUR = 18;
export const SLOT_MIN = 30;
export const LEAD_MIN = 60;
export const DAYS_AHEAD = 56;

const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/* ---- dates (India has no DST, so +05:30 is always correct) ---- */
const parseYmd = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d, 12)); };
const ymd = (d) => `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
const addDays = (s, n) => { const d = parseYmd(s); d.setUTCDate(d.getUTCDate() + n); return ymd(d); };
const slotInstant = (date, time) => new Date(`${date}T${time}:00+05:30`);
const istToday = () => new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

export function allSlots() {
  const out = [];
  for (let m = OPEN_HOUR * 60; m < CLOSE_HOUR * 60; m += SLOT_MIN) {
    out.push(`${String((m / 60) | 0).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`);
  }
  return out;
}

function prettyTime(t) {
  const [h, m] = t.split(':').map(Number);
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}:${String(m).padStart(2, '0')} ${h >= 12 ? 'pm' : 'am'}`;
}
export function prettyLong(date, time) {
  const d = parseYmd(date);
  return `${DOW[d.getUTCDay()]} ${d.getUTCDate()} ${MON[d.getUTCMonth()]} ${d.getUTCFullYear()}, ${prettyTime(time)} IST`;
}

const isDate = (s) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(parseYmd(s).getTime());
const isSunday = (s) => parseYmd(s).getUTCDay() === 0;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

/* ==========================================================================
   What is this deployment actually able to do?
   ========================================================================== */
export function capability() {
  const mail = mailMode();                       // 'google' | 'smtp' | 'none'
  const canMeet = hasGoogleOAuth() || Boolean(MEET_LINK);
  const canMail = mail !== 'none';
  const how = hasGoogleOAuth() ? 'google' : (canMail && canMeet ? 'smtp' : 'preview');
  return { mail, canMeet, canMail, live: canMail && canMeet, how };
}

/** The body of /api/health, identical locally and on Vercel. */
export function healthBody() {
  const cap = capability();
  return {
    ok: true,
    live: cap.live,
    meetLinkSource: cap.canMeet
      ? (cap.how === 'google' ? 'google-calendar (new link per booking)' : 'fixed MEET_LINK')
      : null,
    emailTransport: cap.mail === 'none' ? null : cap.mail,
    note: capabilityNote(),
  };
}

/** A one-line description for the dev-server banner and /api/health. */
export function capabilityNote() {
  const c = capability();
  if (c.how === 'google') return 'Google connected — a new Meet link per booking, real invites, real email.';
  if (c.how === 'smtp') return `Gmail SMTP connected as ${GMAIL_USER} — real email to both, using your fixed MEET_LINK.`;
  const missing = [];
  if (!c.canMail) missing.push('an email transport (GOOGLE_* or GMAIL_APP_PASSWORD)');
  if (!c.canMeet) missing.push('a Meet link source (GOOGLE_* or MEET_LINK)');
  return `Preview mode — missing ${missing.join(' and ')}. Nothing is sent and no link is invented.`;
}

/* ==========================================================================
   Preview store — only used when nothing is configured, so the flow can
   still be clicked through. On Vercel the filesystem is read-only outside
   /tmp, so every write here is best-effort.
   ========================================================================== */
const DATA_DIR = process.env.MAYA_DATA_DIR || path.join(process.cwd(), '.data');
const BOOKINGS = path.join(DATA_DIR, 'bookings.json');

function readBookings() {
  try { return JSON.parse(fs.readFileSync(BOOKINGS, 'utf8')); } catch { return []; }
}
function writeBookings(list) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(BOOKINGS, JSON.stringify(list, null, 2));
    return true;
  } catch { return false; }
}
function writeOutbox(stamp, who, mail) {
  try {
    const dir = path.join(DATA_DIR, 'outbox');
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${stamp}-${who}.html`);
    fs.writeFileSync(file, mail.html);
    return file;
  } catch { return null; }
}

/* ==========================================================================
   GET /api/slots?date=YYYY-MM-DD
   ========================================================================== */
export async function getSlots(date) {
  const cap = capability();
  const mode = cap.live ? 'live' : 'demo';

  if (!isDate(date)) return { status: 400, body: { ok: false, error: 'Send a date as YYYY-MM-DD.' } };

  const today = istToday();
  if (date < today || date > addDays(today, DAYS_AHEAD)) {
    return { status: 200, body: { ok: true, date, taken: allSlots(), mode } };
  }
  if (isSunday(date)) {
    return { status: 200, body: { ok: true, date, taken: allSlots(), closed: true, mode } };
  }

  // Only the full Google setup can tell us what is genuinely booked.
  if (!hasGoogleOAuth()) {
    const taken = readBookings().filter((b) => b.date === date).map((b) => b.time);
    return { status: 200, body: { ok: true, date, taken, mode } };
  }

  try {
    const busy = await freeBusy(slotInstant(date, '00:00'), slotInstant(addDays(date, 1), '00:00'));
    const taken = allSlots().filter((t) => {
      const s = slotInstant(date, t).getTime();
      const e = s + SLOT_MIN * 60000;
      return busy.some((b) => s < b.end.getTime() && e > b.start.getTime());
    });
    return { status: 200, body: { ok: true, date, taken, mode: 'live' } };
  } catch (err) {
    // Never block the grid because the calendar hiccuped — show it open and
    // let the booking itself be the thing that fails loudly.
    console.error('[slots] freeBusy failed:', err.message);
    return { status: 200, body: { ok: true, date, taken: [], mode: 'live', degraded: true } };
  }
}

/* ==========================================================================
   POST /api/book
   ========================================================================== */
export async function postBook(payload = {}) {
  const name = String(payload.name || '').trim();
  const email = String(payload.email || '').trim();
  const phone = String(payload.phone || '').trim();
  const city = String(payload.city || '').trim();
  const pref = String(payload.pref || 'WhatsApp').trim();
  const date = String(payload.date || '').trim();
  const time = String(payload.time || '').trim();
  const summary = String(payload.summary || '').trim();
  const message = String(payload.message || '').trim();
  const services = Array.isArray(payload.services) ? payload.services.slice(0, 8).join(', ') : '';

  const bad = (error) => ({ status: 400, body: { ok: false, error } });

  if (name.length < 2 || name.length > 80) return bad('Please add your name.');
  if (!EMAIL_RE.test(email) || email.length > 120) return bad('That email address does not look right.');
  if (phone.replace(/\D/g, '').length < 10) return bad('Please add a phone number we can reach you on.');
  if (!isDate(date)) return bad('Pick a valid date.');
  if (!allSlots().includes(time)) return bad('Pick one of the available times.');
  if (isSunday(date)) return bad('We are closed on Sundays. Please pick Monday to Saturday.');

  const start = slotInstant(date, time);
  const end = new Date(start.getTime() + SLOT_MIN * 60000);
  if (start.getTime() < Date.now() + LEAD_MIN * 60000) return bad('That time has passed — please pick a later slot.');
  if (date > addDays(istToday(), DAYS_AHEAD)) return bad('That date is too far ahead.');
  if (summary.length > 4000 || message.length > 2000) return bad('That is a lot of detail — please shorten it a little.');

  const whenLong = prettyLong(date, time);
  const stamp = `${date}-${time.replace(':', '')}`;
  const cap = capability();

  /* ---------- nothing configured: preview, and we say so ---------- */
  if (!cap.live) {
    const list = readBookings();
    if (list.some((b) => b.date === date && b.time === time)) {
      return bad('Sorry — someone just took that slot. Please pick another.');
    }

    const mails = {
      client: clientEmail({ name, whenLong, meetLink: '', services }),
      owner: ownerEmail({ name, email, phone, city, pref, whenLong, meetLink: '', summary, message }),
    };
    const file = writeOutbox(stamp, 'client', mails.client);
    writeOutbox(stamp, 'owner', mails.owner);

    list.push({ date, time, name, email, phone, city, pref, summary, message, at: new Date().toISOString() });
    writeBookings(list);

    return {
      status: 200,
      body: {
        ok: true, mode: 'demo', meetLink: '', htmlLink: '',
        startISO: start.toISOString(), endISO: end.toISOString(),
        emailed: { client: false, owner: false },
        note: file
          ? `Not sent — email is not connected yet. Both messages were written to ${path.relative(process.cwd(), path.dirname(file))} so you can open them in a browser.`
          : 'Not sent — email is not connected yet.',
        reason: capabilityNote(),
      },
    };
  }

  /* ---------- live ---------- */
  let meetLink = MEET_LINK;
  let htmlLink = '';
  let eventId = '';

  try {
    if (hasGoogleOAuth()) {
      // last-second double-booking guard
      const busy = await freeBusy(start, end);
      if (busy.some((b) => start < b.end && end > b.start)) {
        return bad('Sorry — someone just took that slot. Please pick another.');
      }

      const description = [
        'A 30-minute intro call with Maya Studio.',
        '',
        summary || '',
        message ? `\nIn their words:\n"${message}"` : '',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        city ? `City: ${city}` : '',
        `Prefers: ${pref}`,
      ].filter(Boolean).join('\n');

      const event = await createEvent({
        start, end,
        summary: `Maya Studio × ${name} — intro call`,
        description,
        attendees: [email, OWNER_EMAIL],
      });
      meetLink = event.meetLink || MEET_LINK;
      htmlLink = event.htmlLink;
      eventId = event.id;
    }
  } catch (err) {
    console.error('[book] calendar failed:', err);
    return {
      status: 502,
      body: { ok: false, error: 'We could not reach Google just now, so the call was not booked. Please try again, or message us on WhatsApp.' },
    };
  }

  /* The slot is real at this point. A mail failure must be reported but
     must not pretend the booking did not happen. */
  const mc = clientEmail({ name, whenLong, meetLink, services });
  const mo = ownerEmail({ name, email, phone, city, pref, whenLong, meetLink, summary, message });

  const results = await Promise.allSettled([
    deliver({ to: email, replyTo: OWNER_EMAIL, ...mc }),
    deliver({ to: OWNER_EMAIL, replyTo: email, ...mo }),
  ]);
  const emailed = {
    client: results[0].status === 'fulfilled',
    owner: results[1].status === 'fulfilled',
  };
  results.forEach((r, i) => {
    if (r.status === 'rejected') console.error(`[book] ${i ? 'owner' : 'client'} mail failed:`, r.reason && r.reason.message);
  });

  return {
    status: 200,
    body: {
      ok: true, mode: 'live', how: cap.how,
      meetLink, htmlLink, eventId,
      startISO: start.toISOString(), endISO: end.toISOString(),
      recipients: { client: email, owner: OWNER_EMAIL },
      emailed,
      note: emailed.client && emailed.owner
        ? ''
        : 'Your slot is booked, but one of the confirmation emails did not go out. We will follow up by phone.',
    },
  };
}

/* ---- a very small per-IP throttle, enough to stop casual abuse ---- */
const hits = new Map();
export function rateLimited(ip, max = 8, windowMs = 10 * 60_000) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return list.length > max;
}
