/* GET /api/health → is this deployment actually able to book, link and email?
   Handy right after a deploy: open https://your-site.vercel.app/api/health
   and check that it says "live": true. */
import { healthBody } from './_lib/handlers.js';

export default async function handler(req, res) {
  res.setHeader('cache-control', 'no-store');
  return res.status(200).json(healthBody());
}
