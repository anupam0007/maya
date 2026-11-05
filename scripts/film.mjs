/* ==========================================================================
   film.mjs: the six scenes of the Maya story film.

   Typographic and warm: paper, clay, sand, forest. The same palette and
   typefaces as the site, so the film feels like part of the page rather
   than a stock animation dropped into it.

   Every scene is a pure function of local time, which means any frame can
   be re-rendered on its own (handy for the poster).
   ========================================================================== */

export const W = 1280, H = 720, FPS = 30;

export const C = {
  paper:   '#F2ECE1',
  paperHi: '#FBF7F0',
  paperLo: '#E7DDCC',
  edge:    '#D8CBB5',
  ink:     '#17120D',
  ink2:    '#3B332A',
  ink3:    '#6B6054',
  ink4:    '#9A8D7E',
  clay:    '#C0543A',
  clayHi:  '#DC6A4B',
  sand:    '#D2A24C',
  sandHi:  '#E8BE6D',
  forest:  '#27392C',
  dark:    '#191410',
  dark2:   '#231C16',
};

const DISPLAY = 'Fraunces';
const ITALIC = 'FrauncesItalic';
const SANS = 'Hanken Grotesk';
const KN = 'Noto Sans Kannada';

/* ---- maths ---- */
export const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const outCubic = (t) => 1 - Math.pow(1 - clamp01(t), 3);
const outQuint = (t) => 1 - Math.pow(1 - clamp01(t), 5);
const inOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
/** progress through a window that starts at `from` and lasts `len` seconds */
const win = (t, from, len) => clamp01((t - from) / len);

/* ---- drawing helpers ---- */
function rr(x, X, Y, w, h, r) {
  const k = Math.min(r, w / 2, h / 2);
  x.beginPath();
  x.moveTo(X + k, Y);
  x.arcTo(X + w, Y, X + w, Y + h, k);
  x.arcTo(X + w, Y + h, X, Y + h, k);
  x.arcTo(X, Y + h, X, Y, k);
  x.arcTo(X, Y, X + w, Y, k);
  x.closePath();
}
function alphaFill(x, color, a) { x.globalAlpha = a; x.fillStyle = color; }

/** Strokes a rectangle as if drawn by hand, `p` of the way round. */
function drawRect(x, X, Y, w, h, p, color, lw = 2) {
  if (p <= 0) return;
  const per = (w + h) * 2;
  x.save();
  x.strokeStyle = color; x.lineWidth = lw; x.lineCap = 'round';
  x.setLineDash([per, per]);
  x.lineDashOffset = per * (1 - clamp01(p));
  x.beginPath();
  x.moveTo(X, Y); x.lineTo(X + w, Y); x.lineTo(X + w, Y + h); x.lineTo(X, Y + h); x.closePath();
  x.stroke();
  x.restore();
}
function drawCircle(x, cx, cy, r, p, color, lw = 2) {
  if (p <= 0) return;
  const per = 2 * Math.PI * r;
  x.save();
  x.strokeStyle = color; x.lineWidth = lw; x.lineCap = 'round';
  x.setLineDash([per, per]);
  x.lineDashOffset = per * (1 - clamp01(p));
  x.beginPath(); x.arc(cx, cy, r, -Math.PI / 2, Math.PI * 1.5);
  x.stroke();
  x.restore();
}

/** Text that types itself out, with a caret while it runs. */
function typed(x, text, X, Y, p, caret = true) {
  const n = Math.floor(clamp01(p) * text.length);
  const shown = text.slice(0, n);
  x.fillText(shown, X, Y);
  if (caret && p < 1 && Math.floor(p * 40) % 2 === 0) {
    const w = x.measureText(shown).width;
    x.fillRect(X + w + 4, Y - 20, 3, 26);
  }
}

/** A word that rises into place behind a mask. */
function riseText(x, text, X, Y, p, size, font, color, align = 'left') {
  const e = outQuint(p);
  x.save();
  x.beginPath(); x.rect(X - 20, Y - size * 1.05, 1400, size * 1.35); x.clip();
  x.globalAlpha = clamp01(p * 2);
  x.fillStyle = color;
  x.font = `${size}px ${font}`;
  x.textAlign = align;
  x.fillText(text, X, Y + size * 1.1 * (1 - e));
  x.restore();
  x.textAlign = 'left';
}

