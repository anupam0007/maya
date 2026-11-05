/* ==========================================================================
   textures.js: the artwork painted onto the 3D hero cards.
   Each painter draws a readable, recognisable preview of one deliverable
   in the studio palette. 768 x 1024 (3:4), matching the card geometry.
   ========================================================================== */

export const C = {
  paper:   '#F2ECE1',
  paperHi: '#FBF7F0',
  paperLo: '#E7DDCC',
  edge:    '#D8CBB5',
  ink:     '#17120D',
  ink2:    '#3B332A',
  ink4:    '#9A8D7E',
  clay:    '#C0543A',
  clayHi:  '#DC6A4B',
  clayLo:  '#96402C',
  forest:  '#27392C',
  forestHi:'#3A5340',
  sand:    '#D2A24C',
  sandHi:  '#E8BE6D',
  dark:    '#191410',
};

const W = 768, H = 1024;
const DISPLAY = '"Fraunces", Georgia, serif';
const SANS = '"Hanken Grotesk", system-ui, sans-serif';
const KN = '"Noto Sans Kannada", system-ui, sans-serif';

/* ---- tiny drawing helpers ---- */
function rr(x, X, Y, w, h, r) { x.beginPath(); x.roundRect(X, Y, w, h, r); }
function fillRR(x, X, Y, w, h, r, fill) { rr(x, X, Y, w, h, r); x.fillStyle = fill; x.fill(); }
function lg(x, x0, y0, x1, y1, stops) {
  const g = x.createLinearGradient(x0, y0, x1, y1);
  stops.forEach((s, i) => g.addColorStop(i / (stops.length - 1), s));
  return g;
}
function bar(x, X, Y, w, h, fill, r = h / 2) { fillRR(x, X, Y, w, h, r, fill); }
/* paper tooth so the cards don't read as flat vector */
function tooth(x, alpha = 0.035) {
  x.save(); x.globalAlpha = alpha;
  for (let i = 0; i < 2600; i++) {
    x.fillStyle = i % 2 ? '#000' : '#fff';
    x.fillRect(Math.random() * W, Math.random() * H, 1.6, 1.6);
  }
  x.restore();
}

