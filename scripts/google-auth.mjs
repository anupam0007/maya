/* ==========================================================================
   google-auth.mjs: one-time helper that gets your GOOGLE_REFRESH_TOKEN.

       npm run auth

   Before running it, create an OAuth client in Google Cloud Console:
     1. console.cloud.google.com → new project (or an existing one)
     2. APIs & Services → Library → enable "Google Calendar API" and "Gmail API"
     3. APIs & Services → OAuth consent screen → External → add yourself
        under "Test users" (anupamgowda1999@gmail.com)
     4. Credentials → Create credentials → OAuth client ID → Web application
     5. Authorised redirect URI:  http://localhost:5353/callback
     6. Put the client id and secret in .env, then run this script.

   It opens a consent page, you approve, and it prints the refresh token to
   paste into .env. Nothing is sent anywhere except Google.
   ========================================================================== */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 5353;
const REDIRECT = `http://localhost:${PORT}/callback`;
const SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/gmail.send',
];

/* ---- read .env ---- */
try {
  for (const line of fs.readFileSync(path.join(ROOT, '.env'), 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    let v = m[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (!(m[1] in process.env)) process.env[m[1]] = v;
  }
} catch { /* fall through to the check below */ }

const ID = process.env.GOOGLE_CLIENT_ID;
const SECRET = process.env.GOOGLE_CLIENT_SECRET;

if (!ID || !SECRET) {
  console.error(`
  Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET.

  Open .env in this folder and paste the two values from
  Google Cloud Console → Credentials → your OAuth client ID.
  Then run "npm run auth" again.

  Full walkthrough: see "Option A" in README.md
`);
  process.exit(1);
}

const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
  client_id: ID,
  redirect_uri: REDIRECT,
  response_type: 'code',
  scope: SCOPES.join(' '),
  access_type: 'offline',
  prompt: 'consent',
  include_granted_scopes: 'true',
});

const page = (title, body, ok = true) => `<!doctype html><meta charset="utf-8">
<title>${title}</title>
<body style="margin:0;background:#F2ECE1;font:400 16px/1.6 system-ui,sans-serif;color:#17120D;display:grid;place-items:center;height:100vh">
<div style="max-width:460px;padding:40px;background:#FBF7F0;border:1px solid #E0D4BF;border-radius:20px;text-align:center">
<div style="font:400 30px Georgia,serif;color:${ok ? '#27392C' : '#C0543A'};margin-bottom:10px">${title}</div>
<p style="color:#3B332A">${body}</p></div>`;

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  if (url.pathname !== '/callback') { res.writeHead(404).end(); return; }

  const err = url.searchParams.get('error');
  const code = url.searchParams.get('code');

  if (err || !code) {
    res.writeHead(400, { 'content-type': 'text/html; charset=utf-8' });
    res.end(page('Not authorised', `Google said: ${err || 'no code returned'}.`, false));
    console.error(`\n  Authorisation failed: ${err || 'no code'}\n`);
    server.close();
    process.exit(1);
  }

  try {
    const r = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code, client_id: ID, client_secret: SECRET,
        redirect_uri: REDIRECT, grant_type: 'authorization_code',
      }),
    });
    const j = await r.json();
    if (!r.ok || !j.refresh_token) {
      throw new Error(j.error_description || j.error || 'no refresh_token in the response');
    }

    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(page('Connected', 'You can close this tab and go back to the terminal.'));

    console.log(`
  Connected.

  Add this line to your .env file:

    GOOGLE_REFRESH_TOKEN=${j.refresh_token}

  Then add the same three values in Vercel:
    Project → Settings → Environment Variables
      GOOGLE_CLIENT_ID
      GOOGLE_CLIENT_SECRET
      GOOGLE_REFRESH_TOKEN

  Restart "npm start" and bookings will create real Google Meet links
  and send real email.
`);
  } catch (e) {
    res.writeHead(500, { 'content-type': 'text/html; charset=utf-8' });
    res.end(page('Something went wrong', String(e.message), false));
    console.error('\n  Token exchange failed:', e.message, '\n');
  }
  server.close();
  setTimeout(() => process.exit(0), 300);
});

server.listen(PORT, () => {
  console.log(`
  Opening Google's consent page…

  If your browser doesn't open, paste this in yourself:

  ${authUrl}
`);
  const cmd = process.platform === 'win32' ? ['cmd', ['/c', 'start', '', authUrl]]
    : process.platform === 'darwin' ? ['open', [authUrl]]
    : ['xdg-open', [authUrl]];
  try { spawn(cmd[0], cmd[1], { detached: true, stdio: 'ignore' }).unref(); } catch { /* paste it manually */ }
});