/* ---- shared chrome ---- */
function paperBg(x, tint = C.paper) {
  x.fillStyle = tint; x.fillRect(0, 0, W, H);
  const g = x.createRadialGradient(W / 2, H * 0.42, 60, W / 2, H / 2, W * 0.72);
  g.addColorStop(0, 'rgba(255,255,255,.5)');
  g.addColorStop(1, 'rgba(120,88,52,.14)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
}

/** Deterministic grain, so frames don't strobe. */
let grainCache = null;
function grain(x, frame) {
  if (!grainCache) {
    grainCache = [];
    let seed = 7;
    const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
    for (let k = 0; k < 4; k++) {
      const pts = [];
      for (let i = 0; i < 2200; i++) pts.push([rnd() * W, rnd() * H, rnd() > 0.5]);
      grainCache.push(pts);
    }
  }
  const pts = grainCache[frame % 4];
  x.save(); x.globalAlpha = 0.035;
  for (const [px, py, light] of pts) {
    x.fillStyle = light ? '#fff' : '#000';
    x.fillRect(px, py, 2, 2);
  }
  x.restore();
}

function chapterTag(x, n, title, p, onDark) {
  if (p <= 0) return;
  const a = clamp01(p * 2.2);
  x.save();
  x.globalAlpha = a;
  x.textAlign = 'left';
  x.fillStyle = onDark ? C.sand : C.clay;
  x.font = `600 15px ${SANS}`;
  const label = `${n}`;
  x.fillText(label, 74, H - 68);
  const lw = x.measureText(label).width;
  x.globalAlpha = a * 0.5;
  x.fillRect(74 + lw + 14, H - 74, 26 * outCubic(p), 1.5);
  x.globalAlpha = a;
  x.fillStyle = onDark ? 'rgba(251,247,240,.82)' : C.ink2;
  x.font = `500 15px ${SANS}`;
  x.fillText(title, 74 + lw + 54, H - 68);
  x.restore();
}

function progressBar(x, global, onDark) {
  x.save();
  x.globalAlpha = onDark ? 0.18 : 0.14;
  x.fillStyle = onDark ? C.paperHi : C.ink;
  x.fillRect(0, H - 3, W, 3);
  x.globalAlpha = 1;
  x.fillStyle = onDark ? C.sand : C.clay;
  x.fillRect(0, H - 3, W * clamp01(global), 3);
  x.restore();
}

/* ---- floating motes, shared across the warm scenes ---- */
function motes(x, t, n, color, alpha) {
  x.save();
  for (let i = 0; i < n; i++) {
    const s = i * 12.9898;
    const bx = ((Math.sin(s) * 43758.5453) % 1 + 1) % 1;
    const by = ((Math.sin(s * 1.7) * 23421.631) % 1 + 1) % 1;
    const sp = 0.25 + (((Math.sin(s * 2.3) * 9731.17) % 1 + 1) % 1) * 0.5;
    const px = bx * W + Math.sin(t * sp + i) * 26;
    const py = (by * H - t * 16 * sp + H * 3) % H;
    const r = 1.6 + (((Math.sin(s * 3.1) * 1273.7) % 1 + 1) % 1) * 2.4;
    x.globalAlpha = alpha * (0.35 + 0.65 * Math.abs(Math.sin(t * 0.7 + i)));
    x.fillStyle = color;
    x.beginPath(); x.arc(px, py, r, 0, 7); x.fill();
  }
  x.restore();
}

/* ==========================================================================
   SCENE 1: A curious kid
   ========================================================================== */
function s1(x, t) {
  paperBg(x);
  motes(x, t, 26, C.sand, 0.5);

  // the window that starts it all
  const bw = 420, bh = 290, bx = W / 2 - bw / 2 + 180, by = H / 2 - bh / 2 - 20;
  drawRect(x, bx, by, bw, bh, win(t, 0.3, 1.5), C.ink4, 2);

  const inner = win(t, 1.3, 0.8);
  if (inner > 0) {
    x.save();
    x.globalAlpha = inner * 0.5;
    x.fillStyle = C.paperHi; x.fillRect(bx + 2, by + 2, bw - 4, bh - 4);
    x.globalAlpha = inner;
    x.fillStyle = C.paperLo; x.fillRect(bx + 2, by + 2, bw - 4, 34);
    for (let i = 0; i < 3; i++) {
      x.fillStyle = [C.clay, C.sand, C.forest][i];
      x.beginPath(); x.arc(bx + 24 + i * 20, by + 19, 5, 0, 7); x.fill();
    }
    x.restore();
  }

  // the question, typed then held
  const q = win(t, 2.0, 1.4);
  if (q > 0) {
    x.save();
    x.fillStyle = C.clay;
    x.font = `64px ${ITALIC}`;
    x.textAlign = 'center';
    typed(x, 'how?', bx + bw / 2, by + bh / 2 + 36, q, false);
    x.restore();
  }

  riseText(x, 'It started with', 74, 300, win(t, 0.8, 1), 62, DISPLAY, C.ink);
  riseText(x, 'one question.', 74, 372, win(t, 1.05, 1), 62, ITALIC, C.clay);

  const sub = win(t, 2.2, 1);
  if (sub > 0) {
    x.save(); x.globalAlpha = sub;
    x.fillStyle = C.ink3; x.font = `400 20px ${SANS}`;
    x.fillText('A glowing screen, and a kid who wanted to know', 74, 426);
    x.fillText('how the web was made.', 74, 456);
    x.restore();
  }

  chapterTag(x, '01', 'A curious kid', win(t, 0.5, 0.8), false);
}

/* ==========================================================================
   SCENE 2: Computer Science Engineering
   ========================================================================== */
function s2(x, t) {
  paperBg(x, '#EFE9DC');

  // blueprint grid
  const g = win(t, 0.1, 1.2);
  if (g > 0) {
    x.save(); x.globalAlpha = g * 0.3; x.strokeStyle = C.ink4; x.lineWidth = 1;
    const step = 48, cols = Math.ceil((W * g) / step);
    for (let i = 0; i <= cols; i++) { x.beginPath(); x.moveTo(i * step, 0); x.lineTo(i * step, H); x.stroke(); }
    for (let j = 0; j * step <= H; j++) { x.beginPath(); x.moveTo(0, j * step); x.lineTo(W * g, j * step); x.stroke(); }
    x.restore();
  }

  // a node graph assembling itself
  const nodes = [[880, 210], [1060, 300], [900, 400], [1090, 470], [760, 330]];
  const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [0, 4]];
  edges.forEach(([a, b], i) => {
    const p = win(t, 1.1 + i * 0.16, 0.5);
    if (p <= 0) return;
    const [x1, y1] = nodes[a], [x2, y2] = nodes[b];
    x.save(); x.strokeStyle = C.sand; x.lineWidth = 1.8; x.globalAlpha = 0.85;
    x.beginPath(); x.moveTo(x1, y1);
    x.lineTo(x1 + (x2 - x1) * outCubic(p), y1 + (y2 - y1) * outCubic(p));
    x.stroke(); x.restore();
  });
  nodes.forEach(([nx, ny], i) => {
    const p = win(t, 0.9 + i * 0.14, 0.5);
    if (p <= 0) return;
    const r = 13 * outQuint(p);
    x.save();
    x.fillStyle = i === 0 ? C.clay : C.forest;
    x.beginPath(); x.arc(nx, ny, r, 0, 7); x.fill();
    x.globalAlpha = 0.25 * (1 - win(t, 1.2 + i * 0.14, 1.4));
    x.beginPath(); x.arc(nx, ny, r + 16 * win(t, 0.9 + i * 0.14, 1.4), 0, 7); x.fill();
    x.restore();
  });

  riseText(x, 'So he went and', 74, 300, win(t, 0.12, 1), 62, DISPLAY, C.ink);
  riseText(x, 'learned the craft.', 74, 372, win(t, 0.36, 1), 62, ITALIC, C.forest);

  const sub = win(t, 1.3, 1);
  if (sub > 0) {
    x.save(); x.globalAlpha = sub;
    x.fillStyle = C.ink3; x.font = `400 20px ${SANS}`;
    x.fillText('A BE in Computer Science, four years of', 74, 426);
    x.fillText('understanding how things are actually built.', 74, 456);
    x.restore();
  }

  // a line of code typing itself
  const code = win(t, 2.4, 1.6);
  if (code > 0) {
    x.save();
    x.fillStyle = C.paperHi; rr(x, 70, 496, 470, 54, 10); x.fill();
    x.strokeStyle = C.edge; x.lineWidth = 1; x.stroke();
    x.fillStyle = C.clay; x.font = `500 21px ${SANS}`;
    typed(x, '<html>  hello, world  </html>', 92, 531, code);
    x.restore();
  }

  chapterTag(x, '02', 'Computer Science Engineering', win(t, 0.3, 0.8), false);
}

