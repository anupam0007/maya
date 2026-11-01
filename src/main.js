/* ==========================================================================
   Maya Studio — site script

   Build:  npm run build      (esbuild bundles this into assets/app.js)
   Config: the CONFIG block below is the only thing you normally touch.
   ========================================================================== */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createHero } from './hero3d.js';
import * as BK from './booking.js';

const CONFIG = {
  phone: '917204215343',
  phoneDisplay: '+91 72042 15343',
  email: 'anupamgowda1999@gmail.com',
  liveCounterEveryMs: 7000,
  nudgeAfterMs: 45000,
};

gsap.registerPlugin(ScrollTrigger);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const store = {
  get(k) { try { return sessionStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { sessionStorage.setItem(k, v); } catch { /* private mode */ } },
};

/* ---------------- smooth scroll ---------------- */
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}
function scrollToEl(el) {
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -72, duration: 1.4 });
  else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
}
$$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const id = a.getAttribute('href');
  if (id.length < 2) return;
  const el = $(id); if (!el) return;
  e.preventDefault(); closeMenu(); scrollToEl(el);
}));

/* ---------------- links from config ---------------- */
const waLink = (text) => `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(text)}`;
$('#fab').href = waLink("Hi Maya! I'd like to talk about a project.");
$('#waDirect').href = waLink("Hi Maya! I'd like to talk about a project.");
$('#year').textContent = new Date().getFullYear();

/* ==========================================================================
   LOADER → INTRO
   ========================================================================== */
/* The 3D scene costs real time to build — six 768×1024 canvases plus an
   environment map. Building it before the page is on screen is what used to
   push first paint out by seconds, so it now starts only once the hero is
   visible and the browser has had two frames to settle. */
let hero = null;
function bootHero() {
  try {
    hero = createHero({
      canvas: $('#webgl'),
      tipEl: $('#sceneTip'),
      reduce,
      onPick: (def) => openModal(def.service),
    });
    gsap.ticker.add(hero.render);
    if (reduce) hero.introTo(1);
    else gsap.to(hero.state, { intro: 1, duration: 2.1, ease: 'expo.out' });
  } catch (err) {
    // no WebGL (old device, blocked context) — the page still reads fine
    console.warn('3D hero unavailable:', err);
    $('#webgl').style.display = 'none';
    const hint = $('.scene-hint'); if (hint) hint.remove();
    hero = null;
  }
}

/* The loader animates from CSS alone, so it is already on screen before this
   file runs. All we do is decide when to take it away: once the fonts are in
   (or 1.2s has passed, whichever first) and the minimum beat has elapsed. */
const fontsReady = document.fonts
  ? Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1200))]).catch(() => {})
  : Promise.resolve();
const minBeat = new Promise((r) => setTimeout(r, reduce ? 150 : 1150));

Promise.all([fontsReady, minBeat]).then(() => {
  const loader = $('#loader');
  loader.classList.add('is-gone');
  document.body.classList.remove('is-loading');
  lenis && lenis.start();
  setTimeout(() => { loader.style.display = 'none'; }, 560);

  if (!reduce) {
    gsap.from('.hero-title .line-in', { yPercent: 115, duration: 1.1, stagger: 0.08, ease: 'expo.out', delay: 0.12 });
    gsap.from('.reveal-load', { y: 20, opacity: 0, duration: 0.85, stagger: 0.06, ease: 'expo.out', delay: 0.22 });
    gsap.from('.nav', { y: -26, opacity: 0, duration: 0.85, ease: 'expo.out', delay: 0.22 });
  }

  setupScroll();
  requestAnimationFrame(() => requestAnimationFrame(bootHero));
});

/* ==========================================================================
   SCROLL
   ========================================================================== */

