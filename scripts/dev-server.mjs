/* ==========================================================================
   dev-server.mjs — the local preview.

   Serves the static site and runs the same booking handlers the Vercel
   functions use, so what you click locally is what ships.

       npm start            → http://localhost:3000
       npm start -- 4000    → a different port

   Reads .env from the project root if one exists. Zero dependencies.
   ========================================================================== */
import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/* ---- .env (plain KEY=VALUE, # comments, optional quotes) ---- */
try {
  const raw = fs.readFileSync(path.join(ROOT, '.env'), 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    let v = m[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (!(m[1] in process.env)) process.env[m[1]] = v;
  }
  console.log('  · loaded .env');
} catch { /* no .env — demo mode */ }

const { getSlots, postBook, rateLimited, capability, capabilityNote, healthBody } = await import('../api/_lib/handlers.js');
const { verifyTransport, mailMode } = await import('../api/_lib/mailer.js');

const PORT = Number(process.argv[2] || process.env.PORT || 3000);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff',
  '.mp4': 'video/mp4', '.webm': 'video/webm', '.m4a': 'audio/mp4',
  '.txt': 'text/plain; charset=utf-8',
};

const json = (res, status, body) => {
  const s = JSON.stringify(body);
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', 'content-length': Buffer.byteLength(s) });
  res.end(s);
};

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = [];
    req.on('data', (c) => {
      chunks.push(c);
      if (chunks.reduce((n, b) => n + b.length, 0) > 256 * 1024) req.destroy();
    });
    req.on('end', () => {
      try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')); }
      catch { resolve({}); }
    });
    req.on('error', () => resolve({}));
  });
}

/* ---- static, with Range support so the story video can seek ---- */
async function serveStatic(req, res, pathname) {
  let rel = decodeURIComponent(pathname);
  if (rel.endsWith('/')) rel += 'index.html';

  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT)) { res.writeHead(403).end('Forbidden'); return; }

  let stat;
  try { stat = await fsp.stat(file); } catch {
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end('<h1 style="font:600 20px system-ui;padding:40px">404 — not found</h1>');
    return;
  }
  if (stat.isDirectory()) return serveStatic(req, res, rel + '/index.html');

  const type = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
  const immutable = /\.(woff2?|mp4|webm|jpg|jpeg|png|webp)$/i.test(file);
  const headers = {
    'content-type': type,
    'cache-control': immutable ? 'public, max-age=3600' : 'no-cache',
    'accept-ranges': 'bytes',
  };

  const range = req.headers.range;
  if (range) {
    const m = /bytes=(\d*)-(\d*)/.exec(range);
    if (m) {
      const start = m[1] ? Number(m[1]) : 0;
      const end = m[2] ? Number(m[2]) : stat.size - 1;
      if (start >= stat.size || end >= stat.size || start > end) {
        res.writeHead(416, { 'content-range': `bytes */${stat.size}` }).end();
        return;
      }
      res.writeHead(206, {
        ...headers,
        'content-range': `bytes ${start}-${end}/${stat.size}`,
        'content-length': end - start + 1,
      });
      fs.createReadStream(file, { start, end }).pipe(res);
      return;
    }
  }

  res.writeHead(200, { ...headers, 'content-length': stat.size });
  if (req.method === 'HEAD') return res.end();
  fs.createReadStream(file).pipe(res);
}

/* ---- server ---- */
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const p = url.pathname;

  try {
    if (p === '/api/slots') {
      if (req.method !== 'GET') return json(res, 405, { ok: false, error: 'Use GET.' });
      const { status, body } = await getSlots(url.searchParams.get('date') || '');
      return json(res, status, body);
    }

    if (p === '/api/book') {
      if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'Use POST.' });
      const ip = req.socket.remoteAddress || 'local';
      if (rateLimited(ip, 40)) return json(res, 429, { ok: false, error: 'Slow down a moment.' });
      const payload = await readBody(req);
      const { status, body } = await postBook(payload);
      if (body && body.ok) {
        console.log(`  ✓ booking  ${payload.name} — ${payload.date} ${payload.time}  [${body.mode}]`);
        if (body.note) console.log(`    ${body.note}`);
      }
      return json(res, status, body);
    }

    if (p === '/api/health') return json(res, 200, healthBody());

    if (p.startsWith('/api/')) return json(res, 404, { ok: false, error: 'No such endpoint.' });

    return await serveStatic(req, res, p);
  } catch (err) {
    console.error('server error:', err);
    if (!res.headersSent) json(res, 500, { ok: false, error: 'Something broke on the server.' });
    else res.end();
  }
});

server.listen(PORT, async () => {
  const cap = capability();
  console.log('');
  console.log('  \x1b[1mMaya Studio\x1b[0m — local preview');
  console.log('');
  console.log(`  \x1b[36mhttp://localhost:${PORT}\x1b[0m`);
  console.log('');
  console.log(cap.live ? `  \x1b[32m●\x1b[0m ${capabilityNote()}` : `  \x1b[33m●\x1b[0m ${capabilityNote()}`);

  // A bad App Password should surface now, not on someone's booking.
  if (mailMode() === 'smtp') {
    try {
      await verifyTransport();
      console.log('    SMTP handshake OK.');
    } catch (e) {
      console.log(`    \x1b[31mSMTP check failed:\x1b[0m ${e.message}`);
      console.log('    Check GMAIL_USER / GMAIL_APP_PASSWORD in .env.');
    }
  }
  console.log('  Ctrl+C to stop.');
  console.log('');
});