/* ========================================================================== */
export const PAINTERS = {

  /* -------- 1. Business website ------------------------------------- */
  website(x) {
    x.fillStyle = C.paperHi; x.fillRect(0, 0, W, H);

    // browser chrome
    x.fillStyle = C.paperLo; x.fillRect(0, 0, W, 78);
    ['#D8695A', '#D9AA55', '#7F9C72'].forEach((c, i) => {
      x.fillStyle = c; x.beginPath(); x.arc(44 + i * 30, 39, 9, 0, 7); x.fill();
    });
    fillRR(x, 170, 20, 440, 38, 19, C.paperHi);
    x.fillStyle = C.ink4; x.font = `500 19px ${SANS}`; x.textAlign = 'center';
    x.fillText('yourbusiness.in', 390, 46);
    x.textAlign = 'left';

    // hero copy
    x.fillStyle = C.clay; x.font = `600 17px ${SANS}`;
    x.fillText('F R E S H   D A I L Y', 56, 168);
    x.fillStyle = C.ink; x.font = `400 86px ${DISPLAY}`;
    x.fillText('Fresh from', 52, 262);
    x.font = `italic 400 86px ${DISPLAY}`; x.fillStyle = C.clay;
    x.fillText('our oven.', 52, 352);
    x.fillStyle = C.ink2; x.font = `400 24px ${SANS}`;
    x.fillText('Cakes, bakes and coffee,', 56, 404);
    x.fillText('delivered across Bengaluru.', 56, 438);

    // CTA
    fillRR(x, 54, 476, 228, 64, 32, C.ink);
    x.fillStyle = C.paperHi; x.font = `600 22px ${SANS}`; x.textAlign = 'center';
    x.fillText('Order now', 168, 516); x.textAlign = 'left';
    x.strokeStyle = C.edge; x.lineWidth = 2;
    rr(x, 298, 476, 180, 64, 32); x.stroke();
    x.fillStyle = C.ink2; x.font = `500 21px ${SANS}`; x.textAlign = 'center';
    x.fillText('Our menu', 388, 515); x.textAlign = 'left';

    // product photo
    const g = x.createRadialGradient(600, 300, 20, 600, 300, 230);
    g.addColorStop(0, C.sandHi); g.addColorStop(.55, '#C9803F'); g.addColorStop(1, '#8A4B25');
    fillRR(x, 490, 150, 230, 330, 26, g);
    x.fillStyle = 'rgba(251,247,240,.28)';
    x.beginPath(); x.ellipse(568, 232, 44, 26, -.5, 0, 7); x.fill();

    // cards row
    for (let i = 0; i < 3; i++) {
      const X = 54 + i * 226;
      fillRR(x, X, 596, 206, 212, 20, C.paper);
      fillRR(x, X + 18, 616, 170, 110, 14,
        lg(x, X, 616, X + 170, 726, [[C.sandHi, C.clay], [C.paperLo, C.edge], ['#C9D8BE', C.forestHi]][i]));
      bar(x, X + 18, 744, 118, 11, C.ink);
      bar(x, X + 18, 768, 78, 9, C.ink4);
    }

    // footer bar
    x.fillStyle = C.forest; x.fillRect(0, 856, W, 168);
    x.fillStyle = C.paperHi; x.font = `italic 400 44px ${DISPLAY}`;
    x.fillText('Kavya Bakes', 54, 930);
    x.fillStyle = 'rgba(251,247,240,.6)'; x.font = `400 20px ${SANS}`;
    x.fillText('Jayanagar  ·  Open 8am to 9pm', 54, 968);
    tooth(x);
  },

  /* -------- 2. Wedding invitation ----------------------------------- */
  invitation(x) {
    x.fillStyle = '#FDF8EE'; x.fillRect(0, 0, W, H);
    const wash = x.createLinearGradient(0, 0, W, H);
    wash.addColorStop(0, 'rgba(232,190,109,.18)'); wash.addColorStop(1, 'rgba(192,84,58,.1)');
    x.fillStyle = wash; x.fillRect(0, 0, W, H);

    x.strokeStyle = C.sand; x.lineWidth = 3; x.strokeRect(46, 46, W - 92, H - 92);
    x.strokeStyle = 'rgba(210,162,76,.45)'; x.lineWidth = 1.4; x.strokeRect(62, 62, W - 124, H - 124);

    x.textAlign = 'center';
    x.fillStyle = '#8A6B43'; x.font = `500 19px ${SANS}`;
    x.fillText('T O G E T H E R   W I T H   T H E I R   F A M I L I E S', W / 2, 190);

    x.fillStyle = '#7A2E2A'; x.font = `italic 400 112px ${DISPLAY}`;
    x.fillText('Arjun', W / 2, 348);
    x.fillStyle = C.sand; x.font = `italic 400 62px ${DISPLAY}`;
    x.fillText('&', W / 2, 428);
    x.fillStyle = '#7A2E2A'; x.font = `italic 400 112px ${DISPLAY}`;
    x.fillText('Meera', W / 2, 532);

    x.fillStyle = '#8A6B43'; x.font = `400 20px ${SANS}`;
    x.fillText('request the pleasure of your company', W / 2, 590);

    x.fillStyle = C.sand; x.fillRect(W / 2 - 58, 630, 116, 2);
    x.beginPath(); x.arc(W / 2, 631, 6, 0, 7); x.fill();

    x.fillStyle = '#7A2E2A'; x.font = `400 40px ${DISPLAY}`;
    x.fillText('Sunday, 14 February', W / 2, 702);
    x.fillStyle = '#8A6B43'; x.font = `400 21px ${SANS}`;
    x.fillText('Palace Grounds, Bengaluru', W / 2, 742);

    x.fillStyle = '#7A2E2A'; x.font = `500 34px ${KN}`;
    x.fillText('ಶುಭ ವಿವಾಹ', W / 2, 838);

    // corner florals
    [[120, 120, 1], [W - 120, 120, -1], [120, H - 120, 1], [W - 120, H - 120, -1]].forEach(([cx, cy, s]) => {
      for (let k = 0; k < 7; k++) {
        x.fillStyle = k % 2 ? 'rgba(210,162,76,.75)' : 'rgba(180,80,90,.5)';
        x.beginPath();
        x.ellipse(cx + Math.cos(k * 1.1) * 22 * s, cy + Math.sin(k * 1.1) * 22, 16, 7, k * 1.1, 0, 7);
        x.fill();
      }
      x.fillStyle = C.sand; x.beginPath(); x.arc(cx, cy, 6, 0, 7); x.fill();
    });
    x.textAlign = 'left';
    tooth(x, .025);
  },

  /* -------- 3. Brochure --------------------------------------------- */
  brochure(x) {
    x.fillStyle = C.paperLo; x.fillRect(0, 0, W, H);
    const pw = W / 3;

    // left panel
    x.fillStyle = C.paperHi; x.fillRect(0, 0, pw - 2, H);
    x.fillStyle = C.ink; x.font = `400 42px ${DISPLAY}`;
    x.fillText('Our', 26, 90); x.fillText('services', 26, 138);
    for (let i = 0; i < 5; i++) bar(x, 26, 180 + i * 28, 180 - i * 22, 10, C.edge);
    fillRR(x, 26, 352, pw - 54, 230, 16, lg(x, 26, 352, pw, 582, [C.sandHi, C.clay]));
    for (let i = 0; i < 4; i++) bar(x, 26, 626 + i * 26, 150 - i * 18, 9, C.edge);
    x.fillStyle = C.clay; x.font = `600 15px ${SANS}`;
    x.fillText('MAYASTUDIO.IN', 26, H - 42);

    // middle panel (cover)
    x.fillStyle = C.forest; x.fillRect(pw, 0, pw - 2, H);
    x.save(); x.translate(pw + pw / 2, 0);
    x.fillStyle = C.sand; x.beginPath(); x.arc(0, 270, 62, 0, 7); x.fill();
    x.fillStyle = C.forest; x.font = `400 70px ${DISPLAY}`; x.textAlign = 'center';
    x.fillText('M', 0, 296);
    x.fillStyle = C.paperHi; x.font = `400 56px ${DISPLAY}`;
    x.fillText('Maya', 0, 420);
    x.font = `italic 400 44px ${DISPLAY}`; x.fillStyle = C.sandHi;
    x.fillText('Studio', 0, 476);
    x.fillStyle = 'rgba(251,247,240,.55)'; x.font = `400 18px ${SANS}`;
    x.fillText('Design that gets', 0, 540);
    x.fillText('remembered.', 0, 566);
    x.strokeStyle = 'rgba(251,247,240,.3)'; x.lineWidth = 1.5;
    x.beginPath(); x.moveTo(-50, 616); x.lineTo(50, 616); x.stroke();
    x.fillStyle = 'rgba(251,247,240,.45)'; x.font = `500 15px ${SANS}`;
    x.fillText('B E N G A L U R U', 0, 662);
    x.textAlign = 'left'; x.restore();

    // right panel
    x.fillStyle = C.paperHi; x.fillRect(pw * 2, 0, pw, H);
    for (let i = 0; i < 4; i++) {
      const Y = 44 + i * 232;
      fillRR(x, pw * 2 + 26, Y, pw - 52, 200, 16, C.paper);
      fillRR(x, pw * 2 + 44, Y + 20, 54, 54, 14, [C.clay, C.forest, C.sand, C.clayLo][i]);
      bar(x, pw * 2 + 44, Y + 96, 140, 11, C.ink);
      bar(x, pw * 2 + 44, Y + 122, 174, 8, C.edge);
      bar(x, pw * 2 + 44, Y + 142, 120, 8, C.edge);
    }

    // fold shadows
    [pw, pw * 2].forEach((X) => {
      const s = x.createLinearGradient(X - 16, 0, X + 16, 0);
      s.addColorStop(0, 'rgba(0,0,0,0)'); s.addColorStop(.5, 'rgba(0,0,0,.14)'); s.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = s; x.fillRect(X - 16, 0, 32, H);
    });
    tooth(x);
  },

  /* -------- 4. Reel / video ----------------------------------------- */
  reel(x) {
    x.fillStyle = C.dark; x.fillRect(0, 0, W, H);
    const g = lg(x, 0, 0, W, H, ['#E0A34A', '#C0543A', '#6E2F38', '#241A18']);
    x.fillStyle = g; x.fillRect(0, 0, W, H);

    // soft light blobs
    [[200, 260, 190, 'rgba(232,190,109,.42)'], [560, 640, 230, 'rgba(192,84,58,.4)']].forEach(([cx, cy, r, c]) => {
      const rg = x.createRadialGradient(cx, cy, 0, cx, cy, r);
      rg.addColorStop(0, c); rg.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = rg; x.fillRect(cx - r, cy - r, r * 2, r * 2);
    });

    // top bar
    x.fillStyle = 'rgba(251,247,240,.92)'; x.beginPath(); x.arc(58, 60, 24, 0, 7); x.fill();
    x.fillStyle = C.clay; x.font = `700 20px ${SANS}`; x.textAlign = 'center';
    x.fillText('M', 58, 68); x.textAlign = 'left';
    x.fillStyle = '#fff'; x.font = `600 21px ${SANS}`;
    x.fillText('maya.studio', 94, 56);
    x.fillStyle = 'rgba(255,255,255,.72)'; x.font = `400 17px ${SANS}`;
    x.fillText('Original audio', 94, 80);

    // play button
    x.fillStyle = 'rgba(255,255,255,.18)';
    x.beginPath(); x.arc(W / 2, H / 2 - 40, 64, 0, 7); x.fill();
    x.strokeStyle = 'rgba(255,255,255,.5)'; x.lineWidth = 2; x.stroke();
    x.fillStyle = '#fff'; x.beginPath();
    x.moveTo(W / 2 - 20, H / 2 - 74); x.lineTo(W / 2 + 30, H / 2 - 40); x.lineTo(W / 2 - 20, H / 2 - 6);
    x.closePath(); x.fill();

    // caption
    x.fillStyle = '#fff'; x.font = `400 46px ${DISPLAY}`;
    x.fillText('Aarav & Diya', 48, 790);
    x.font = `italic 400 34px ${DISPLAY}`; x.fillStyle = 'rgba(255,255,255,.82)';
    x.fillText('the highlight film', 48, 836);
    x.fillStyle = 'rgba(255,255,255,.62)'; x.font = `400 18px ${SANS}`;
    x.fillText('#wedding  #bengaluru  #mayastudio', 48, 876);

    // scrubber
    x.fillStyle = 'rgba(255,255,255,.3)'; rr(x, 48, 930, W - 96, 5, 3); x.fill();
    x.fillStyle = '#fff'; rr(x, 48, 930, (W - 96) * .44, 5, 3); x.fill();
    x.beginPath(); x.arc(48 + (W - 96) * .44, 932, 9, 0, 7); x.fill();
    x.fillStyle = 'rgba(255,255,255,.7)'; x.font = `500 16px ${SANS}`;
    x.fillText('0:18', 48, 972); x.textAlign = 'right'; x.fillText('0:41', W - 48, 972); x.textAlign = 'left';
  },

  /* -------- 5. Logo & brand kit ------------------------------------- */
  logo(x) {
    x.fillStyle = C.paperHi; x.fillRect(0, 0, W, H);
    const cw = W / 2, ch = H / 2.4;

    // tile 1: mark on forest
    x.fillStyle = C.forest; x.fillRect(0, 0, cw - 2, ch - 2);
    x.strokeStyle = C.paperHi; x.lineWidth = 14;
    x.beginPath(); x.arc(cw / 2, ch / 2, 74, 0, 7); x.stroke();
    x.fillStyle = C.sand; x.beginPath(); x.arc(cw / 2, ch / 2, 24, 0, 7); x.fill();

    // tile 2: mark on sand
    x.fillStyle = C.sand; x.fillRect(cw, 0, cw, ch - 2);
    x.fillStyle = C.forest; x.beginPath();
    x.moveTo(cw + cw / 2 - 72, ch / 2 + 62); x.lineTo(cw + cw / 2, ch / 2 - 68);
    x.lineTo(cw + cw / 2 + 72, ch / 2 + 62); x.closePath(); x.fill();

    // tile 3: wordmark
    x.fillStyle = C.paperLo; x.fillRect(0, ch, cw - 2, ch - 2);
    x.fillStyle = C.ink; x.font = `italic 400 62px ${DISPLAY}`; x.textAlign = 'center';
    x.fillText('Kavya', cw / 2, ch + ch / 2 + 6);
    x.fillStyle = C.ink4; x.font = `500 15px ${SANS}`;
    x.fillText('B A K E H O U S E', cw / 2, ch + ch / 2 + 44);
    x.textAlign = 'left';

    // tile 4: swatches
    x.fillStyle = C.clay; x.fillRect(cw, ch, cw, ch - 2);
    const sw = [C.paperHi, C.sandHi, C.forest, C.dark];
    sw.forEach((c, i) => {
      fillRR(x, cw + cw / 2 - 78 + (i % 2) * 82, ch + ch / 2 - 78 + ((i / 2) | 0) * 82, 70, 70, 16, c);
    });

    // spec strip
    const Y = ch * 2;
    x.fillStyle = C.paperHi; x.fillRect(0, Y, W, H - Y);
    x.fillStyle = C.clay; x.font = `600 16px ${SANS}`;
    x.fillText('B R A N D   K I T', 44, Y + 54);
    x.fillStyle = C.ink; x.font = `400 40px ${DISPLAY}`;
    x.fillText('Aa Bb Cc', 44, Y + 116);
    x.font = `italic 400 34px ${DISPLAY}`; x.fillStyle = C.ink2;
    x.fillText('Fraunces  ·  Hanken Grotesk', 44, Y + 164);
    [C.clay, C.sand, C.forest, C.ink, C.paperLo].forEach((c, i) => {
      x.fillStyle = c; x.beginPath(); x.arc(64 + i * 62, Y + 222, 24, 0, 7); x.fill();
      if (c === C.paperLo) { x.strokeStyle = C.edge; x.lineWidth = 1.5; x.stroke(); }
    });
    tooth(x);
  },

  /* -------- 6. Online store ----------------------------------------- */
  store(x) {
    x.fillStyle = C.paper; x.fillRect(0, 0, W, H);

    // header
    x.fillStyle = C.paperHi; x.fillRect(0, 0, W, 112);
    x.fillStyle = C.ink; x.font = `italic 400 40px ${DISPLAY}`;
    x.fillText('Maya', 44, 70);
    fillRR(x, W - 196, 34, 152, 46, 23, C.forest);
    x.fillStyle = C.paperHi; x.font = `600 18px ${SANS}`; x.textAlign = 'center';
    x.fillText('Cart · 2', W - 120, 64); x.textAlign = 'left';
    x.fillStyle = C.edge; x.fillRect(0, 111, W, 1.5);

    // promo strip
    x.fillStyle = C.clay; x.fillRect(0, 112, W, 60);
    x.fillStyle = C.paperHi; x.font = `500 19px ${SANS}`; x.textAlign = 'center';
    x.fillText('Free delivery on orders above ₹999', W / 2, 150); x.textAlign = 'left';

    // product grid
    const grads = [
      [C.sandHi, '#C9803F'], ['#C9D8BE', C.forestHi],
      ['#EFB9A4', C.clayLo], [C.edge, '#A08A68'],
      [C.sandHi, C.clay], ['#D6C7AE', C.forest],
    ];
    const prices = ['₹2,499', '₹1,899', '₹3,250', '₹999', '₹1,450', '₹2,100'];
    for (let i = 0; i < 6; i++) {
      const col = i % 2, row = (i / 2) | 0;
      const X = 36 + col * 356, Y = 206 + row * 262;
      fillRR(x, X, Y, 332, 240, 20, C.paperHi);
      fillRR(x, X + 16, Y + 16, 300, 148, 14, lg(x, X, Y, X + 300, Y + 148, grads[i]));
      bar(x, X + 16, Y + 182, 148, 11, C.ink);
      x.fillStyle = C.ink; x.font = `600 22px ${SANS}`;
      x.fillText(prices[i], X + 16, Y + 226);
      // star rating
      x.fillStyle = C.sand;
      for (let s = 0; s < 5; s++) { x.beginPath(); x.arc(X + 200 + s * 22, Y + 218, 6, 0, 7); x.fill(); }
    }
    tooth(x);
  },
};

/* ---- build a canvas and hand back the element ---- */
export function paint(key) {
  const c = document.createElement('canvas');
  c.width = W; c.height = H;
  const x = c.getContext('2d');
  PAINTERS[key](x);
  return c;
}

export const CARDS = [
  { key: 'website',    label: 'Websites',    service: 'website',    tip: 'Business websites' },
  { key: 'invitation', label: 'Invitations', service: 'invitation', tip: 'Wedding invitations' },
  { key: 'brochure',   label: 'Brochures',   service: 'brochure',   tip: 'Brochures & menus' },
  { key: 'reel',       label: 'Video',       service: 'video',      tip: 'Reels & highlight films' },
  { key: 'logo',       label: 'Logos',       service: 'logo',       tip: 'Logos & brand kits' },
  { key: 'store',      label: 'Stores',      service: 'website',    tip: 'Online stores' },
];