/* Split a heading into words but keep inner elements (like .hl) intact. */
function splitWords(root) {
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        if (!n.textContent.trim()) return;
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((tok) => {
          if (!tok) return;
          if (/^\s+$/.test(tok)) frag.appendChild(document.createTextNode(tok));
          else {
            const s = document.createElement('span');
            s.className = 'wrd'; s.textContent = tok;
            frag.appendChild(s);
          }
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  walk(root);
  return $$('.wrd', root);
}

function setupScroll() {
  /* -- hero 3D follows the scroll out -- */
  ScrollTrigger.create({
    trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true,
    onUpdate(st) {
      const p = st.progress;
      hero && hero.setProgress(p);
      $('#webgl').style.opacity = 1 - gsap.utils.clamp(0, 1, (p - 0.5) / 0.45);
    },
  });
  if (!reduce) {
    gsap.to('.hero-inner', {
      yPercent: -10, opacity: 0, ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  /* -- nav show/hide + active link -- */
  let lastY = 0;
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate(st) {
      const y = st.scroll(), nav = $('#nav');
      nav.classList.toggle('is-scrolled', y > 40);
      // Hide-on-scroll only on wide screens: on a phone a bar that slides in
      // and out of a notch reads as a glitch, so there it simply stays.
      if (innerWidth > 920 && !nav.classList.contains('menu-open')) {
        nav.classList.toggle('is-hidden', y > 620 && y > lastY + 2);
        if (y < lastY - 2) nav.classList.remove('is-hidden');
      } else {
        nav.classList.remove('is-hidden');
      }
      lastY = y;
      if (st.progress > 0.42) showNudge();
    },
  });
  $$('.nav-links a').forEach((a) => {
    const sec = $(a.getAttribute('href')); if (!sec) return;
    ScrollTrigger.create({
      trigger: sec, start: 'top 50%', end: 'bottom 50%',
      onToggle: (st) => a.classList.toggle('is-active', st.isActive),
    });
  });

  /* -- word-by-word reveal, only on marked headings -- */
  $$('[data-words]').forEach((h) => {
    const words = splitWords(h);
    if (reduce) { words.forEach((w) => w.classList.add('is-on')); return; }
    ScrollTrigger.create({
      trigger: h, start: 'top 88%', end: 'top 42%', scrub: 0.6,
      onUpdate(st) {
        const n = Math.round(st.progress * words.length);
        words.forEach((w, i) => w.classList.toggle('is-on', i < n));
      },
      onLeave() { words.forEach((w) => w.classList.add('is-on')); },
    });
  });

  /* -- the clay stroke under deliberately marked words -- */
  $$('.hl').forEach((el) => {
    ScrollTrigger.create({
      trigger: el, start: 'top 72%', once: true,
      onEnter: () => el.classList.add('is-on'),
    });
  });

  /* -- odometers -- */
  $$('.odo').forEach(buildOdo);
  ScrollTrigger.create({
    trigger: '#numbers', start: 'top 82%', once: true,
    // Rolls once, the first time you reach it, and then stays put.
    onEnter() {
      $$('.odo').forEach((el, i) => setTimeout(() => rollOdo(el), i * 140));
    },
  });

  /* -- marquee -- */
  if (!reduce) {
    const track = $('#marquee');
    track.innerHTML += track.innerHTML;                 // seamless loop
    const half = track.scrollWidth / 2;
    gsap.to(track, { x: -half, duration: 36, ease: 'none', repeat: -1 });
  }

  const mm = gsap.matchMedia();

  mm.add('(min-width: 1101px)', () => {
    if (reduce) return;
    /* story video settles from a tilt */
    gsap.fromTo('#videoFrame',
      { rotateY: -17, rotateX: 11, scale: 0.9 },
      {
        rotateY: 0, rotateX: 0, scale: 1, ease: 'none',
        scrollTrigger: { trigger: '.story-pin', start: 'top 80%', end: 'top 18%', scrub: 0.8 },
      });
    gsap.from('.story-copy > *', {
      y: 34, opacity: 0, duration: 0.9, stagger: 0.09, ease: 'expo.out',
      scrollTrigger: { trigger: '#story', start: 'top 68%' },
    });

    /* showcase scrolls sideways */
    const track = $('#workTrack');
    const dist = () => Math.max(0, track.scrollWidth - innerWidth + 40);
    gsap.to(track, {
      x: () => -dist(), ease: 'none',
      scrollTrigger: {
        trigger: '.work-pin', start: 'top top', end: () => '+=' + dist(),
        scrub: 1, pin: true, invalidateOnRefresh: true,
        onUpdate: (st) => { $('#workRail').style.width = (18 + st.progress * 82) + '%'; },
      },
    });
  });

  mm.add('(max-width: 1100px)', () => {
    // The showcase is a plain horizontal scroller here — swipeable, with the
    // rail underneath reporting how far along you are.
    const scroller = $('#workScroll'), rail = $('#workRail');
    const sync = () => {
      const max = scroller.scrollWidth - scroller.clientWidth;
      rail.style.width = (18 + (max > 0 ? scroller.scrollLeft / max : 0) * 82) + '%';
    };
    scroller.addEventListener('scroll', sync, { passive: true });
    sync();

    if (reduce) return () => scroller.removeEventListener('scroll', sync);

    gsap.fromTo('#videoFrame', { rotateX: 14, scale: 0.93 }, {
      rotateX: 0, scale: 1, ease: 'none',
      scrollTrigger: { trigger: '#videoFrame', start: 'top 95%', end: 'top 40%', scrub: true },
    });
    return () => scroller.removeEventListener('scroll', sync);
  });

  /* -- process line + steps -- */
  gsap.to('#stepsFill', {
    scaleY: 1, ease: 'none',
    scrollTrigger: { trigger: '#steps', start: 'top 62%', end: 'bottom 62%', scrub: true },
  });
  $$('.step').forEach((s) => ScrollTrigger.create({
    trigger: s, start: 'top 68%',
    onEnter: () => s.classList.add('is-on'),
    onLeaveBack: () => s.classList.remove('is-on'),
  }));

  /* -- a single gentle reveal for the card-ish sections -- */
  if (!reduce) {
    [['.svc', '#svcList'], ['.why-item', '.why-grid'], ['.person', '.team-grid'], ['.book-trust span', '.book-trust']]
      .forEach(([sel, trig]) => gsap.from(sel, {
        y: 26, opacity: 0, duration: 0.85, stagger: 0.07, ease: 'expo.out',
        scrollTrigger: { trigger: trig, start: 'top 86%' },
      }));
    gsap.from('.book-panel', {
      y: 40, opacity: 0, duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: '.book-panel', start: 'top 88%' },
    });
    gsap.from('.footer-word', {
      yPercent: 36, opacity: 0, ease: 'none',
      scrollTrigger: { trigger: '.footer', start: 'top bottom', end: 'bottom bottom', scrub: true },
    });
  }

  setTimeout(showNudge, CONFIG.nudgeAfterMs);
  ScrollTrigger.refresh();
}

/* ---------------- odometer ---------------- */
function buildOdo(el) {
  const digits = String(el.dataset.target).split('');
  el.innerHTML = digits.map(() => `<span class="dg">${Array.from({ length: 20 }, (_, i) => `<b>${i % 10}</b>`).join('')}</span>`).join('');
  el.setAttribute('aria-label', el.dataset.target + ' plus');
}
function rollOdo(el, spin) {
  const digits = String(el.dataset.target).split('').map(Number);
  $$('.dg', el).forEach((d, i) => {
    const flip = spin ? (d.dataset.f = d.dataset.f === '1' ? '0' : '1') : '0';
    const idx = digits[i] + (flip === '1' ? 10 : 0);
    d.style.transitionDelay = (spin ? i * 0.08 : i * 0.12) + 's';
    d.style.transform = `translateY(${-idx}em)`;
  });
}

/* ==========================================================================
   STORY VIDEO
   ========================================================================== */
(() => {
  const video = $('#storyVideo'), vPlay = $('#vPlay'), vSound = $('#vSound');
  const vProg = $('#vProgress'), vBar = $('#vBar'), vTime = $('#vTime');
  const chapters = $$('#chapters li');
  let userPaused = false;

  const mmss = (s) => `${(s / 60) | 0}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !userPaused) video.play().catch(() => {});
    else if (!e.isIntersecting) video.pause();
  }, { threshold: 0.3 }).observe(video);

  video.addEventListener('play', () => { vPlay.classList.remove('is-paused'); vPlay.setAttribute('aria-label', 'Pause video'); });
  video.addEventListener('pause', () => { vPlay.classList.add('is-paused'); vPlay.setAttribute('aria-label', 'Play video'); });
  vPlay.addEventListener('click', () => {
    if (video.paused) { userPaused = false; video.play(); } else { userPaused = true; video.pause(); }
  });
  vSound.addEventListener('click', () => {
    video.muted = !video.muted;
    vSound.classList.toggle('is-on', !video.muted);
    vSound.setAttribute('aria-label', video.muted ? 'Turn sound on' : 'Turn sound off');
    if (video.paused) { userPaused = false; video.play().catch(() => {}); }
  });
  vBar.addEventListener('click', (e) => {
    const r = vBar.getBoundingClientRect();
    video.currentTime = ((e.clientX - r.left) / r.width) * (video.duration || 40);
  });

  video.addEventListener('timeupdate', () => {
    const t = video.currentTime, d = video.duration || 40;
    vProg.style.width = (t / d) * 100 + '%';
    vTime.textContent = `${mmss(t)} / ${mmss(d)}`;
    let active = 0;
    chapters.forEach((li, i) => { if (t >= +li.dataset.t) active = i; });
    chapters.forEach((li, i) => li.classList.toggle('is-active', i === active));
  });

  chapters[0].classList.add('is-active');
  chapters.forEach((li) => {
    li.tabIndex = 0;
    li.setAttribute('role', 'button');
    const go = () => { video.currentTime = +li.dataset.t + 0.15; userPaused = false; video.play().catch(() => {}); };
    li.addEventListener('click', go);
    li.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });
})();

/* ==========================================================================
   SERVICES + FAQ
   ========================================================================== */
$$('.svc').forEach((svc, i) => {
  const btn = $('.svc-row', svc);
  btn.addEventListener('click', () => {
    const open = !svc.classList.contains('is-open');
    $$('.svc.is-open').forEach((o) => { o.classList.remove('is-open'); $('.svc-row', o).setAttribute('aria-expanded', 'false'); });
    svc.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    setTimeout(() => ScrollTrigger.refresh(), 680);
  });
  if (i === 0) { svc.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true'); }
});

$$('.faq-list details').forEach((d) => {
  const body = $('div', d);
  d.addEventListener('toggle', () => {
    if (reduce) return;
    if (d.open) gsap.fromTo(body, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' });
    ScrollTrigger.refresh();
  });
});

/* ==========================================================================
   TILT · MAGNETIC · CURSOR
   ========================================================================== */
if (finePointer && !reduce) {
  $$('.tilt, .tilt-soft').forEach((el) => {
    const amt = el.classList.contains('tilt-soft') ? 5 : 11;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * amt}deg) rotateX(${-py * amt}deg) scale(1.02)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  $$('.magnetic').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1,0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1,0.4)' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.28);
      yTo((e.clientY - r.top - r.height / 2) * 0.38);
    });
    el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
  });

  const cur = $('#cursor');
  const cx = gsap.quickTo(cur, 'x', { duration: 0.25, ease: 'power3' });
  const cy = gsap.quickTo(cur, 'y', { duration: 0.25, ease: 'power3' });
  addEventListener('pointermove', (e) => { cx(e.clientX); cy(e.clientY); });
  document.addEventListener('pointerover', (e) => {
    cur.classList.toggle('is-hover', !!e.target.closest('a, button, .chip, summary, .chapters li, select, input, textarea, .bk-day, .bk-slot'));
  });
}

/* ==========================================================================
   MOBILE MENU · NUDGE
   ========================================================================== */
const navToggle = $('#navToggle');
function closeMenu() {
  $('#nav').classList.remove('menu-open');
  navToggle.setAttribute('aria-expanded', 'false');
  if (lenis && !modalOpen) lenis.start();
}
navToggle.addEventListener('click', () => {
  const open = !$('#nav').classList.contains('menu-open');
  $('#nav').classList.toggle('menu-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  if (lenis) { if (open) lenis.stop(); else lenis.start(); }
});

let nudgeShown = false;
function showNudge() {
  if (nudgeShown || modalOpen || store.get('maya_nudge')) return;
  nudgeShown = true; store.set('maya_nudge', '1');
  const n = $('#nudge'); n.classList.add('is-in'); n.setAttribute('aria-hidden', 'false');
}
function hideNudge() {
  const n = $('#nudge'); n.classList.remove('is-in'); n.setAttribute('aria-hidden', 'true');
}
$('#nudgeClose').addEventListener('click', hideNudge);

/* ==========================================================================
   BOOKING — the panel on the page
   ========================================================================== */
const pagePicker = BK.createPicker({
  monthEl: $('#bkMonth'), daysEl: $('#bkDays'), slotsEl: $('#bkSlots'),
  prevEl: $('#bkPrev'), nextEl: $('#bkNext'), labelEl: $('#bkSlotsFor'),
});

const bkPick = $('#bkPick'), bkConfirm = $('#bkConfirm');
BK.onSelectionChange((sel) => {
  const ready = !!(sel.date && sel.time);
  bkConfirm.disabled = !ready;
  bkPick.classList.toggle('is-empty', !ready);
  bkPick.innerHTML = ready
    ? `${esc(BK.prettyLong(sel.date, sel.time))}<em>30 minutes · Google Meet</em>`
    : 'Choose a day and a time to continue.';
});
bkConfirm.addEventListener('click', () => openModal());

/* ==========================================================================
   MODAL — four steps, then the booking
   ========================================================================== */
const modal = $('#inquiry'), form = $('#inqForm');
const steps = $$('.inq-step', form), bar = $('#inqBar');
const back = $('#inqBack'), next = $('#inqNext'), countEl = $('#inqCount'), navBtns = $('#inqNav');
const LAST = 4;
let modalOpen = false, step = 1, lastFocus = null, modalPicker = null, submitting = false;

function openModal(pre) {
  hideNudge(); nudgeShown = true;
  lastFocus = document.activeElement;
  modalOpen = true;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-locked');
  lenis && lenis.stop();

  if (step === 5) resetForm();
  if (pre) {
    const cb = $(`input[name=service][value="${pre}"]`, form);
    if (cb) cb.checked = true;
  }
  if (!modalPicker) {
    modalPicker = BK.createPicker({
      monthEl: $('#mkMonth'), daysEl: $('#mkDays'), slotsEl: $('#mkSlots'),
      prevEl: $('#mkPrev'), nextEl: $('#mkNext'),
    });
  }
  setTimeout(() => {
    const f = $('input, button', steps[step - 1]) || next;
    f.focus();
  }, 340);
}
function closeModal() {
  modalOpen = false;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-locked');
  lenis && lenis.start();
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}

document.addEventListener('click', (e) => {
  const o = e.target.closest('[data-open-inquiry]');
  if (o) { e.preventDefault(); openModal(o.dataset.openInquiry); }
  if (e.target.closest('[data-close]')) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (!modalOpen) return;
  if (e.key === 'Escape') { closeModal(); return; }
  if (e.key !== 'Tab') return;
  const f = $$('button, a[href], input, select, textarea', $('.modal-panel'))
    .filter((el) => el.offsetParent !== null && !el.disabled);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

const selected = () => $$('input[name=service]:checked', form).map((i) => i.value);

function go(n) {
  step = n;
  steps.forEach((s) => s.classList.toggle('is-active', +s.dataset.step === n));
  bar.style.width = Math.min(n, LAST) / LAST * 100 + '%';
  back.disabled = n === 1;
  next.textContent = n === LAST ? 'Confirm booking' : 'Continue';
  countEl.textContent = `Step ${n} of ${LAST}`;
  navBtns.style.display = n === 5 ? 'none' : '';
  if (n === 2) $$('.dyn', form).forEach((d) => d.classList.toggle('is-on', selected().includes(d.dataset.for)));
  $('.modal-panel').scrollTop = 0;
  if (n === 2 || n === 3) {
    const f = $('input:not([type=checkbox]):not([type=radio]), select', steps[n - 1]);
    if (f) setTimeout(() => f.focus(), 120);
  }
}

next.addEventListener('click', () => {
  if (submitting) return;
  if (step === 1) {
    if (!selected().length) { $('#err1').textContent = 'Choose at least one so we know what to prepare.'; return; }
    $('#err1').textContent = ''; go(2);
  } else if (step === 2) {
    go(3);
  } else if (step === 3) {
    if (validateContact()) go(4);
  } else if (step === LAST) {
    submit();
  }
});
back.addEventListener('click', () => { if (step > 1) go(step - 1); });
form.addEventListener('submit', (e) => e.preventDefault());
form.addEventListener('change', (e) => { if (e.target.name === 'service') $('#err1').textContent = ''; });

/* ---- validation ---- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
function validateContact() {
  const fd = new FormData(form);
  const name = (fd.get('name') || '').trim();
  const email = (fd.get('email') || '').trim();
  const phone = (fd.get('phone') || '').replace(/[^\d+]/g, '');
  const nameEl = $('[name=name]', form), emailEl = $('[name=email]', form), phoneEl = $('[name=phone]', form);
  [nameEl, emailEl, phoneEl].forEach((el) => el.removeAttribute('aria-invalid'));

  const fail = (el, msg) => {
    el.setAttribute('aria-invalid', 'true');
    $('#err3').textContent = msg;
    el.focus();
    return false;
  };
  if (!name) return fail(nameEl, 'Add your name so we know who we are talking to.');
  if (!EMAIL_RE.test(email)) return fail(emailEl, 'We need a valid email — that is where your Google Meet link goes.');
  if (phone.replace(/\D/g, '').length < 10) return fail(phoneEl, 'Enter a 10-digit phone number so we can call you.');
  $('#err3').textContent = '';
  return true;
}

/* ---- summary of what they asked for ---- */
const LABELS = {
  website: 'Website / online store', invitation: 'Invitation', brochure: 'Brochure',
  video: 'Video editing', logo: 'Logo design', advice: 'Not sure yet — advice',
};
function buildSummary(fd) {
  const svc = selected();
  const lines = [['Services', svc.map((s) => LABELS[s]).join(', ')]];
  if (svc.includes('website')) lines.push(['Website', `${fd.get('web_type')} (assets: ${fd.get('web_assets')})`]);
  if (svc.includes('invitation')) lines.push(['Invitation', `${fd.get('inv_type')}, ${fd.get('inv_lang')}, ${fd.get('inv_format')}${fd.get('inv_date') ? ', on ' + fd.get('inv_date') : ''}`]);
  if (svc.includes('brochure')) lines.push(['Brochure', `${fd.get('br_type')}, ${fd.get('br_pages')}`]);
  if (svc.includes('video')) lines.push(['Video', `${fd.get('vid_type')}, ${fd.get('vid_len')}`]);
  if (svc.includes('logo')) lines.push(['Logo', `${fd.get('logo_name') || 'Name TBD'}, ${fd.get('logo_style')}`]);
  lines.push(['Budget', fd.get('budget')], ['Timeline', fd.get('timeline')]);
  if ((fd.get('message') || '').trim()) lines.push(['Idea', fd.get('message').trim()]);
  if (fd.get('city')) lines.push(['City', fd.get('city')]);
  lines.push(['Prefers', fd.get('pref')]);
  return lines;
}

/* ---- submit ---- */
async function submit() {
  const sel = BK.selection;
  if (!sel.date || !sel.time) {
    $('#err4').textContent = 'Pick a day and a time to finish.';
    return;
  }
  $('#err4').textContent = '';

  const fd = new FormData(form);
  const name = fd.get('name').trim(), email = fd.get('email').trim();
  const phone = fd.get('phone').replace(/[^\d+]/g, '');
  const lines = buildSummary(fd);

  submitting = true;
  const label = next.innerHTML;
  next.innerHTML = '<span class="sending"><span class="spin"></span>Booking…</span>';
  next.disabled = true; back.disabled = true;

  try {
    const res = await BK.submitBooking({
      name, email, phone,
      city: fd.get('city') || '',
      pref: fd.get('pref'),
      services: selected(),
      summary: lines.map(([k, v]) => `${k}: ${v}`).join('\n'),
      message: (fd.get('message') || '').trim(),
      date: sel.date, time: sel.time,
    });

    $('#doneName').textContent = name.split(' ')[0];
    $('#doneWhen').textContent = BK.prettyLong(sel.date, sel.time);
    $('#doneEmail').textContent = email;
    $('#donePhone').textContent = phone;

    const meet = res.meetLink || '';
    const meetEl = $('#doneMeet');
    meetEl.textContent = meet || 'No link yet — email is not connected';
    meetEl.href = meet || '#';
    $('#doneCopy').style.display = meet ? '' : 'none';
    $('#doneCal').style.display = meet ? '' : 'none';

    // Until email is connected nothing reaches the studio on its own, so the
    // WhatsApp hand-off becomes the main action rather than an afterthought.
    // A booked slot must never just evaporate.
    const wa = $('#sendWa');
    wa.classList.toggle('btn-primary', res.mode !== 'live');
    wa.classList.toggle('btn-ghost', res.mode === 'live');
    wa.textContent = res.mode === 'live'
      ? 'Message us on WhatsApp'
      : 'Send these details on WhatsApp';
    $('#doneLead').textContent = res.mode === 'live'
      ? "We've sent the Google Meet link to your email, and we'll call you within the hour."
      : 'One more tap: send these details to us on WhatsApp and we will confirm your slot and send the Meet link.';
    $('#doneCal').href = BK.googleCalUrl({ date: sel.date, time: sel.time, meetLink: meet, name });

    // Report exactly what happened to each recipient — never imply an email
    // went out when it did not.
    const sent = res.emailed || {};
    const rows = [
      [$('#rowClient'), sent.client, 'Thank-you email with the Meet link sent to', 'Could not email'],
      [$('#rowOwner'), sent.owner, 'The same details sent to', 'Could not email'],
    ];
    rows.forEach(([row, ok, okText, failText]) => {
      if (!row) return;
      row.classList.toggle('is-fail', res.mode === 'live' && !ok);
      row.classList.toggle('is-pending', res.mode !== 'live');
      const lead = row.querySelector('span');
      const strong = lead.querySelector('b');
      const who = strong ? strong.outerHTML : '';
      if (res.mode !== 'live') lead.innerHTML = `Would be emailed to ${who}`;
      else lead.innerHTML = `${ok ? okText : failText} ${who}`;
    });

    const demoRow = $('#doneDemoRow'), demoText = $('#doneDemoText');
    if (res.mode === 'demo') {
      demoRow.hidden = false;
      demoText.innerHTML = '<b>Preview mode:</b> email is not connected yet, so nothing was sent and no Meet link was created. See the README to connect it.';
      $('#doneNote').textContent = res.note || '';
    } else {
      demoRow.hidden = true;
      $('#doneNote').textContent = res.note
        || 'Check your inbox — if it is not there in a few minutes, look in the spam folder.';
    }

    $('#sendWa').href = waLink(`Hi Maya! I just booked a call for ${BK.prettyLong(sel.date, sel.time)}.\n\n` + lines.map(([k, v]) => `${k}: ${v}`).join('\n'));
    $('#doneSummary').innerHTML = lines.map(([k, v]) => `<div><b>${esc(k)}:</b> ${esc(v)}</div>`).join('');

    BK.forgetAvailability(sel.date);
    pagePicker.refresh();
    if (modalPicker) modalPicker.refresh();

    go(5);
    bar.style.width = '100%';
    confetti();
  } catch (err) {
    $('#err4').innerHTML = `${esc(err.message)} You can still <a href="${waLink('Hi Maya! I tried to book a call on the site and it did not go through.')}" target="_blank" rel="noopener" style="color:var(--clay);text-decoration:underline">message us on WhatsApp</a>.`;
  } finally {
    submitting = false;
    next.innerHTML = label; next.disabled = false; back.disabled = false;
  }
}

$('#doneCopy').addEventListener('click', async () => {
  const el = $('#doneCopy');
  try {
    await navigator.clipboard.writeText($('#doneMeet').textContent);
    el.textContent = 'Copied';
    setTimeout(() => (el.textContent = 'Copy'), 1800);
  } catch {
    el.textContent = 'Select it';
    setTimeout(() => (el.textContent = 'Copy'), 1800);
  }
});

function resetForm() {
  form.reset();
  $$('.dyn', form).forEach((d) => d.classList.remove('is-on'));
  $$('[aria-invalid]', form).forEach((el) => el.removeAttribute('aria-invalid'));
  $('#err1').textContent = ''; $('#err3').textContent = ''; $('#err4').textContent = '';
  go(1);
}

/* ---------------- confetti ---------------- */
function confetti() {
  if (reduce) return;
  const c = $('#confetti'), x = c.getContext('2d'), r = c.getBoundingClientRect();
  c.width = r.width * devicePixelRatio; c.height = r.height * devicePixelRatio;
  x.scale(devicePixelRatio, devicePixelRatio);
  const cols = ['#C0543A', '#D2A24C', '#27392C', '#E8BE6D', '#F2ECE1'];
  const ps = Array.from({ length: 130 }, () => ({
    x: r.width / 2, y: r.height * 0.3,
    vx: (Math.random() - 0.5) * 13, vy: -Math.random() * 11 - 4,
    s: 4 + Math.random() * 6, a: Math.random() * 6, va: (Math.random() - 0.5) * 0.4,
    c: cols[(Math.random() * cols.length) | 0],
  }));
  let f = 0;
  (function tick() {
    x.clearRect(0, 0, r.width, r.height);
    ps.forEach((p) => {
      p.vy += 0.3; p.vx *= 0.986; p.x += p.vx; p.y += p.vy; p.a += p.va;
      x.save(); x.translate(p.x, p.y); x.rotate(p.a);
      x.globalAlpha = Math.max(0, 1 - f / 135);
      x.fillStyle = p.c; x.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
      x.restore();
    });
    if (++f < 135) requestAnimationFrame(tick); else x.clearRect(0, 0, r.width, r.height);
  })();
}