/* ==========================================================================
   SCENE 3: The IT years
   ========================================================================== */
function s3(x, t) {
  // night falls over the paper
  const night = outCubic(win(t, 0, 0.9));
  paperBg(x);
  x.save(); x.globalAlpha = night; x.fillStyle = C.dark; x.fillRect(0, 0, W, H); x.restore();

  const warm = x.createRadialGradient(1000, 300, 20, 1000, 300, 460);
  warm.addColorStop(0, `rgba(210,162,76,${0.12 * night})`);
  warm.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = warm; x.fillRect(0, 0, W, H);

  // the clock that never stops
  const cx = 1010, cy = 248, R = 108;
  drawCircle(x, cx, cy, R, win(t, 0.8, 1), 'rgba(251,247,240,.5)', 2.2);
  const tick = win(t, 1.4, 0.6);
  if (tick > 0) {
    x.save(); x.globalAlpha = tick * 0.4; x.strokeStyle = C.paperHi; x.lineWidth = 2;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      x.beginPath();
      x.moveTo(cx + Math.cos(a) * (R - 14), cy + Math.sin(a) * (R - 14));
      x.lineTo(cx + Math.cos(a) * (R - 5), cy + Math.sin(a) * (R - 5));
      x.stroke();
    }
    x.restore();
  }
  const spin = win(t, 1.6, 4.4);
  if (spin > 0) {
    const fast = spin * Math.PI * 2 * 11;        // minutes racing
    const slow = spin * Math.PI * 2 * 0.92;      // hours crawling
    x.save();
    x.strokeStyle = C.sand; x.lineWidth = 3; x.lineCap = 'round';
    x.beginPath(); x.moveTo(cx, cy);
    x.lineTo(cx + Math.sin(fast) * (R - 26), cy - Math.cos(fast) * (R - 26)); x.stroke();
    x.strokeStyle = C.paperHi; x.lineWidth = 4.5;
    x.beginPath(); x.moveTo(cx, cy);
    x.lineTo(cx + Math.sin(slow) * (R - 54), cy - Math.cos(slow) * (R - 54)); x.stroke();
    x.fillStyle = C.clay; x.beginPath(); x.arc(cx, cy, 6, 0, 7); x.fill();
    x.restore();
  }

  // tickets stacking up
  for (let i = 0; i < 6; i++) {
    const p = win(t, 2.0 + i * 0.42, 0.7);
    if (p <= 0) continue;
    const e = outQuint(p);
    const ty = 540 + 26 * i - 150 * e;
    x.save();
    x.globalAlpha = e * (1 - i * 0.07);
    x.fillStyle = C.dark2;
    rr(x, 870 + i * 9, ty, 320, 42, 8); x.fill();
    x.strokeStyle = 'rgba(251,247,240,.1)'; x.lineWidth = 1; x.stroke();
    x.fillStyle = i === 0 ? C.clay : 'rgba(251,247,240,.25)';
    x.beginPath(); x.arc(892 + i * 9, ty + 21, 5, 0, 7); x.fill();
    x.fillStyle = 'rgba(251,247,240,.42)';
    x.fillRect(908 + i * 9, ty + 17, 150 - i * 12, 7);
    x.restore();
  }

  riseText(x, 'Then three and a half', 74, 288, win(t, 1.0, 1), 56, DISPLAY, C.paperHi);
  riseText(x, 'years of night shifts.', 74, 356, win(t, 1.25, 1), 56, ITALIC, C.sandHi);

  const sub = win(t, 2.1, 1);
  if (sub > 0) {
    x.save(); x.globalAlpha = sub;
    x.fillStyle = 'rgba(251,247,240,.55)'; x.font = `400 20px ${SANS}`;
    x.fillText('Production support. Tickets. A pager that did not', 74, 410);
    x.fillText('care what time it was.', 74, 440);
    x.restore();
  }

  const clock = win(t, 3.0, 0.8);
  if (clock > 0) {
    x.save(); x.globalAlpha = clock * 0.8;
    x.fillStyle = C.sand; x.font = `600 15px ${SANS}`;
    x.fillText('0 3 : 4 0   A M', 74, 498);
    x.restore();
  }

  chapterTag(x, '03', 'The IT years', win(t, 0.6, 0.8), true);
}

