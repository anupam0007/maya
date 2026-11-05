/* ==========================================================================
   booking.js: slot picking.

   The studio works Monday to Saturday, 9:00am to 6:00pm IST. Everything
   here is computed in Asia/Kolkata no matter where the visitor sits, so a
   client in Dubai and a client in Jayanagar see the same grid.
   ========================================================================== */

export const TZ = 'Asia/Kolkata';
export const OPEN_HOUR = 9;        // 9:00 am
export const CLOSE_HOUR = 18;      // 6:00 pm, last slot starts 17:30
export const SLOT_MIN = 30;
export const LEAD_MIN = 60;        // don't offer a slot less than an hour away
export const DAYS_AHEAD = 56;      // how far out people may book
const WINDOW = 14;                 // day buttons visible per page

const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/* ---- date helpers ------------------------------------------------------
   A date is always the string 'YYYY-MM-DD'. To do arithmetic on one we
   park it at noon UTC, which can never slip across a day boundary.        */
const ymd = (d) => `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
const parseYmd = (s) => { const [y, m, d] = s.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d, 12)); };
export const addDays = (s, n) => { const d = parseYmd(s); d.setUTCDate(d.getUTCDate() + n); return ymd(d); };
export const dowOf = (s) => parseYmd(s).getUTCDay();
export const isSunday = (s) => dowOf(s) === 0;

export function istToday() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}

/** The real instant a slot begins. '+05:30' is fixed, India has no DST. */
export const slotInstant = (date, time) => new Date(`${date}T${time}:00+05:30`);

export function allSlots() {
  const out = [];
  for (let m = OPEN_HOUR * 60; m < CLOSE_HOUR * 60; m += SLOT_MIN) {
    out.push(`${String((m / 60) | 0).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`);
  }
  return out;
}

export function prettyTime(t) {
  const [h, m] = t.split(':').map(Number);
  const ap = h >= 12 ? 'pm' : 'am';
  const hh = h % 12 === 0 ? 12 : h % 12;
  return `${hh}:${String(m).padStart(2, '0')} ${ap}`;
}

export function prettyDate(date) {
  const d = parseYmd(date);
  return `${DOW[d.getUTCDay()]}, ${d.getUTCDate()} ${MON[d.getUTCMonth()]}`;
}

export function prettyLong(date, time) {
  const d = parseYmd(date);
  return `${DOW[d.getUTCDay()]} ${d.getUTCDate()} ${MON[d.getUTCMonth()]}, ${prettyTime(time)} IST`;
}

/** Slots already gone for today (or any past date). */
export function isPast(date, time) {
  return slotInstant(date, time).getTime() < Date.now() + LEAD_MIN * 60000;
}

/** First day we can actually offer something on. */
export function firstOpenDate() {
  let d = istToday();
  for (let i = 0; i < 14; i++) {
    if (!isSunday(d) && allSlots().some((t) => !isPast(d, t))) return d;
    d = addDays(d, 1);
  }
  return d;
}

/* ---- availability ------------------------------------------------------ */
const cache = new Map();
export let apiMode = 'unknown';   // 'live' | 'demo' | 'offline'

export async function fetchTaken(date) {
  if (cache.has(date)) return cache.get(date);
  const p = (async () => {
    try {
      const r = await fetch(`/api/slots?date=${encodeURIComponent(date)}`, { headers: { accept: 'application/json' } });
      if (!r.ok) throw new Error('bad status ' + r.status);
      const j = await r.json();
      apiMode = j.mode || 'live';
      return Array.isArray(j.taken) ? j.taken : [];
    } catch {
      // opened straight off the filesystem, or the function is asleep,
      // show the full grid rather than an empty, broken-looking one
      apiMode = 'offline';
      return [];
    }
  })();
  cache.set(date, p);
  return p;
}
export const forgetAvailability = (date) => (date ? cache.delete(date) : cache.clear());

/* ---- shared selection -------------------------------------------------- */
export const selection = { date: null, time: null };
const listeners = new Set();
export const onSelectionChange = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };
function announce() { listeners.forEach((fn) => fn(selection)); }

export function select(date, time) {
  selection.date = date;
  selection.time = time;
  announce();
}

/* ==========================================================================
   Picker: binds the shared selection to one set of DOM nodes.
   Used twice: the dark panel on the page, and step 4 of the modal.
   ========================================================================== */
export function createPicker({ monthEl, daysEl, slotsEl, prevEl, nextEl, labelEl }) {
  let offset = 0;
  let viewDate = selection.date || firstOpenDate();
  let token = 0;

  function days() {
    const start = addDays(istToday(), offset);
    return Array.from({ length: WINDOW }, (_, i) => addDays(start, i));
  }

  function renderMonth(list) {
    const a = parseYmd(list[0]), b = parseYmd(list[list.length - 1]);
    monthEl.textContent = a.getUTCMonth() === b.getUTCMonth()
      ? `${MON[a.getUTCMonth()]} ${a.getUTCFullYear()}`
      : `${MON[a.getUTCMonth()]} to ${MON[b.getUTCMonth()]} ${b.getUTCFullYear()}`;
  }

  function renderDays() {
    const list = days();
    renderMonth(list);
    const today = istToday();
    const maxDate = addDays(today, DAYS_AHEAD);

    daysEl.innerHTML = '';
    list.forEach((date) => {
      const d = parseYmd(date);
      const sunday = isSunday(date);
      const tooFar = date > maxDate;
      const nothingLeft = !sunday && !allSlots().some((t) => !isPast(date, t));
      const dead = sunday || tooFar || nothingLeft;

      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'bk-day' + (date === viewDate ? ' is-sel' : '') + (sunday ? ' is-closed' : '');
      b.disabled = dead;
      b.dataset.date = date;
      b.setAttribute('aria-pressed', String(date === viewDate));
      b.setAttribute('aria-label', sunday ? `${prettyDate(date)}, closed` : prettyDate(date));
      b.innerHTML = `<small>${DOW[d.getUTCDay()]}</small><b>${d.getUTCDate()}</b><i>${sunday ? 'closed' : date === today ? 'today' : MON[d.getUTCMonth()].slice(0, 3)}</i>`;
      if (!dead) b.addEventListener('click', () => { viewDate = date; renderDays(); renderSlots(); });
      daysEl.appendChild(b);
    });

    prevEl.disabled = offset === 0;
    nextEl.disabled = offset + WINDOW > DAYS_AHEAD;
  }

  async function renderSlots() {
    const mine = ++token;
    const date = viewDate;
    if (labelEl) labelEl.textContent = `Available on ${prettyDate(date)}`;

    slotsEl.innerHTML = '<div class="bk-loading"><span class="spin"></span>Checking the calendar…</div>';
    const taken = await fetchTaken(date);
    if (mine !== token) return;                 // a newer date won the race

    const list = allSlots();
    const open = list.filter((t) => !isPast(date, t) && !taken.includes(t));

    if (!open.length) {
      slotsEl.innerHTML = `<div class="bk-empty">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>
        Nothing free on ${prettyDate(date)}. Try the next day.</div>`;
      return;
    }

    slotsEl.innerHTML = '';
    list.forEach((t) => {
      const gone = isPast(date, t) || taken.includes(t);
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'bk-slot' + (selection.date === date && selection.time === t ? ' is-sel' : '');
      b.disabled = gone;
      b.textContent = prettyTime(t);
      b.setAttribute('aria-pressed', String(selection.date === date && selection.time === t));
      if (gone) b.setAttribute('aria-label', `${prettyTime(t)}, already booked`);
      if (!gone) b.addEventListener('click', () => select(date, t));
      slotsEl.appendChild(b);
    });
  }

  prevEl.addEventListener('click', () => { offset = Math.max(0, offset - 7); renderDays(); });
  nextEl.addEventListener('click', () => { offset = Math.min(DAYS_AHEAD - WINDOW + 7, offset + 7); renderDays(); });

  // keep the two pickers in step with each other
  onSelectionChange((sel) => {
    if (sel.date && sel.date !== viewDate) {
      viewDate = sel.date;
      const today = istToday();
      const delta = Math.round((parseYmd(sel.date) - parseYmd(today)) / 86400000);
      if (delta < offset || delta >= offset + WINDOW) offset = Math.max(0, delta - 2);
      renderDays(); renderSlots();
      return;
    }
    slotsEl.querySelectorAll('.bk-slot').forEach((b) => {
      const on = sel.date === viewDate && prettyTime(sel.time || '') === b.textContent;
      b.classList.toggle('is-sel', on);
      b.setAttribute('aria-pressed', String(on));
    });
  });

  renderDays();
  renderSlots();

  return {
    refresh() { forgetAvailability(viewDate); renderDays(); renderSlots(); },
    get date() { return viewDate; },
  };
}

/* ---- submit ------------------------------------------------------------- */
export async function submitBooking(payload) {
  const r = await fetch('/api/book', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });
  let data = null;
  try { data = await r.json(); } catch { /* non-JSON error page */ }
  if (!r.ok || !data || !data.ok) {
    const msg = (data && data.error) || `We couldn't reach the booking service (${r.status}).`;
    throw new Error(msg);
  }
  return data;
}

/** "Add to calendar" fallback link, for people who want it in their own calendar. */
export function googleCalUrl({ date, time, meetLink, name }) {
  const start = slotInstant(date, time);
  const end = new Date(start.getTime() + SLOT_MIN * 60000);
  const z = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Maya Studio intro call',
    dates: `${z(start)}/${z(end)}`,
    details: `A 30-minute call with Maya Studio.${meetLink ? `\n\nGoogle Meet: ${meetLink}` : ''}`,
    location: meetLink || 'Google Meet',
    ctz: TZ,
  });
  if (name) p.set('text', `Maya Studio × ${name}: intro call`);
  return `https://calendar.google.com/calendar/render?${p}`;
}
