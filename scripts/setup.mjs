/* ==========================================================================
   setup.mjs — the fastest way to make bookings real.

       npm run setup

   Asks for the two or three values only your Google account can issue,
   writes them into .env, verifies them against Google straight away, and
   sends a real test email to both addresses so you can see it work before
   anything goes near a client.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ENV = path.join(ROOT, '.env');

const c = { b: '\x1b[1m', dim: '\x1b[2m', red: '\x1b[31m', green: '\x1b[32m', yellow: '\x1b[33m', cyan: '\x1b[36m', r: '\x1b[0m' };
const say = (s = '') => console.log(s);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q, fallback = '') => new Promise((res) => {
  rl.question(q, (a) => res((a || '').trim() || fallback));
});

/* ---- read any .env that already exists so we only top it up ---- */
function readEnv() {
  const out = {};
  try {
    for (const line of fs.readFileSync(ENV, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
      if (!m) continue;
      let v = m[2].trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
      out[m[1]] = v;
    }
  } catch { /* first run */ }
  return out;
}

function writeEnv(env) {
  const body = `# Maya Studio — written by "npm run setup".
# Never commit this file. It is already in .gitignore.

${Object.entries(env).filter(([, v]) => v !== undefined).map(([k, v]) => `${k}=${v}`).join('\n')}
`;
  fs.writeFileSync(ENV, body);
}

async function main() {
  say(`\n  ${c.b}Maya Studio${c.r} — connect bookings to Google\n`);
  const env = readEnv();
  env.OWNER_EMAIL = env.OWNER_EMAIL || 'anupamgowda1999@gmail.com';
  env.CALENDAR_ID = env.CALENDAR_ID || 'primary';

  say(`  ${c.b}1${c.r}  Gmail App Password ${c.dim}— about 3 minutes, real email, one fixed Meet room${c.r}`);
  say(`  ${c.b}2${c.r}  Full Google OAuth  ${c.dim}— about 10 minutes, a new Meet link for every booking${c.r}\n`);
  const choice = await ask(`  Which one? [1] `, '1');

  if (choice === '2') {
    say(`
  ${c.cyan}Full Google OAuth${c.r}

  1. Enable both APIs (one click, pre-filled):
     ${c.cyan}https://console.cloud.google.com/flows/enableapi?apiid=calendar-json.googleapis.com,gmail.googleapis.com${c.r}

  2. Consent screen → External → add ${env.OWNER_EMAIL} as a Test user:
     ${c.cyan}https://console.cloud.google.com/apis/credentials/consent${c.r}

  3. Credentials → Create credentials → OAuth client ID → Web application.
     Authorised redirect URI, exactly:
       ${c.cyan}http://localhost:5353/callback${c.r}
     ${c.cyan}https://console.cloud.google.com/apis/credentials${c.r}
`);
    const id = await ask(`  Paste the Client ID: `, env.GOOGLE_CLIENT_ID || '');
    const secret = await ask(`  Paste the Client secret: `, env.GOOGLE_CLIENT_SECRET || '');
    if (!id || !secret) { say(`\n  ${c.red}Both values are needed. Run setup again when you have them.${c.r}\n`); rl.close(); return; }
    env.GOOGLE_CLIENT_ID = id;
    env.GOOGLE_CLIENT_SECRET = secret;
    writeEnv(env);
    say(`\n  ${c.green}Saved.${c.r} Now run:  ${c.cyan}npm run auth${c.r}`);
    say(`  Approve the consent screen, paste the refresh token it prints into .env,`);
    say(`  then run:  ${c.cyan}npm run deploy${c.r}\n`);
    rl.close();
    return;
  }

  /* ---------- the quick route ---------- */
  say(`
  ${c.cyan}Gmail App Password${c.r}

  a. 2-Step Verification must be on:
     ${c.cyan}https://myaccount.google.com/security${c.r}

  b. Create an App Password (name it "Maya site") and copy the 16 characters:
     ${c.cyan}https://myaccount.google.com/apppasswords${c.r}

  c. Get your permanent Meet room — open Google Meet, click "New meeting",
     then "Create a meeting for later", and copy the link:
     ${c.cyan}https://meet.google.com${c.r}
`);

  const user = await ask(`  Your Gmail address [${env.OWNER_EMAIL}]: `, env.OWNER_EMAIL);
  const pass = (await ask(`  App Password (16 characters): `, env.GMAIL_APP_PASSWORD || '')).replace(/\s+/g, '');
  const meet = await ask(`  Your Meet room link: `, env.MEET_LINK || '');

  if (!pass || pass.length < 16) { say(`\n  ${c.red}That App Password looks too short — it should be 16 characters.${c.r}\n`); rl.close(); return; }
  if (!/^https:\/\/meet\.google\.com\/[a-z]{3}-[a-z]{4}-[a-z]{3}/i.test(meet)) {
    say(`\n  ${c.red}That does not look like a Meet link.${c.r} It should read like https://meet.google.com/abc-defg-hij\n`);
    rl.close(); return;
  }

  env.GMAIL_USER = user;
  env.GMAIL_APP_PASSWORD = pass;
  env.MEET_LINK = meet.trim();
  env.OWNER_EMAIL = user;
  writeEnv(env);
  say(`\n  ${c.green}Saved to .env${c.r}`);

  /* ---- prove it works before anyone relies on it ---- */
  process.env.GMAIL_USER = env.GMAIL_USER;
  process.env.GMAIL_APP_PASSWORD = env.GMAIL_APP_PASSWORD;
  process.env.MEET_LINK = env.MEET_LINK;
  process.env.OWNER_EMAIL = env.OWNER_EMAIL;

  const { verifyTransport, deliver } = await import('../api/_lib/mailer.js');
  const { clientEmail } = await import('../api/_lib/email.js');

  process.stdout.write(`  checking the password with Gmail… `);
  try {
    await verifyTransport();
    say(`${c.green}ok${c.r}`);
  } catch (e) {
    say(`${c.red}failed${c.r}\n\n  ${e.message}\n`);
    say(`  Most likely the App Password was mistyped, or 2-Step Verification is off.`);
    say(`  Fix it and run ${c.cyan}npm run setup${c.r} again.\n`);
    rl.close(); return;
  }

  const to = await ask(`  Send a test email to which address? [${env.OWNER_EMAIL}] `, env.OWNER_EMAIL);
  process.stdout.write(`  sending… `);
  try {
    const mail = clientEmail({
      name: 'Test Booking',
      whenLong: 'this is only a test — no call is scheduled',
      meetLink: env.MEET_LINK,
      services: 'a test of the booking emails',
    });
    await deliver({ to, replyTo: env.OWNER_EMAIL, ...mail });
    say(`${c.green}sent${c.r}`);
    say(`\n  Check ${c.b}${to}${c.r} — you should have it within a few seconds.`);
  } catch (e) {
    say(`${c.red}failed${c.r}\n  ${e.message}\n`);
    rl.close(); return;
  }

  say(`
  ${c.green}Bookings are now real on this machine.${c.r}

  Last step — push the same values to Vercel and redeploy:

      ${c.cyan}npm run deploy${c.r}

  Then open your live /api/health and check it says "live": true.
`);
  rl.close();
}

main().catch((e) => { console.error(`\n  ${c.red}${e.message}${c.r}\n`); rl.close(); process.exit(1); });