/* ==========================================================================
   SCENE 4: The spark
   ========================================================================== */
function s4(x, t) {
  // the warmth comes back
  const dawn = inOut(clamp01(win(t, 0, 1.3)));
  x.fillStyle = C.dark; x.fillRect(0, 0, W, H);
  x.save(); x.globalAlpha = dawn; paperBg(x); x.restore();

  const bloom = win(t, 0.1, 1.6);
  if (bloom > 0 && bloom < 1) {
    const g = x.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, 420 * bloom);
    g.addColorStop(0, `rgba(232,190,109,${0.5 * (1 - bloom)})`);
    g.addColorStop(1, 'rgba(232,190,109,0)');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
  }
  motes(x, t, 30, C.clay, 0.45 * dawn);

  // an invitation drawing itself
  const ix = 870, iy = 150, iw = 330, ih = 430;
  const card = win(t, 1.1, 0.6);
  if (card > 0) {
    x.save();
    x.globalAlpha = card;
    x.shadowColor = 'rgba(90,60,35,.22)'; x.shadowBlur = 40; x.shadowOffsetY = 18;
    x.fillStyle = '#FDF8EE';
    rr(x, ix, iy, iw, ih, 10); x.fill();
    x.restore();
  }
  drawRect(x, ix + 20, iy + 20, iw - 40, ih - 40, win(t, 1.5, 1.1), C.sand, 1.6);

  const txt = win(t, 2.2, 1.1);
  if (txt > 0) {
    x.save();
    x.globalAlpha = txt;
    x.textAlign = 'center';
    const mx = ix + iw / 2;
    x.fillStyle = '#8A6B43'; x.font = `500 12px ${SANS}`;
    x.fillText('T O G E T H E R   W I T H   T H E I R   F A M I L I E S', mx, iy + 96);
    x.fillStyle = '#7A2E2A'; x.font = `52px ${ITALIC}`;
    x.fillText('Arjun', mx, iy + 184);
    x.fillStyle = C.sand; x.font = `30px ${ITALIC}`;
    x.fillText('&', mx, iy + 228);
    x.fillStyle = '#7A2E2A'; x.font = `52px ${ITALIC}`;
    x.fillText('Meera', mx, iy + 284);
    x.fillStyle = C.sand; x.fillRect(mx - 34, iy + 314, 68, 1.5);
    x.fillStyle = '#7A2E2A'; x.font = `20px ${DISPLAY}`;
    x.fillText('Sunday, 14 February', mx, iy + 356);
    x.fillStyle = '#7A2E2A'; x.font = `500 21px ${KN}`;
    x.fillText('ಶುಭ ವಿವಾಹ', mx, iy + 400);
    x.textAlign = 'left';
    x.restore();
  }

  riseText(x, 'But every evening', 74, 292, win(t, 1.0, 1), 60, DISPLAY, C.ink);
  riseText(x, 'went into this.', 74, 362, win(t, 1.25, 1), 60, ITALIC, C.clay);

  const sub = win(t, 2.0, 1);
  if (sub > 0) {
    x.save(); x.globalAlpha = sub;
    x.fillStyle = C.ink3; x.font = `400 20px ${SANS}`;
    x.fillText('Websites for friends. Invitations for family.', 74, 416);
    x.fillText('Work that did not feel like work.', 74, 446);
    x.restore();
  }

  chapterTag(x, '04', 'The spark', win(t, 0.9, 0.8), false);
}

