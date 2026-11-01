/* ==========================================================================
   make-video.mjs — renders the story film and its poster frame.

       npm run video

   Frames are drawn with @napi-rs/canvas and piped straight into ffmpeg as
   raw RGBA, so nothing hits the disk between the two. The soundtrack is a
   quiet pad synthesised here as well — no sample files to carry around.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createCanvas, GlobalFonts } from '@napi-rs/canvas';
import ffmpegPath from 'ffmpeg-static';
import { W, H, FPS, DURATION, SCENES, renderFrame, FONT_FILES } from './film.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'assets', 'video');
const OUT_MP4 = path.join(OUT_DIR, 'maya-story.mp4');
const OUT_JPG = path.join(OUT_DIR, 'maya-story-poster.jpg');
const TOTAL = DURATION * FPS;

/* ---- fonts ---- */
for (const [file, alias] of FONT_FILES) {
  const p = path.join(ROOT, 'assets', 'fonts', file);
  if (!GlobalFonts.registerFromPath(p, alias)) {
    console.error(`  ! could not register ${file}`);
    process.exit(1);
  }
}

/* ==========================================================================
   Soundtrack — a slow pad that changes with each chapter, plus a soft
   chime on the cut. Deliberately quiet: it sits under the picture.
   ========================================================================== */
const SR = 44100;
const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);

//                    chord voicings, one per scene
const CHORDS = [
  [53, 57, 60, 64, 67],  // Fmaj9      — curious
  [48, 52, 55, 59, 64],  // Cmaj7      — learning
  [50, 53, 57, 60, 62],  // Dm9        — the grind
  [46, 50, 53, 57, 60],  // Bbmaj7     — the spark
  [41, 53, 57, 60, 64],  // Fmaj7 low  — the leap
  [41, 53, 57, 60, 67],  // Fmaj9      — home
];

function makeAudio() {
  const n = Math.ceil(DURATION * SR);
  const L = new Float32Array(n), R = new Float32Array(n);

  SCENES.forEach((sc, i) => {
    const notes = CHORDS[i];
    const start = sc.at, end = sc.at + sc.dur;
    const fadeIn = 1.1, fadeOut = 1.4;

    for (let s = Math.floor(start * SR); s < Math.min(n, Math.ceil((end + 0.6) * SR)); s++) {
      const t = s / SR;
      const local = t - start;
      // slow swell in, slow swell out, so chords overlap at the cuts
      let env = Math.min(1, local / fadeIn) * Math.min(1, Math.max(0, (end + 0.5 - t) / fadeOut));
      if (env <= 0) continue;
      env *= 0.5 + 0.5 * Math.sin(local * 0.42);            // gentle breathing
      if (env <= 0) continue;

      let l = 0, r = 0;
      notes.forEach((m, k) => {
        const f = midi(m);
        const voice = 0.3 / (k + 1.6);
        // two slightly detuned partials make it feel like an instrument
        const a = Math.sin(2 * Math.PI * f * t + Math.sin(t * 0.7 + k) * 0.25);
        const b = Math.sin(2 * Math.PI * f * 1.0017 * t);
        const c = Math.sin(2 * Math.PI * f * 2 * t) * 0.14;  // a touch of octave
        const pan = 0.5 + 0.34 * Math.sin(k * 1.9);
        const v = (a * 0.62 + b * 0.38 + c) * voice * env;
        l += v * (1 - pan); r += v * pan;
      });
      L[s] += l; R[s] += r;
    }

    // chime on the cut
    const c0 = Math.floor(start * SR);
    const cf = midi(notes[notes.length - 1] + 12);
    for (let s = c0; s < Math.min(n, c0 + SR * 2.4); s++) {
      const d = (s - c0) / SR;
      const e = Math.exp(-d * 2.4) * 0.07;
      const v = (Math.sin(2 * Math.PI * cf * d) + Math.sin(2 * Math.PI * cf * 2.01 * d) * 0.3) * e;
      L[s] += v * 0.55; R[s] += v * 0.45;
    }
  });

  // master fade and a soft limiter
  for (let s = 0; s < n; s++) {
    const t = s / SR;
    const g = Math.min(1, t / 1.6) * Math.min(1, Math.max(0, (DURATION - t) / 2.2));
    L[s] = Math.tanh(L[s] * g * 1.15) * 0.76;
    R[s] = Math.tanh(R[s] * g * 1.15) * 0.76;
  }

  // 16-bit stereo WAV
  const data = Buffer.alloc(n * 4);
  for (let s = 0; s < n; s++) {
    data.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(L[s] * 32767))), s * 4);
    data.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(R[s] * 32767))), s * 4 + 2);
  }
  const head = Buffer.alloc(44);
  head.write('RIFF', 0); head.writeUInt32LE(36 + data.length, 4); head.write('WAVE', 8);
  head.write('fmt ', 12); head.writeUInt32LE(16, 16); head.writeUInt16LE(1, 20);
  head.writeUInt16LE(2, 22); head.writeUInt32LE(SR, 24); head.writeUInt32LE(SR * 4, 28);
  head.writeUInt16LE(4, 32); head.writeUInt16LE(16, 34);
  head.write('data', 36); head.writeUInt32LE(data.length, 40);
  return Buffer.concat([head, data]);
}

