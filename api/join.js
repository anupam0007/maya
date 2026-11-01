/* GET /api/join?b=<token>
   Decides whether this booking may have the Meet URL yet. The URL is only
   ever in the response while the call is actually open — an early visit
   gets the time and a countdown, nothing more. The clock used is the
   server's, so changing your device clock achieves nothing. */
import { openBooking } from './_lib/token.js';
import { prettyLong, SLOT_MIN, OPEN_BEFORE_MIN, CLOSE_AFTER_MIN } from './_lib/handlers.js';
import { MEET_LINK } from './_lib/google.js';

export default async function handler(req, res) {
  res.setHeader('cache-control', 'no-store');

  const token = (req.query && req.query.b)
    || new URL(req.url, 'http://x').searchParams.get('b');

  const booking = openBooking(String(token || ''));
  if (!booking) {
    return res.status(200).json({ ok: true, state: 'invalid' });
  }

  const start = new Date(`${booking.date}T${booking.time}:00+05:30`);
  const startMs = start.getTime();
  const opensMs = startMs - OPEN_BEFORE_MIN * 60000;
  const closesMs = startMs + CLOSE_AFTER_MIN * 60000;
  const now = Date.now();

  const common = {
    ok: true,
    name: booking.name,
    whenLong: prettyLong(booking.date, booking.time),
    startISO: start.toISOString(),
    opensISO: new Date(opensMs).toISOString(),
    durationMin: SLOT_MIN,
    opensBeforeMin: OPEN_BEFORE_MIN,
  };

  if (now < opensMs) {
    return res.status(200).json({ ...common, state: 'early', opensInMs: opensMs - now });
  }
  if (now > closesMs) {
    return res.status(200).json({ ...common, state: 'past' });
  }

  // Open — and only now does the actual meeting URL leave the server.
  // A booking made through Google OAuth carries its own link; the simpler
  // setup falls back to the studio's fixed room.
  return res.status(200).json({
    ...common,
    state: 'open',
    meetLink: booking.meetLink || MEET_LINK || '',
    closesInMs: closesMs - now,
  });
}