/* ==========================================================================
   SCENE 5: Passion over paycheck
   ========================================================================== */
function s5(x, t) {
  paperBg(x);
  motes(x, t, 22, C.sand, 0.4);

  const cx = 980, cy = 320, R = 84;
  const join = outQuint(win(t, 1.0, 1.6));
  // they overlap but never quite become one circle, so you can still see both
  const gap = 24 + 130 * (1 - join);

  [[-1, 'A', C.clay, 'Anupam Gowda', 'design & web'],
   [1, 'S', C.forest, 'Samarth', 'video & identity']].forEach(([dir, letter, col, nm, role], i) => {
    const p = win(t, 0.5 + i * 0.12, 0.8);
    if (p <= 0) return;
    const px = cx + dir * gap;
    x.save();
    x.globalAlpha = clamp01(p);
    x.fillStyle = col;
    x.beginPath(); x.arc(px, cy, R * outQuint(p), 0, 7); x.fill();
    x.globalAlpha = clamp01(p) * (1 - join * 0.85);
    x.fillStyle = C.paperHi; x.font = `44px ${DISPLAY}`; x.textAlign = 'center';
    x.fillText(letter, px, cy + 16);
    x.restore();

    const np = win(t, 2.9 + i * 0.18, 0.8);
    if (np > 0) {
      x.save();
      x.globalAlpha = np; x.textAlign = 'center';
      x.fillStyle = C.ink; x.font = `500 19px ${SANS}`;
      x.fillText(nm, cx + dir * 170, cy + R + 60);
      x.fillStyle = C.ink4; x.font = `400 14px ${SANS}`;
      x.fillText(role, cx + dir * 170, cy + R + 84);
      x.restore();
    }
  });

  // the mark strokes itself over the two of them
  const mark = win(t, 2.2, 1.3);
  if (mark > 0) {
    x.save();
    x.translate(cx, cy);
    x.scale(0.78, 0.78);
    x.strokeStyle = C.paperHi; x.lineWidth = 17; x.lineCap = 'round'; x.lineJoin = 'round';
    const len = 420;
    x.setLineDash([len, len]);
    x.lineDashOffset = len * (1 - outCubic(mark));
    x.beginPath();
    x.moveTo(-52, 48); x.lineTo(-52, -48); x.lineTo(0, 10); x.lineTo(52, -48); x.lineTo(52, 48);
    x.stroke();
    x.restore();
    if (mark > 0.75) {
      x.save(); x.globalAlpha = (mark - 0.75) / 0.25;
      x.fillStyle = C.sand; x.beginPath(); x.arc(cx, cy + 40, 8, 0, 7); x.fill();
      x.restore();
    }
  }

  riseText(x, 'So he chose passion', 74, 288, win(t, 0.3, 1), 56, DISPLAY, C.ink);
  riseText(x, 'over the paycheck.', 74, 356, win(t, 0.55, 1), 56, ITALIC, C.clay);

  const sub = win(t, 1.4, 1);
  if (sub > 0) {
    x.save(); x.globalAlpha = sub;
    x.fillStyle = C.ink3; x.font = `400 20px ${SANS}`;
    x.fillText('He left IT to design full time.', 74, 410);
    x.fillText('Samarth brought the camera and the colour.', 74, 440);
    x.restore();
  }

  chapterTag(x, '05', 'Passion over paycheck', win(t, 0.2, 0.8), false);
}

