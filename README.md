# Maya Studio — website

A 3D, scroll-animated site for the studio, with slot booking that sends a
**real Google Meet link by email to the client and to
`anupamgowda1999@gmail.com`** the moment a slot is confirmed.

---

## Run it locally

```
npm install
npm start
```

Then open **http://localhost:3000**.

Use a different port with `npm start -- 4000`.

> Opening `index.html` by double-clicking shows the site, but booking will not
> work — browsers block `fetch` from `file://`. Always use `npm start`.

After editing anything in `src/`:

```
npm run build
```

`npm run watch` rebuilds on every save while you work.

---

## Is it live yet?

Open **http://localhost:3000/api/health** (or `/api/health` on your deployed
site). It tells you the truth in one line:

```json
{ "live": true, "meetLinkSource": "google-calendar (new link per booking)", "emailTransport": "google" }
```

While `live` is `false`, the site runs in **preview mode**: the whole flow
works, but nothing is emailed and **no Meet link is invented** — the two
messages are written to `.data/outbox/` as HTML so you can open them in a
browser and read exactly what a client would get.

---

## Making it real — pick one

### Option B — Gmail App Password (about 3 minutes) {#option-b}

Fastest way to get real email going. Every call uses one fixed Meet room —
your personal meeting room — which is fine for a studio taking a few calls a
day.

1. Turn on 2-Step Verification: [myaccount.google.com/security](https://myaccount.google.com/security)
2. Create an App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords) —
   name it "Maya site". You get a 16-character password.
