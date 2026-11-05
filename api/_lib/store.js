/* ==========================================================================
   store.js: where bookings live between being made and being reminded.

   A serverless function has no memory and no writable disk, so a cron job
   can only remind people about bookings that were written down somewhere.
   Three backings, picked automatically:

     kv    Vercel KV / Upstash Redis, if KV_REST_API_URL + KV_REST_API_TOKEN
           are present. Add the integration in the Vercel dashboard and this
           lights up on its own, with no code change.
     file  a JSON file. Works locally; on Vercel the disk is read-only, so
           this is dev only.
     none  nothing is written, and the cron has nothing to send. The 15-minute
           alarm inside the calendar attachment still fires on the client's
           own device, which is why that exists.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';

const KV_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '';
const KV_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';
const KEY = 'maya:bookings';

const DATA_DIR = process.env.MAYA_DATA_DIR || path.join(process.cwd(), '.data');
const FILE = path.join(DATA_DIR, 'bookings.json');

export function storeKind() {
  if (KV_URL && KV_TOKEN) return 'kv';
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.accessSync(DATA_DIR, fs.constants.W_OK);
    return 'file';
  } catch { return 'none'; }
}

/* ---- Upstash REST ---- */
async function kv(command) {
  const r = await fetch(KV_URL, {
    method: 'POST',
    headers: { authorization: `Bearer ${KV_TOKEN}`, 'content-type': 'application/json' },
    body: JSON.stringify(command),
  });
  if (!r.ok) throw new Error(`KV ${r.status}: ${await r.text()}`);
  const j = await r.json();
  return j.result;
}

/* ---- file ---- */
function readFile() {
  try { return JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch { return []; }
}
function writeFile(list) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(FILE, JSON.stringify(list, null, 2));
    return true;
  } catch { return false; }
}

/* ========================================================================== */

/** Record a booking so it can be reminded about later. Never throws: a
    storage failure must not undo a booking that genuinely happened. */
export async function saveBooking(b) {
  const kind = storeKind();
  const row = {
    id: `${b.date}T${b.time}-${Math.random().toString(36).slice(2, 8)}`,
    date: b.date, time: b.time, name: b.name, email: b.email,
    phone: b.phone || '', joinUrl: b.joinUrl || '', meetLink: b.meetLink || '',
    startMs: b.startMs, at: new Date().toISOString(),
  };
  try {
    if (kind === 'kv') {
      await kv(['ZADD', KEY, row.startMs, JSON.stringify(row)]);
      return kind;
    }
    if (kind === 'file') {
      const list = readFile();
      list.push(row);
      writeFile(list);
      return kind;
    }
  } catch (err) {
    console.error('[store] save failed:', err.message);
  }
  return kind === 'none' ? 'none' : kind;
}

/** Bookings starting inside [fromMs, toMs] that have not been reminded. */
export async function dueBookings(fromMs, toMs) {
  const kind = storeKind();
  try {
    if (kind === 'kv') {
      const rows = await kv(['ZRANGEBYSCORE', KEY, fromMs, toMs]);
      return (rows || []).map((s) => { try { return JSON.parse(s); } catch { return null; } }).filter(Boolean);
    }
    if (kind === 'file') {
      return readFile().filter((r) => !r.remindedAt && r.startMs >= fromMs && r.startMs <= toMs);
    }
  } catch (err) {
    console.error('[store] read failed:', err.message);
  }
  return [];
}

/** Called once a reminder has actually gone out, so it is not sent twice. */
export async function markReminded(row) {
  const kind = storeKind();
  try {
    if (kind === 'kv') {
      await kv(['ZREM', KEY, JSON.stringify(row)]);
      return;
    }
    if (kind === 'file') {
      const list = readFile();
      const hit = list.find((r) => r.id === row.id);
      if (hit) { hit.remindedAt = new Date().toISOString(); writeFile(list); }
    }
  } catch (err) {
    console.error('[store] mark failed:', err.message);
  }
}

/** Drop anything well past, so the set does not grow without limit. */
export async function prune(beforeMs) {
  const kind = storeKind();
  try {
    if (kind === 'kv') await kv(['ZREMRANGEBYSCORE', KEY, '-inf', beforeMs]);
    else if (kind === 'file') writeFile(readFile().filter((r) => r.startMs >= beforeMs));
  } catch { /* housekeeping only */ }
}
