/* ==========================================================================
   token.js — the sealed booking ticket behind a join link.

   The Meet URL never travels in the email, and never travels in the link
   either. The link carries an AES-256-GCM sealed blob; only the server
   can open it, and it only hands the URL back once the call is actually
   open. Changing your device clock achieves nothing, and decoding the
   link by hand yields ciphertext.

   Sealed rather than merely signed because the blob carries the meeting
   URL: base64 is not a secret, and a signed-but-readable token would put
   the URL right back in the email.
   ========================================================================== */
import crypto from 'node:crypto';

/** Reuse an existing secret if no dedicated one is set, so this never
    silently breaks on a deployment made before BOOKING_SECRET existed. */
function key() {
  const s = process.env.BOOKING_SECRET
    || process.env.GOOGLE_CLIENT_SECRET
    || process.env.GMAIL_APP_PASSWORD;
  if (!s) throw new Error('No secret available to seal booking links.');
  return crypto.createHash('sha256').update('maya-join:' + s).digest();
}

export function sealBooking({ date, time, name, email, meetLink }) {
  const body = Buffer.from(JSON.stringify({
    d: date, t: time,
    n: String(name || '').slice(0, 60),
    e: String(email || '').slice(0, 120),
    m: String(meetLink || '').slice(0, 300),
  }), 'utf8');

  const iv = crypto.randomBytes(12);
  const c = crypto.createCipheriv('aes-256-gcm', key(), iv);
  const enc = Buffer.concat([c.update(body), c.final()]);
  return Buffer.concat([iv, c.getAuthTag(), enc]).toString('base64url');
}

export function openBooking(token) {
  if (typeof token !== 'string' || token.length < 32 || token.length > 2048) return null;
  let buf;
  try { buf = Buffer.from(token, 'base64url'); } catch { return null; }
  if (buf.length < 29) return null;

  try {
    const d = crypto.createDecipheriv('aes-256-gcm', key(), buf.subarray(0, 12));
    d.setAuthTag(buf.subarray(12, 28));
    const out = Buffer.concat([d.update(buf.subarray(28)), d.final()]);
    const o = JSON.parse(out.toString('utf8'));
    if (!/^\d{4}-\d{2}-\d{2}$/.test(o.d) || !/^\d{2}:\d{2}$/.test(o.t)) return null;
    return { date: o.d, time: o.t, name: o.n || '', email: o.e || '', meetLink: o.m || '' };
  } catch {
    return null;           // tampered, truncated, or sealed with another key
  }
}

/** Where the client is sent. Falls back to the domain Vercel provides. */
export function siteUrl() {
  const raw = process.env.SITE_URL
    || process.env.VERCEL_PROJECT_PRODUCTION_URL
    || process.env.VERCEL_URL
    || '';
  if (!raw) return '';
  return raw.startsWith('http') ? raw.replace(/\/$/, '') : `https://${raw.replace(/\/$/, '')}`;
}

export function joinUrl(booking) {
  const base = siteUrl();
  return base ? `${base}/join?b=${sealBooking(booking)}` : '';
}
