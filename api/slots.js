/* GET /api/slots?date=YYYY-MM-DD → which 30-minute slots are already taken. */
import { getSlots } from './_lib/handlers.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ ok: false, error: 'Use GET.' });
  }

  const date = (req.query && req.query.date) || new URL(req.url, 'http://x').searchParams.get('date');
  const { status, body } = await getSlots(String(date || ''));

  // Availability moves, but not every second — a few seconds of edge cache
  // keeps the grid snappy without showing a stale slot.
  res.setHeader('cache-control', 'public, max-age=0, s-maxage=20, stale-while-revalidate=40');
  return res.status(status).json(body);
}
