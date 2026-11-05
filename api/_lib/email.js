/* ==========================================================================
   email.js: the two messages that go out when someone books.

   Table-based and inline-styled, because email clients are email clients.
   Georgia stands in for Fraunces and the system sans stack for Hanken,
   webfonts do not survive the trip, but the palette does.
   ========================================================================== */

const INK = '#17120D', INK2 = '#3B332A', INK3 = '#6B6054';
const PAPER = '#F2ECE1', PAPER_HI = '#FBF7F0', LINE = '#E0D4BF';
const CLAY = '#C0543A', SAND = '#D2A24C', FOREST = '#27392C', DARK = '#191410';

const SERIF = "Georgia,'Times New Roman',serif";
const SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const nl2br = (s) => esc(s).replace(/\n/g, '<br>');

/* ---- shell ------------------------------------------------------------- */
function shell({ preheader, body }) {
  return `<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>Maya Studio</title></head>
<body style="margin:0;padding:0;background:${PAPER};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PAPER};">
<tr><td align="center" style="padding:28px 14px;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background:${PAPER_HI};border:1px solid ${LINE};border-radius:18px;overflow:hidden;">
    <tr><td style="padding:22px 28px;background:${DARK};">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
        <td style="padding-right:10px;vertical-align:middle;">
          <div style="font:400 26px ${SERIF};color:${SAND};letter-spacing:-.5px;">M</div>
        </td>
        <td style="vertical-align:middle;">
          <div style="font:400 20px ${SERIF};color:${PAPER_HI};letter-spacing:-.4px;">Maya Studio</div>
          <div style="font:400 11px ${SANS};color:rgba(251,247,240,.55);letter-spacing:1.6px;text-transform:uppercase;padding-top:2px;">Bengaluru</div>
        </td>
      </tr></table>
    </td></tr>
    ${body}
    <tr><td style="padding:20px 28px;background:${PAPER};border-top:1px solid ${LINE};">
      <div style="font:400 12px ${SANS};color:${INK3};line-height:1.7;">
        Maya Studio: websites, invitations, brochures, video and logos.<br>
        <a href="tel:+917204215343" style="color:${CLAY};text-decoration:none;">+91 72042 15343</a> ·
        <a href="mailto:anupamgowda1999@gmail.com" style="color:${CLAY};text-decoration:none;">anupamgowda1999@gmail.com</a>
      </div>
    </td></tr>
  </table>
</td></tr></table></body></html>`;
}

function meetButton(link) {
  if (!link) {
    return `<div style="padding:14px 18px;background:${PAPER};border:1px dashed ${LINE};border-radius:12px;font:400 14px ${SANS};color:${INK3};margin-bottom:18px;">
      The Google Meet link will follow in a separate message shortly.
    </div>`;
  }
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 12px;"><tr>
    <td style="border-radius:999px;background:${CLAY};">
      <a href="${esc(link)}" style="display:inline-block;padding:15px 32px;font:600 15px ${SANS};color:${PAPER_HI};text-decoration:none;border-radius:999px;">Join the Google Meet</a>
    </td></tr></table>
    <div style="font:400 12px ${SANS};color:${INK3};word-break:break-all;padding-bottom:4px;">
      Or paste this into your browser:<br><a href="${esc(link)}" style="color:${CLAY};">${esc(link)}</a>
    </div>`;
}

function whenBlock(whenLong) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PAPER};border:1px solid ${LINE};border-radius:14px;margin:0 0 22px;">
    <tr><td style="padding:18px 20px;">
      <div style="font:400 11px ${SANS};color:${CLAY};letter-spacing:1.8px;text-transform:uppercase;padding-bottom:6px;">Your call</div>
      <div style="font:400 21px ${SERIF};color:${INK};letter-spacing:-.4px;">${esc(whenLong)}</div>
      <div style="font:400 13px ${SANS};color:${INK3};padding-top:5px;">30 minutes · Google Meet · India Standard Time</div>
    </td></tr></table>`;
}

/* The client gets a door, not a key: the link opens shortly before the call
   and shows the time until then. The studio gets the room URL directly. */
