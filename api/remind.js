/* GET /api/remind: the 15-minute nudge.

   Vercel Cron calls this every five minutes (see vercel.json). It looks for
   calls starting inside the next REMIND_BEFORE_MIN window, emails whoever
   has not been reminded yet, and crosses them off.

   Needs somewhere to have written the booking down. See _lib/store.js. With
   no store this does nothing and says so; the 15-minute alarm inside the
   calendar attachment still fires on the client's own device.

   Vercel signs its cron requests with CRON_SECRET when that is set; anything
   else is refused so this cannot be used to spray email. */
import { dueBookings, markReminded, prune, storeKind } from './_lib/store.js';
import { deliver, mailMode } from './_lib/mailer.js';
import { reminderEmail } from './_lib/email.js';
import { prettyLong, REMIND_BEFORE_MIN } from './_lib/handlers.js';

/* A five-minute cron with a 15-minute target needs a window at least that
   wide, or a booking can slip between two runs. */
const WINDOW_MIN = 6;

export default async function handler(req, res) {
  res.setHeader('cache-control', 'no-store');

  const secret = process.env.CRON_SECRET;
  if (secret) {
    const auth = req.headers.authorization || '';
    if (auth !== `Bearer ${secret}`) {
      return res.status(401).json({ ok: false, error: 'Not authorised.' });
    }
  }

  const kind = storeKind();
  if (kind === 'none') {
    return res.status(200).json({
      ok: true, sent: 0, store: kind,
      note: 'No booking store on this deployment, so there is nothing to remind about. '
          + 'Add a KV store in the Vercel dashboard, or switch to the Google Calendar setup. '
          + 'The calendar attachment still reminds the client 15 minutes before.',
    });
  }
  if (mailMode() === 'none') {
    return res.status(200).json({ ok: true, sent: 0, store: kind, note: 'No email transport configured.' });
  }

  const now = Date.now();
  const from = now + (REMIND_BEFORE_MIN - WINDOW_MIN) * 60000;
  const to = now + REMIND_BEFORE_MIN * 60000;

  let rows = [];
  try { rows = await dueBookings(from, to); }
  catch (err) { return res.status(500).json({ ok: false, error: err.message }); }

  const results = [];
  for (const row of rows) {
    try {
      const mail = reminderEmail({
        name: row.name,
        whenLong: prettyLong(row.date, row.time),
        joinLink: row.joinUrl,
        minutes: REMIND_BEFORE_MIN,
      });
      await deliver({ to: row.email, replyTo: process.env.OWNER_EMAIL, ...mail });
      await markReminded(row);
      results.push({ to: row.email, at: `${row.date} ${row.time}`, sent: true });
    } catch (err) {
      console.error('[remind] failed for', row.email, err.message);
      results.push({ to: row.email, at: `${row.date} ${row.time}`, sent: false, error: err.message });
    }
  }

  // housekeeping: anything more than two hours past is no longer interesting
  await prune(now - 2 * 60 * 60000);

  return res.status(200).json({
    ok: true,
    store: kind,
    checked: rows.length,
    sent: results.filter((r) => r.sent).length,
    results,
  });
}