/* ==========================================================================
   SCENE 6: Maya
   ========================================================================== */
function s6(x, t) {
  paperBg(x, C.paperHi);
  motes(x, t, 34, C.sand, 0.55);

  const name = win(t, 0.3, 1.2);
  x.textAlign = 'center';
  if (name > 0) {
    x.save();
    x.globalAlpha = clamp01(name * 1.6);
    const e = outQuint(name);
    x.translate(W / 2, 300);
    x.scale(0.88 + 0.12 * e, 0.88 + 0.12 * e);
    x.fillStyle = C.ink; x.font = `150px ${ITALIC}`;
    x.fillText('Maya', 0, 0);
    x.restore();
  }

  const rule = win(t, 1.3, 0.9);
  if (rule > 0) {
    x.save();
    x.fillStyle = C.clay;
    const w = 300 * outCubic(rule);
    x.fillRect(W / 2 - w / 2, 334, w, 3);
    x.restore();
  }

  const tag = win(t, 1.7, 0.9);
  if (tag > 0) {
    x.save(); x.globalAlpha = tag;
    x.fillStyle = C.ink2; x.font = `400 21px ${SANS}`;
    x.fillText('Websites  ·  Invitations  ·  Brochures  ·  Video  ·  Logos', W / 2, 392);
    x.restore();
  }

  // the ask
  const cta = win(t, 2.6, 1);
  if (cta > 0) {
    const e = outQuint(cta);
    x.save();
    x.globalAlpha = cta;
    x.translate(0, 26 * (1 - e));
    const bw2 = 348, bh2 = 62, bx2 = W / 2 - bw2 / 2, by2 = 452;
    x.fillStyle = C.clay; rr(x, bx2, by2, bw2, bh2, 31); x.fill();
    x.fillStyle = C.paperHi; x.font = `600 20px ${SANS}`;
    x.fillText('Book a free 30-minute call', W / 2, by2 + 39);
    x.fillStyle = C.ink3; x.font = `400 16px ${SANS}`;
    x.fillText('Monday to Saturday, 9 am to 6 pm  ·  Google Meet link sent instantly', W / 2, by2 + 98);
    x.restore();
  }

  const foot = win(t, 3.4, 0.9);
  if (foot > 0) {
    x.save(); x.globalAlpha = foot * 0.85;
    x.fillStyle = C.ink4; x.font = `600 14px ${SANS}`;
    x.fillText('B E N G A L U R U   ·   I N D I A', W / 2, H - 92);
    x.restore();
  }
  x.textAlign = 'left';
}

