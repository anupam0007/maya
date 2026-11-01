/* ==========================================================================
   hero3d.js — the hero scene.

   A slow-turning carousel of the six things the studio actually makes.
   Every card is readable, every card is hoverable, every card is a door
   into the booking form. Warm studio light, paper background showing
   through — no dark void, no abstract particles you can't act on.
   ========================================================================== */
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { paint, CARDS, C } from './textures.js';

const CARD_W = 2.25, CARD_H = 3.0, RADIUS = 3.05;

export function createHero({ canvas, tipEl, reduce, onPick }) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.1, 9.2);

  /* ---- light: a warm room, so the cards look printed, not plastic ---- */
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const key = new THREE.DirectionalLight(0xfff1dc, 1.5);
  key.position.set(3.4, 4.2, 5.2);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0xd2a24c, 0.55);
  rim.position.set(-4, 1.4, -3);
  scene.add(rim);
  scene.add(new THREE.AmbientLight(0xffffff, 0.3));

  /* ---- the ring of cards ---- */
  const root = new THREE.Group();
  const ring = new THREE.Group();
  root.add(ring);
  scene.add(root);

  const geo = new RoundedBoxGeometry(CARD_W, CARD_H, 0.1, 6, 0.055);
  const edgeMat = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(C.paperLo), roughness: 0.78, metalness: 0 });
  const backMat = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(C.paper), roughness: 0.82, metalness: 0 });

  const cards = CARDS.map((def, i) => {
    const tex = new THREE.CanvasTexture(paint(def.key));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());

    const face = new THREE.MeshPhysicalMaterial({
      map: tex, roughness: 0.46, metalness: 0,
      clearcoat: 0.5, clearcoatRoughness: 0.34,
    });

    const mesh = new THREE.Mesh(geo, [edgeMat, edgeMat, edgeMat, edgeMat, face, backMat]);
    const a = (i / CARDS.length) * Math.PI * 2;
    mesh.position.set(Math.sin(a) * RADIUS, 0, Math.cos(a) * RADIUS);
    mesh.rotation.y = a;
    mesh.userData = { def, a, seed: i * 1.37, hover: 0 };
    ring.add(mesh);
    return mesh;
  });

  /* ---- soft contact shadow under the ring ---- */
  const shadowTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 256;
    const g = c.getContext('2d').createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, 'rgba(90,60,35,.5)'); g.addColorStop(.55, 'rgba(90,60,35,.16)'); g.addColorStop(1, 'rgba(90,60,35,0)');
    const x = c.getContext('2d'); x.fillStyle = g; x.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  })();
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(RADIUS * 3.2, RADIUS * 3.2),
    new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = -CARD_H / 2 - 0.42;
  root.add(shadow);

  /* ---- a handful of gold motes, not a starfield ---- */
  const MOTES = 70;
  const mp = new Float32Array(MOTES * 3);
  for (let i = 0; i < MOTES; i++) {
    const r = 4.2 + Math.random() * 3.4, th = Math.random() * Math.PI * 2;
    mp.set([Math.cos(th) * r, (Math.random() - 0.5) * 6, Math.sin(th) * r - 1], i * 3);
  }
  const moteGeo = new THREE.BufferGeometry();
  moteGeo.setAttribute('position', new THREE.BufferAttribute(mp, 3));
  const moteTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.35, 'rgba(232,190,109,.75)'); g.addColorStop(1, 'rgba(232,190,109,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  })();
  const motes = new THREE.Points(moteGeo, new THREE.PointsMaterial({
    size: 0.1, map: moteTex, transparent: true, depthWrite: false, opacity: 0.75, color: 0xd2a24c,
  }));
  scene.add(motes);

  /* ---- responsive placement ------------------------------------------ */
  const layout = { x: 0, y: 0, s: 1 };
  function setLayout() {
    const w = innerWidth, h = innerHeight;
    camera.aspect = w / h; camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    if (w > 1440)      { layout.x =  2.95; layout.y = -0.15; layout.s = 0.86; }
    else if (w > 1280) { layout.x =  2.75; layout.y = -0.15; layout.s = 0.80; }
    else if (w > 1024) { layout.x =  2.45; layout.y = -0.12; layout.s = 0.70; }
    else if (w > 820)  { layout.x =  2.10; layout.y = -0.10; layout.s = 0.60; }
    // narrow screens: the ring sits above the headline rather than behind it
    else if (w > 600)  { layout.x =  0;    layout.y =  2.05; layout.s = 0.50; }
    else               { layout.x =  0;    layout.y =  2.35; layout.s = 0.42; }
  }
  setLayout();
  addEventListener('resize', setLayout);

  /* ---- interaction ---------------------------------------------------- */
  const state = {
    spin: 0,            // current ring rotation
    vel: 0,             // drag inertia
    auto: reduce ? 0 : 0.0016,
    drag: null,         // {x, spin, moved}
    px: 0, py: 0,       // smoothed pointer
    tx: 0, ty: 0,       // target pointer
    hovered: null,
    progress: 0,        // hero scroll progress
    intro: reduce ? 1 : 0,
    active: true,
  };

  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let pointerInside = false;

  function setCursor(kind) {
    document.body.style.cursor = kind;
    const cur = document.getElementById('cursor');
    if (cur) cur.classList.toggle('is-drag', kind === 'grabbing');
  }

  canvas.addEventListener('pointerdown', (e) => {
    if (state.progress > 0.5) return;
    state.drag = { x: e.clientX, spin: state.spin, moved: 0 };
    canvas.setPointerCapture(e.pointerId);
    setCursor('grabbing');
  });

  canvas.addEventListener('pointermove', (e) => {
    state.tx = (e.clientX / innerWidth) * 2 - 1;
    state.ty = (e.clientY / innerHeight) * 2 - 1;
    ndc.x = state.tx; ndc.y = -state.ty;
    pointerInside = true;

    if (state.drag) {
      const dx = e.clientX - state.drag.x;
      state.drag.moved = Math.max(state.drag.moved, Math.abs(dx));
      const next = state.drag.spin + dx * 0.0062;
      state.vel = next - state.spin;
      state.spin = next;
    }
  });

  function endDrag(e) {
    if (!state.drag) return;
    const wasClick = state.drag.moved < 5;
    state.drag = null;
    setCursor(state.hovered ? 'pointer' : '');
    if (wasClick && state.hovered) onPick(state.hovered.userData.def);
  }
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);
  canvas.addEventListener('pointerleave', () => {
    pointerInside = false; state.hovered = null;
    tipEl.classList.remove('is-on'); setCursor('');
  });

  /* keyboard access to the same six doors lives in the page markup;
     the canvas itself stays aria-hidden. */

  /* ---- hover test ----------------------------------------------------- */
  function pickUnderPointer() {
    if (!pointerInside || state.drag || state.progress > 0.35) return null;
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(cards, false)[0];
    return hit ? hit.object : null;
  }

  const tipPos = new THREE.Vector3();
  function updateTip(mesh) {
    if (!mesh) { tipEl.classList.remove('is-on'); return; }
    const p = mesh.getWorldPosition(tipPos).project(camera);
    tipEl.style.left = `${(p.x * 0.5 + 0.5) * innerWidth}px`;
    tipEl.style.top = `${(-p.y * 0.5 + 0.5) * innerHeight - 70}px`;
    tipEl.innerHTML = `${mesh.userData.def.tip} <b>· book a call</b>`;
    tipEl.classList.add('is-on');
  }

  /* ---- frame ---------------------------------------------------------- */
  const clock = new THREE.Clock();
  function render() {
    if (!state.active) return;
    const t = clock.getElapsedTime();

    // pointer easing
    state.px += (state.tx - state.px) * 0.055;
    state.py += (state.ty - state.py) * 0.055;

    // hover
    const hit = pickUnderPointer();
    if (hit !== state.hovered) {
      state.hovered = hit;
      if (!state.drag) setCursor(hit ? 'pointer' : '');
    }
    updateTip(state.hovered);

    // spin: drag inertia, then idle drift — slower while a card is hovered
    if (!state.drag) {
      state.spin += state.vel;
      state.vel *= 0.94;
      state.spin += state.auto * (state.hovered ? 0.18 : 1);
    }
    ring.rotation.y = state.spin + state.px * 0.3;

    // group placement, intro and scroll drift
    const iv = state.intro, p = state.progress;
    root.position.set(layout.x, layout.y + p * 2.3, 0);
    root.scale.setScalar(layout.s * (0.72 + 0.28 * iv) * (1 - p * 0.12));
    root.rotation.x = -0.075 + state.py * 0.1 + p * 0.22;

    // per-card float + hover lift
    cards.forEach((m) => {
      const u = m.userData;
      const want = m === state.hovered ? 1 : 0;
      u.hover += (want - u.hover) * 0.14;
      const out = 1 + u.hover * 0.1;
      const bob = Math.sin(t * 0.7 + u.seed) * 0.07 * (1 - u.hover);
      m.position.set(Math.sin(u.a) * RADIUS * out, bob + u.hover * 0.18, Math.cos(u.a) * RADIUS * out);
      m.rotation.z = Math.sin(t * 0.5 + u.seed) * 0.016;
      m.scale.setScalar(1 + u.hover * 0.045);
    });

    shadow.material.opacity = 0.85 * iv * (1 - p);
    motes.rotation.y = t * 0.014;
    motes.material.opacity = 0.7 * iv * (1 - p * 1.4);
    camera.position.z = 9.2 - iv * 0.35;

    renderer.render(scene, camera);
  }

  return {
    render,
    state,
    setProgress(v) {
      state.progress = v;
      const vis = v < 0.98;
      if (vis !== state.active) {
        state.active = vis;
        canvas.style.visibility = vis ? '' : 'hidden';
      }
      // once the hero is gone, stop eating pointer events
      canvas.style.pointerEvents = v > 0.5 ? 'none' : '';
    },
    introTo(v) { state.intro = v; },
    dispose() {
      cards.forEach((m) => m.material.forEach((mt) => { mt.map && mt.map.dispose(); mt.dispose(); }));
      geo.dispose(); renderer.dispose(); pmrem.dispose();
    },
  };
}
