/* ==========================================================================
   deploy.mjs: push .env to Vercel and ship.

       npm run deploy

   Reads the local .env, pushes every value into the Vercel project as an
   environment variable (Production, Preview and Development), deploys to
   production, then checks /api/health on the live URL and tells you whether
   bookings will genuinely send.

   Requires the Vercel CLI to be authenticated, either:
       vercel login
   or an access token from vercel.com/account/tokens:
       npm run deploy -- --token=XXXXXXXX
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KEYS = [
  'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN',
  'GMAIL_USER', 'GMAIL_APP_PASSWORD', 'MEET_LINK',
  'OWNER_EMAIL', 'CALENDAR_ID',
  'BOOKING_SECRET', 'SITE_URL', 'CRON_SECRET',
];
const TARGETS = ['production', 'preview', 'development'];

const tokenArg = process.argv.find((a) => a.startsWith('--token='));
const TOKEN = tokenArg ? tokenArg.slice(8) : process.env.VERCEL_TOKEN || '';
const auth = TOKEN ? ['--token', TOKEN] : [];

const c = { dim: '\x1b[2m', red: '\x1b[31m', green: '\x1b[32m', yellow: '\x1b[33m', cyan: '\x1b[36m', b: '\x1b[1m', r: '\x1b[0m' };
const say = (s = '') => console.log(s);
const die = (s) => { console.error(`\n  ${c.red}${s}${c.r}\n`); process.exit(1); };

/* Every call is capped: some `vercel env` subcommands drop into an
   interactive prompt when the thing you named does not exist, and a prompt
   with no tty attached waits forever. */
function vercel(args, { input, quiet, timeout = 90_000 } = {}) {
  const res = spawnSync('vercel', [...args, ...auth], {
    cwd: ROOT, input, encoding: 'utf8', timeout, killSignal: 'SIGKILL',
    shell: process.platform === 'win32',
  });
  if (res.error && res.error.code === 'ETIMEDOUT') {
    return { status: 1, stdout: '', stderr: `timed out after ${timeout / 1000}s`, timedOut: true };
  }
  if (!quiet && res.error) die(`Could not run the Vercel CLI: ${res.error.message}`);
  return res;
}

/** Names of the environment variables the project already has. */
function existingEnvNames() {
  const res = vercel(['env', 'ls'], { quiet: true, timeout: 60_000 });
  if (res.status !== 0) return null;                   // unknown, skip removals
  const names = new Set();
  for (const line of (res.stdout || '').split(/\r?\n/)) {
    const m = line.match(/^\s{1,4}([A-Z][A-Z0-9_]{2,})\s{2,}/);
    if (m) names.add(m[1]);
  }
  return names;
}

/* ---- read .env ---- */
function readEnv() {
  let raw;
  try { raw = fs.readFileSync(path.join(ROOT, '.env'), 'utf8'); }
  catch { die('No .env file found. Copy .env.example to .env and fill it in first.'); }

  const out = {};
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    let v = m[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (v) out[m[1]] = v;
  }
  return out;
}

async function main() {
  say(`\n  ${c.b}Maya Studio${c.r}: deploy to Vercel\n`);

  /* 1. authenticated? */
  const who = vercel(['whoami'], { quiet: true });
  if (who.status !== 0) {
    die([
      'The Vercel CLI is not signed in.',
      '',
      '  Run this once, approve it in the browser, then try again:',
      `    ${c.cyan}vercel login${c.r}`,
      '',
      '  Or pass an access token from vercel.com/account/tokens:',
      `    ${c.cyan}npm run deploy -- --token=XXXXXXXX${c.r}`,
    ].join('\n  '));
  }
  say(`  ${c.green}●${c.r} signed in as ${who.stdout.trim()}`);

  /* 2. what have we got to push? */
  const env = readEnv();
  const present = KEYS.filter((k) => env[k]);
  if (!present.length) die('.env has no values filled in yet, nothing to push.');

  const hasGoogle = ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN'].every((k) => env[k]);
  const hasSmtp = env.GMAIL_APP_PASSWORD && env.MEET_LINK;
  if (!hasGoogle && !hasSmtp) {
    say(`\n  ${c.yellow}!${c.r} Neither setup is complete, so the live site will still be in preview mode.`);
    say(`    Google needs all three GOOGLE_* values; the quick route needs GMAIL_APP_PASSWORD + MEET_LINK.`);
    say(`    Deploying anyway, re-run this once .env is filled in.\n`);
  }

  /* 3. link the project (no-op if already linked) */
  if (!fs.existsSync(path.join(ROOT, '.vercel', 'project.json'))) {
    say(`\n  linking project…`);
    const link = vercel(['link', '--yes']);
    if (link.status !== 0) die(`vercel link failed:\n${link.stderr || link.stdout}`);
  }

  /* 4. push env vars */
  say(`\n  pushing ${present.length} environment value${present.length === 1 ? '' : 's'}…`);
  const existing = existingEnvNames();
  for (const key of present) {
    // Clear it first so re-running updates rather than erroring, but only
    // when it is actually there, because removing a name that does not exist is
    // what drops the CLI into a prompt.
    if (existing === null || existing.has(key)) {
      vercel(['env', 'rm', key, '--yes'], { quiet: true, timeout: 60_000 });
    }
    const failed = [];
    for (const target of TARGETS) {
      const add = vercel(['env', 'add', key, target], { input: env[key] + '\n', timeout: 150_000 });
      if (add.status !== 0) failed.push(`${target}: ${(add.stderr || '').trim().split('\n').pop()}`);
    }
    if (failed.length) say(`    ${c.red}✗${c.r} ${key}: ${failed[0]}`);
    else say(`    ${c.green}✓${c.r} ${key}`);
  }

  /* 5. ship */
  say(`\n  deploying to production…\n`);
  const dep = spawnSync('vercel', ['--prod', '--yes', ...auth], {
    cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'],
    shell: process.platform === 'win32',
  });
  if (dep.status !== 0) die('Deploy failed, see the output above.');

  const url = (dep.stdout.match(/https:\/\/[^\s]+\.vercel\.app/g) || []).pop();
  if (!url) {
    say(`\n  ${c.yellow}Deployed, but could not read the URL from the output.${c.r}\n`);
    return;
  }

  /* 6. tell the truth about whether it actually works */
  say(`\n  ${c.green}●${c.r} live at ${c.cyan}${url}${c.r}`);
  try {
    const r = await fetch(`${url}/api/health`, { headers: { accept: 'application/json' } });
    const h = await r.json();
    say(`  ${h.live ? `${c.green}●${c.r}` : `${c.yellow}●${c.r}`} ${h.note}`);
    if (h.live) {
      say(`\n  Book a slot with your own email address to confirm both messages arrive.\n`);
    } else {
      say(`\n  Fill in .env, then run ${c.cyan}npm run deploy${c.r} again.\n`);
    }
  } catch {
    say(`  ${c.dim}(could not reach ${url}/api/health, check it in a browser)${c.r}\n`);
  }
}

main().catch((e) => die(e.message));
