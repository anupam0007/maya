/* ==========================================================================
   ics.js: the calendar attachment.

   Carries a 15-minute alarm, so the client's own calendar reminds them
   even if nothing on our side ever runs. That is the reminder that works
   on day one; the cron in remind.js is the belt to this pair of braces.
   ========================================================================== */

const pad = (n) => String(n).padStart(2, '0');

/** UTC stamp in the basic format iCalendar wants: 20261105T103000Z */
const stamp = (d) =>
  `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}T` +
  `${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`;

/* Escape per RFC 5545: backslash, semicolon, comma, newline. */
const esc = (s) => String(s ?? '')
  .replace(/\\/g, '\\\\')
  .replace(/;/g, '\\;')
  .replace(/,/g, '\\,')
  .replace(/\r?\n/g, '\\n');

/* Content lines are limited to 75 octets; continuations start with a space. */
function fold(line) {
  const bytes = Buffer.from(line, 'utf8');
  if (bytes.length <= 75) return line;
  const out = [];
  let i = 0;
  while (i < bytes.length) {
    const take = i === 0 ? 75 : 74;
    let end = Math.min(i + take, bytes.length);
    // don't split a multi-byte character
    while (end < bytes.length && (bytes[end] & 0xc0) === 0x80) end--;
    out.push((i === 0 ? '' : ' ') + bytes.slice(i, end).toString('utf8'));
    i = end;
  }
  return out.join('\r\n');
}

/**
 * @param {Date}   start     when the call begins
 * @param {Date}   end       when it ends
 * @param {string} joinUrl   the gated link (not the raw Meet URL)
 * @param {string} name      who the call is with
 * @param {string} organiser the studio address
 */
export function buildIcs({ start, end, joinUrl, name, organiser, alarmMinutes = 15 }) {
  const uid = `maya-${start.getTime()}-${Buffer.from(String(name || '')).toString('hex').slice(0, 10)}@mayastudio`;

  const description = [
    'A 30-minute call with Maya Studio.',
    '',
    joinUrl ? `Join here at the time of the call: ${joinUrl}` : '',
    '',
    'The link opens 10 minutes before the call starts.',
  ].filter(Boolean).join('\n');

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Maya Studio//Booking//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${esc('Maya Studio intro call')}`,
    `DESCRIPTION:${esc(description)}`,
    joinUrl ? `URL:${esc(joinUrl)}` : '',
    joinUrl ? `LOCATION:${esc(joinUrl)}` : '',
    organiser ? `ORGANIZER;CN=Maya Studio:mailto:${organiser}` : '',
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    `TRIGGER:-PT${alarmMinutes}M`,
    'ACTION:DISPLAY',
    `DESCRIPTION:${esc(`Your Maya Studio call starts in ${alarmMinutes} minutes. Time to join.`)}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean);

  return lines.map(fold).join('\r\n') + '\r\n';
}