3. Get your permanent Meet room: open [meet.google.com](https://meet.google.com) →
   **New meeting** → **Create a meeting for later** → copy the link.
4. Put all three in `.env`:

```
GMAIL_USER=anupamgowda1999@gmail.com
GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx
MEET_LINK=https://meet.google.com/abc-defg-hij
```

5. `npm start`. The banner should say *Gmail SMTP connected* and run a
   handshake check, so a wrong password shows up immediately rather than on a
   client's booking.

**Trade-off:** no calendar event is created, so the site cannot tell which
slots you have already filled — every slot always shows as free.

### Option A — full Google (about 10 minutes, recommended) {#option-a}

- A **new Meet link for every booking**
- A real calendar event, so Google also sends you both the invite
- Booked slots read live from your calendar and shown greyed out

**1. Create an OAuth client**

1. [console.cloud.google.com](https://console.cloud.google.com) → create a project.
2. **APIs & Services → Library** — enable **Google Calendar API** and **Gmail API**.
3. **APIs & Services → OAuth consent screen** — choose *External*, fill in the
   basics, add `anupamgowda1999@gmail.com` under **Test users**.
4. **Credentials → Create credentials → OAuth client ID → Web application**.
5. Under *Authorised redirect URIs* add exactly `http://localhost:5353/callback`
6. Copy the **Client ID** and **Client secret** into `.env`.

**2. Get the refresh token**

```
npm run auth
```

Approve the consent screen with the `anupamgowda1999@gmail.com` account. The
terminal prints a `GOOGLE_REFRESH_TOKEN=…` line — paste it into `.env`.

**3. Restart**

```
npm start
```

> While the consent screen sits in *Testing*, the refresh token expires every
> 7 days. Before relying on it, publish the app (**OAuth consent screen →
> Publish app**). The only scopes are your own calendar and sending your own
> mail, so Google does not require a review for this.

Keep `.env` out of git — it already is, via `.gitignore`.

---

## What the client gets

Subject: **Thank you for booking — your Google Meet link (Mon 2 November 2026, 3:00 pm IST)**

> **Thank you for booking, Ravi.**
> Your slot with Maya Studio is confirmed. This is the Google Meet link we are
> providing for our call — **please join at the time below**. It works on your
> phone or laptop, no app needed.

…then the date and time, a **Join the Google Meet** button, a note to join a
minute early, and what happens next.

You get a second email at the same moment — *"Ravi Kumar booked a call. Call
them within the hour."* — with their email, phone, city and the full brief,
plus a one-tap **Call Ravi now** button.

The success screen on the site confirms both sends individually, and says so
plainly if either one failed.

Edit the wording in `api/_lib/email.js`.

---

## The joining link is time-locked

The confirmation email does **not** contain the Meet URL. It contains a sealed
link to `/join`, and the server decides whether to hand the URL over using its
own clock — so changing a device clock achieves nothing, and decoding the link
by hand yields ciphertext (AES-256-GCM, keyed on `BOOKING_SECRET`).

| When they open it | What they see |
|---|---|
| More than 10 min early | Their booking time, a live countdown, and "come back then". The URL is not in the response at all. |
| From 10 min before, to 1 h after the start | "The room is open" and the **Join the Google Meet** button. |
| After that | "This call has finished" and an offer to book another time. |

The page unlocks itself — someone who leaves the tab open at 1:45 will see the
button appear at 1:50 without touching anything.

Change the window in `api/_lib/handlers.js`: `OPEN_BEFORE_MIN`, `CLOSE_AFTER_MIN`.

## Reminders, 15 minutes before

**Always on.** Every confirmation carries a calendar attachment
(`maya-studio-call.ics`) with a 15-minute alarm. The client's own phone or
laptop reminds them — nothing on our side has to be running. Adjust with
`REMIND_BEFORE_MIN`.

**The emailed reminder** needs somewhere to have written the booking down,
because a serverless function has no memory between calls. `/api/remind` is
built and guarded by `CRON_SECRET`; it needs two things to actually send:

1. **A store.** Add a KV store in **Vercel → Storage → Upstash Redis**. It
   injects `KV_REST_API_URL` and `KV_REST_API_TOKEN` automatically, and
   `api/_lib/store.js` picks them up with no code change.
2. **A scheduler.** A Vercel **Hobby** plan only allows one cron run per day,
   which is no use for a 15-minute reminder. Either:
   - upgrade to Pro and add to `vercel.json`:
     `"crons": [{ "path": "/api/remind", "schedule": "*/5 * * * *" }]`, or
   - point any free external scheduler at
     `https://your-site.vercel.app/api/remind` every 5 minutes, sending
     `Authorization: Bearer <CRON_SECRET>`.

Until both are in place `/api/remind` reports `"store": "none"` and sends
nothing, which is why the calendar alarm exists.

---

## Booking rules

| | |
|---|---|
| **Days** | Monday to Saturday. Sundays closed, shown struck through. |
| **Hours** | 9:00 am – 6:00 pm IST, 30-minute slots (last starts 5:30 pm). |
| **Timezone** | Asia/Kolkata, always — a client in Dubai sees the same grid you do. |
| **Lead time** | Slots less than an hour away are hidden. |
| **How far ahead** | 8 weeks. |
| **Taken slots** | Greyed out, read live from your calendar (Option A only). |

Email is **required** — the form will not advance past step 3 without a valid
address, because that is where the Meet link goes.

---

## Deploying to Vercel

Once `.env` is filled in and `vercel login` has been done once:

```
npm run deploy
```

That single command pushes every value from `.env` into the Vercel project
(Production, Preview and Development), deploys to production, then checks
`/api/health` on the live URL and tells you whether bookings will genuinely
send. Run it again any time `.env` changes.

If you would rather do it by hand: `vercel --prod`, then add the variables
under **Project → Settings → Environment Variables** for all three
environments — the `GOOGLE_*` set for Option A, or `GMAIL_USER` /
`GMAIL_APP_PASSWORD` / `MEET_LINK` for Option B, plus `OWNER_EMAIL` and
`CALENDAR_ID` either way — and redeploy.

Either way, finish by opening `https://your-site.vercel.app/api/health` to
confirm `"live": true`, then make one real booking with your own email address.

Vercel picks up `api/*.js` as serverless functions automatically.

---

## The story film

`assets/video/maya-story.mp4` — 40 seconds, six chapters, rendered from code.

```
npm run video
```

Redraws every frame, synthesises the soundtrack, and writes both the MP4 and
the poster. Edit `scripts/film.mjs`:

- `SCENES` at the bottom maps each chapter to its start time and draw function.
- Those start times must match the `data-t` values on the chapter list in
  `index.html` — that is what makes clicking a chapter jump the video.
- Colours live in `C` at the top of the same file.

---

## What is where

```
index.html              all page copy and structure
assets/styles.css       the design system — colours, type, every component
assets/app.js           built bundle (generated; do not edit)
assets/fonts/           Fraunces + Hanken Grotesk + Noto Sans Kannada
assets/video/           the story film and its poster

src/main.js             page behaviour: loader, scroll, modal, form
src/hero3d.js           the 3D card carousel in the hero
src/textures.js         the artwork painted onto those cards
src/booking.js          slot maths, the date/time picker, API calls

api/book.js             POST — books the slot, gets the Meet link, emails both
api/slots.js            GET  — which slots are already taken
api/health.js           GET  — what this deployment can actually do
api/_lib/handlers.js    shared booking logic (also used by the dev server)
api/_lib/google.js      Google Calendar + Gmail API, via plain fetch
api/_lib/mailer.js      picks the transport: Gmail API or Gmail SMTP
api/_lib/email.js       the two email designs

scripts/dev-server.mjs  the local preview
scripts/make-video.mjs  renders the film
scripts/film.mjs        the film's six scenes
scripts/google-auth.mjs one-time Google connection helper
```

---

## Quick edits

| To change | Edit |
|---|---|
| Phone, WhatsApp, email | `CONFIG` at the top of `src/main.js`, then `npm run build` |
| Email wording | `api/_lib/email.js` |
| Studio hours or slot length | `OPEN_HOUR` / `CLOSE_HOUR` / `SLOT_MIN` — **in both** `src/booking.js` and `api/_lib/handlers.js`, then rebuild |
| The numbers (30+, 100+, 60+) | `data-target="…"` in `index.html` |
| Service text, FAQ, team bios | directly in `index.html` |
| Colours and type | the token block at the top of `assets/styles.css` |
| Which words get the highlight stroke | wrap them in `<span class="hl">…</span>` in `index.html` |

---

## Libraries

three.js (3D), GSAP + ScrollTrigger (scroll animation), Lenis (smooth scroll),
esbuild (bundler), nodemailer (SMTP). The Google integration uses plain `fetch`
— no SDK. `@napi-rs/canvas` and `ffmpeg-static` are only used by
`npm run video` and never reach the browser.