function joinButton(url, opensBeforeMin) {
  if (!url) {
    return `<div style="padding:14px 18px;background:${PAPER};border:1px dashed ${LINE};border-radius:12px;font:400 14px ${SANS};color:${INK3};margin-bottom:18px;">
      Your joining link will follow in a separate message shortly.
    </div>`;
  }
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 12px;"><tr>
    <td style="border-radius:999px;background:${CLAY};">
      <a href="${esc(url)}" style="display:inline-block;padding:15px 32px;font:600 15px ${SANS};color:${PAPER_HI};text-decoration:none;border-radius:999px;">Open your joining link</a>
    </td></tr></table>
    <div style="font:400 13px ${SANS};color:${INK3};line-height:1.6;padding-bottom:4px;">
      This link unlocks <strong style="color:${INK};">${opensBeforeMin} minutes before</strong> your call.
      Open it any time. Before then it will simply show you when to come back.
    </div>
    <div style="font:400 12px ${SANS};color:${INK3};word-break:break-all;padding-top:8px;">
      <a href="${esc(url)}" style="color:${CLAY};">${esc(url)}</a>
    </div>`;
}

/* ---- 1. to the client -------------------------------------------------- */
export function clientEmail({ name, whenLong, meetLink, joinLink, opensBeforeMin = 10, services }) {
  const first = String(name || '').trim().split(/\s+/)[0] || 'there';
  const subject = `Thank you for booking: your Google Meet link (${whenLong})`;

  const body = `<tr><td style="padding:30px 28px 26px;">
    <div style="font:400 27px ${SERIF};color:${INK};line-height:1.25;letter-spacing:-.6px;padding-bottom:12px;">Thank you for booking, ${esc(first)}.</div>
    <div style="font:400 15px ${SANS};color:${INK2};line-height:1.65;padding-bottom:20px;">
      Your slot with Maya Studio is confirmed. Below is your joining link for our Google Meet call,
      <strong style="color:${INK};">please come back and open it at the time shown</strong>. It works on your phone or laptop, no app needed.
    </div>
    ${whenBlock(whenLong)}
    ${joinButton(joinLink || meetLink, opensBeforeMin)}
    <div style="padding:12px 16px;background:${PAPER};border-left:3px solid ${SAND};border-radius:0 10px 10px 0;font:400 13px ${SANS};color:${INK2};line-height:1.6;margin:16px 0 0;">
      We have attached this call to the email as a calendar invite, set to remind you
      <strong style="color:${INK};">15 minutes before</strong>. Open the attachment to add it to your calendar.
    </div>
    <div style="height:1px;background:${LINE};margin:22px 0;"></div>
    <div style="font:400 11px ${SANS};color:${CLAY};letter-spacing:1.8px;text-transform:uppercase;padding-bottom:10px;">What happens next</div>
    <div style="font:400 14px ${SANS};color:${INK2};line-height:1.75;">
      • We will <strong style="color:${INK};">call you within the hour</strong> to say hello and confirm.<br>
      • On the call we will talk through${services ? ` your ${esc(services)}` : ' your project'}, show similar work, and agree a timeline.<br>
      • You will have a clear, itemised quote within a day of the call.
    </div>
    <div style="height:1px;background:${LINE};margin:22px 0;"></div>
    <div style="font:400 13px ${SANS};color:${INK3};line-height:1.7;">
      Need to move it? Just reply to this email and we will find another time, Monday to Saturday, 9 am to 6 pm.
    </div>
  </td></tr>`;

  const text = [
    `Thank you for booking, ${first}.`, '',
    'Your slot with Maya Studio is confirmed. Below is your joining link for',
    'our Google Meet call. Please come back and open it at the time shown.', '',
    `When: ${whenLong} (30 minutes, Google Meet)`,
    (joinLink || meetLink)
      ? `Join here: ${joinLink || meetLink}\n(The link unlocks ${opensBeforeMin} minutes before the call.)`
      : 'Your joining link will follow shortly.',
    '',
    'A calendar invite is attached, set to remind you 15 minutes before.',
    '',
    'What happens next:',
    '- We will call you within the hour.',
    '- On the call we talk through your project and agree a timeline.',
    '- A clear quote follows within a day.',
    '',
    'Need to move it? Reply to this email. Mon-Sat, 9am-6pm IST.',
    '', 'Maya Studio, Bengaluru. +91 72042 15343',
  ].filter(Boolean).join('\n');

  return { subject, html: shell({ preheader: `${whenLong} · your Google Meet link is inside`, body }), text };
}

/* ---- 1b. the nudge, shortly before the call ---------------------------- */
export function reminderEmail({ name, whenLong, joinLink, minutes = 15 }) {
  const first = String(name || '').trim().split(/\s+/)[0] || 'there';
  const subject = `Your Maya Studio call starts in ${minutes} minutes`;

  const body = `<tr><td style="padding:30px 28px 26px;">
    <div style="font:400 27px ${SERIF};color:${INK};line-height:1.25;letter-spacing:-.6px;padding-bottom:12px;">Starting in ${minutes} minutes, ${esc(first)}.</div>
    <div style="font:400 15px ${SANS};color:${INK2};line-height:1.65;padding-bottom:20px;">
      This is your reminder to join the meeting. The link below is open now,
      <strong style="color:${INK};">tap it when you are ready</strong> and we will see you in there.
    </div>
    ${whenBlock(whenLong)}
    ${joinLink ? `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 12px;"><tr>
      <td style="border-radius:999px;background:${CLAY};">
        <a href="${esc(joinLink)}" style="display:inline-block;padding:15px 32px;font:600 15px ${SANS};color:${PAPER_HI};text-decoration:none;border-radius:999px;">Join the call</a>
      </td></tr></table>
      <div style="font:400 12px ${SANS};color:${INK3};word-break:break-all;">
        <a href="${esc(joinLink)}" style="color:${CLAY};">${esc(joinLink)}</a>
      </div>` : ''}
    <div style="height:1px;background:${LINE};margin:22px 0;"></div>
    <div style="font:400 13px ${SANS};color:${INK3};line-height:1.7;">
      Running late or need to move it? Reply to this email and we will sort it out.
    </div>
  </td></tr>`;

  const text = [
    `Starting in ${minutes} minutes, ${first}.`, '',
    'This is your reminder to join the meeting.', '',
    `When: ${whenLong}`,
    joinLink ? `Join here: ${joinLink}` : '',
    '', 'Running late? Reply to this email.',
    '', 'Maya Studio, Bengaluru. +91 72042 15343',
  ].filter(Boolean).join('\n');

  return { subject, html: shell({ preheader: `Your call starts in ${minutes} minutes`, body }), text };
}

/* ---- 2. to the studio -------------------------------------------------- */
export function ownerEmail({ name, email, phone, city, pref, whenLong, meetLink, summary, message }) {
  const subject = `New booking: ${name}, ${whenLong}`;

  const row = (k, v) => v
    ? `<tr>
        <td style="padding:7px 12px 7px 0;font:600 12px ${SANS};color:${INK3};letter-spacing:.4px;text-transform:uppercase;white-space:nowrap;vertical-align:top;">${esc(k)}</td>
        <td style="padding:7px 0;font:400 14px ${SANS};color:${INK};line-height:1.55;">${v}</td>
      </tr>`
    : '';

  const body = `<tr><td style="padding:30px 28px 26px;">
    <div style="font:400 26px ${SERIF};color:${INK};line-height:1.25;letter-spacing:-.6px;padding-bottom:6px;">${esc(name)} booked a call.</div>
    <div style="font:400 14px ${SANS};color:${CLAY};font-weight:600;padding-bottom:18px;">Call them within the hour.</div>
    ${whenBlock(whenLong)}
    ${meetButton(meetLink)}
    <div style="height:1px;background:${LINE};margin:22px 0;"></div>
    <div style="font:400 11px ${SANS};color:${CLAY};letter-spacing:1.8px;text-transform:uppercase;padding-bottom:8px;">Client</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      ${row('Name', esc(name))}
      ${row('Email', `<a href="mailto:${esc(email)}" style="color:${CLAY};text-decoration:none;">${esc(email)}</a>`)}
      ${row('Phone', `<a href="tel:${esc(phone)}" style="color:${CLAY};text-decoration:none;">${esc(phone)}</a>`)}
      ${row('City', esc(city))}
      ${row('Prefers', esc(pref))}
    </table>
    <div style="height:1px;background:${LINE};margin:22px 0;"></div>
    <div style="font:400 11px ${SANS};color:${CLAY};letter-spacing:1.8px;text-transform:uppercase;padding-bottom:8px;">The brief</div>
    <div style="font:400 14px ${SANS};color:${INK2};line-height:1.75;">${nl2br(summary)}</div>
    ${message ? `<div style="margin-top:16px;padding:14px 16px;background:${PAPER};border-left:3px solid ${SAND};border-radius:0 10px 10px 0;font:italic 400 14px ${SERIF};color:${INK2};line-height:1.6;">“${nl2br(message)}”</div>` : ''}
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:24px;"><tr>
      <td style="border-radius:999px;background:${FOREST};">
        <a href="tel:${esc(phone)}" style="display:inline-block;padding:13px 26px;font:600 14px ${SANS};color:${PAPER_HI};text-decoration:none;border-radius:999px;">Call ${esc(name.split(' ')[0])} now</a>
      </td>
    </tr></table>
  </td></tr>`;

  const text = [
    `${name} booked a call: ${whenLong}`, '',
    `Call them within the hour.`, '',
    `Email: ${email}`, `Phone: ${phone}`,
    city ? `City: ${city}` : '', `Prefers: ${pref}`,
    meetLink ? `\nGoogle Meet: ${meetLink}` : '',
    '', 'Brief:', summary,
    message ? `\nIn their words: "${message}"` : '',
  ].filter(Boolean).join('\n');

  return { subject, html: shell({ preheader: `${whenLong}, call within the hour`, body }), text };
}