/* ==========================================================================
   Render
   ========================================================================== */
async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log(`\n  Maya story film — ${W}x${H}, ${FPS}fps, ${DURATION}s (${TOTAL} frames)\n`);

  process.stdout.write('  · soundtrack … ');
  const wav = path.join(os.tmpdir(), `maya-score-${process.pid}.wav`);
  fs.writeFileSync(wav, makeAudio());
  console.log('done');

  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');

  // poster: a still from the opening, before anything has been explained
  process.stdout.write('  · poster … ');
  ctx.clearRect(0, 0, W, H);
  renderFrame(ctx, Math.round(5.0 * FPS));
  fs.writeFileSync(OUT_JPG, await canvas.encode('jpeg', 86));
  console.log(path.relative(ROOT, OUT_JPG));

  const args = [
    '-y',
    '-f', 'rawvideo', '-pixel_format', 'rgba',
    '-video_size', `${W}x${H}`, '-framerate', String(FPS),
    '-i', 'pipe:0',
    '-i', wav,
    '-map', '0:v:0', '-map', '1:a:0',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '23',
    '-pix_fmt', 'yuv420p', '-profile:v', 'high', '-level', '4.0',
    '-movflags', '+faststart',
    '-c:a', 'aac', '-b:a', '112k',
    '-shortest',
    OUT_MP4,
  ];

  const ff = spawn(ffmpegPath, args, { stdio: ['pipe', 'ignore', 'pipe'] });
  let ffErr = '';
  ff.stderr.on('data', (d) => { ffErr += d.toString(); if (ffErr.length > 8000) ffErr = ffErr.slice(-4000); });

  const done = new Promise((resolve, reject) => {
    ff.on('error', reject);
    ff.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited ${code}\n${ffErr}`))));
  });

  const write = (buf) => new Promise((resolve, reject) => {
    if (ff.stdin.write(buf)) return resolve();
    ff.stdin.once('drain', resolve);
    ff.stdin.once('error', reject);
  });

  const t0 = Date.now();
  for (let f = 0; f < TOTAL; f++) {
    ctx.clearRect(0, 0, W, H);
    renderFrame(ctx, f);
    const img = ctx.getImageData(0, 0, W, H).data;
    await write(Buffer.from(img.buffer, img.byteOffset, img.byteLength));
    if (f % 60 === 0 || f === TOTAL - 1) {
      const pct = Math.round(((f + 1) / TOTAL) * 100);
      process.stdout.write(`\r  · frames … ${String(pct).padStart(3)}%  (${f + 1}/${TOTAL})`);
    }
  }
  ff.stdin.end();
  console.log('');

  process.stdout.write('  · encoding … ');
  await done;
  fs.unlinkSync(wav);

  const kb = (fs.statSync(OUT_MP4).size / 1024 / 1024).toFixed(2);
  console.log(`done\n\n  ${path.relative(ROOT, OUT_MP4)} — ${kb} MB in ${((Date.now() - t0) / 1000).toFixed(1)}s\n`);
}

main().catch((err) => { console.error('\n', err); process.exit(1); });