/* ==========================================================================
   Timeline: the `at` values match data-t on the chapter list in index.html
   ========================================================================== */
export const SCENES = [
  { at: 0,  dur: 6, draw: s1 },
  { at: 6,  dur: 6, draw: s2 },
  { at: 12, dur: 6, draw: s3 },
  { at: 18, dur: 7, draw: s4 },
  { at: 25, dur: 7, draw: s5 },
  { at: 32, dur: 8, draw: s6 },
];
export const DURATION = 40;

const DARK_SCENES = new Set([2]);          // index of s3, for the chrome colour

export function renderFrame(x, frame) {
  const time = frame / FPS;
  const i = Math.max(0, SCENES.findIndex((s) => time < s.at + s.dur));
  const idx = i === -1 ? SCENES.length - 1 : i;
  const sc = SCENES[idx];
  const local = time - sc.at;

  x.save();
  x.textAlign = 'left'; x.textBaseline = 'alphabetic';
  sc.draw(x, local, sc.dur);
  x.restore();

  // Cross-dissolve into the next scene. Kept short: the incoming scene has
  // barely any content at its own time zero, so a long dissolve reads as a
  // blank flash rather than a transition.
  const FADE = 0.3;
  const nxt = SCENES[idx + 1];
  if (nxt && local > sc.dur - FADE) {
    const p = (local - (sc.dur - FADE)) / FADE;
    x.save();
    x.globalAlpha = p;
    x.textAlign = 'left'; x.textBaseline = 'alphabetic';
    nxt.draw(x, 0, nxt.dur);
    x.restore();
  }

  const onDark = DARK_SCENES.has(idx) || (nxt && DARK_SCENES.has(idx + 1) && local > sc.dur - FADE);
  grain(x, frame);
  progressBar(x, time / DURATION, onDark);
}

export const FONT_FILES = [
  ['fraunces-var.woff2', DISPLAY],
  ['fraunces-var-italic.woff2', ITALIC],
  ['hanken-var.woff2', SANS],
  ['noto-kannada-500.woff2', KN],
];
