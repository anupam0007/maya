/* POST /api/book → create the calendar event, mint the Google Meet link,
   and email it to the client and to the studio.                           */
import { postBook, rateLimited } from './_lib/handlers.js';

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch { return {}; } }
  const chunks = [];
  for await (const c of req) chunks.push(c);
  if (!chunks.length) return {};
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { return {}; }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Use POST.' });
  }

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim()
    || (req.socket && req.socket.remoteAddress) || 'unknown';
  if (rateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'That is a lot of bookings at once. Please try again in a few minutes.' });
  }

  const payload = await readJson(req);
  const { status, body } = await postBook(payload);

  res.setHeader('cache-control', 'no-store');
  return res.status(status).json(body);
}
