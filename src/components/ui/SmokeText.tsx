"use client";

import { useRef, useEffect, useCallback } from "react";
import { type MotionValue, useMotionValueEvent } from "framer-motion";

// ── Deterministic Perlin Noise ─────────────────────────────────────

const PERM = (() => {
  const p = new Uint8Array(512);
  const a = Array.from({ length: 256 }, (_, i) => i);
  let s = 42;
  const rng = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  for (let i = 0; i < 256; i++) p[i] = p[i + 256] = a[i];
  return p;
})();

function fade(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(a: number, b: number, t: number) {
  return a + t * (b - a);
}
function grad(h: number, x: number, y: number) {
  const k = h & 3;
  return ((k & 1) === 0 ? x : -x) + ((k & 2) === 0 ? y : -y);
}

function perlin(x: number, y: number): number {
  const xi = Math.floor(x) & 255;
  const yi = Math.floor(y) & 255;
  const xf = x - Math.floor(x);
  const yf = y - Math.floor(y);
  const u = fade(xf);
  const v = fade(yf);
  const aa = PERM[PERM[xi] + yi];
  const ab = PERM[PERM[xi] + yi + 1];
  const ba = PERM[PERM[xi + 1] + yi];
  const bb = PERM[PERM[xi + 1] + yi + 1];
  return lerp(
    lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u),
    lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u),
    v
  );
}

/** Fractal Brownian Motion — 4 octaves for rich turbulence */
function fbm(x: number, y: number): number {
  return (
    perlin(x, y) * 0.5 +
    perlin(x * 2, y * 2) * 0.25 +
    perlin(x * 4, y * 4) * 0.15 +
    perlin(x * 8, y * 8) * 0.1
  );
}

// ── Soft smoke sprite — very diffuse, Gaussian-like ────────────────
// Semi-transparent center so overlapping particles create smooth density

function createSprite(size: number): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const r = size / 2;
  const g = ctx.createRadialGradient(r, r, 0, r, r, r);
  g.addColorStop(0, "rgba(237, 240, 242, 0.55)");
  g.addColorStop(0.15, "rgba(237, 240, 242, 0.4)");
  g.addColorStop(0.3, "rgba(237, 240, 242, 0.25)");
  g.addColorStop(0.5, "rgba(237, 240, 242, 0.1)");
  g.addColorStop(0.7, "rgba(237, 240, 242, 0.03)");
  g.addColorStop(1, "rgba(237, 240, 242, 0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return c;
}

// ── Types ──────────────────────────────────────────────────────────

interface Particle {
  ox: number;
  oy: number;
  delay: number;
  seed: number;
  strength: number;
}

interface State {
  particles: Particle[];
  sprite: HTMLCanvasElement;
  font: string;
  textX: number;
  textY: number;
  w: number;
  h: number;
  pad: number;
  fontSize: number;
  baseSize: number;
  dpr: number;
}

interface SmokeTextProps {
  text: string;
  progress: MotionValue<number>;
}

export default function SmokeText({ text, progress }: SmokeTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<State | null>(null);

  // ── Draw: particles first (back), then text on top (front) ───────
  // Text stays sharp until it fades; particles only need to be smoke.

  const draw = useCallback(
    (v: number) => {
      const state = stateRef.current;
      const canvas = canvasRef.current;
      if (!state || !canvas) return;

      const ctx = canvas.getContext("2d")!;
      const {
        particles,
        sprite,
        font,
        textX,
        textY,
        w,
        h,
        fontSize,
        baseSize,
        dpr,
      } = state;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Pure text, no scroll yet
      if (v < 0.003) {
        ctx.font = font;
        ctx.fillStyle = "#EDF0F2";
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        ctx.fillText(text, textX, textY);
        return;
      }

      // ── BACK LAYER: Smoke particles ──────────────────────────────

      for (let i = 0; i < particles.length; i++) {
        const pt = particles[i];

        const lp = Math.max(
          0,
          Math.min((v - pt.delay) / (1 - pt.delay), 1)
        );
        // Cubic ease-in: barely moves at first, then accelerates
        const e = lp * lp * lp;

        // Skip particles that haven't started or are fully gone
        if (e <= 0.001) continue;
        if (e > 0.98) continue;

        // Turbulence: FBM noise creates coherent swirling wisps
        const freq = 0.005;
        const turbX =
          fbm(pt.ox * freq + pt.seed, pt.oy * freq + 31.7) *
          300 *
          e *
          pt.strength;
        const turbY =
          fbm(pt.ox * freq + 173.2, pt.oy * freq + pt.seed) *
          200 *
          e *
          pt.strength;

        // Upward drift — thermal buoyancy
        const drift = -fontSize * 1.6 * e * pt.strength;

        // Lateral spread
        const spread = fbm(pt.seed * 0.05, pt.seed * 0.08) * 130 * e;

        const x = pt.ox + turbX + spread;
        const y = pt.oy + turbY + drift;

        // Size grows dramatically — large soft clouds, not dots
        const sz = baseSize * (1 + e * 12);

        // Smooth opacity fade with soft tail
        const alpha = Math.pow(1 - e, 1.6);

        ctx.globalAlpha = alpha;
        ctx.drawImage(sprite, x - sz, y - sz, sz * 2, sz * 2);
      }

      // ── FRONT LAYER: Crisp text, fading out ─────────────────────
      // Text covers particles while visible → clean transition

      if (v < 0.35) {
        const t = Math.min(v / 0.35, 1);
        // Ease-out fade: sharp at first, then releases into smoke
        const textAlpha = Math.pow(1 - t, 2);

        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = textAlpha;
        ctx.font = font;
        ctx.fillStyle = "#EDF0F2";
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        ctx.fillText(text, textX, textY);
      }

      ctx.globalAlpha = 1;
    },
    [text]
  );

  // ── Init & resize ────────────────────────────────────────────────

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function init() {
      const dpr = window.devicePixelRatio || 1;
      const vw = window.innerWidth;
      const fontSize = Math.min(Math.max(52, vw * 0.104), 166.4);
      const font = `bold ${fontSize}px "Space Grotesk Variable", sans-serif`;

      const tmp = document.createElement("canvas");
      const tctx = tmp.getContext("2d")!;
      tctx.font = font;
      const metrics = tctx.measureText(text);
      const textW = metrics.width;
      const textH = fontSize * 1.15;

      // Generous padding for smoke drift
      const pad = fontSize * 2.5;
      const w = textW + pad * 2;
      const h = textH + pad * 2;

      canvas!.width = Math.ceil(w * dpr);
      canvas!.height = Math.ceil(h * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      canvas!.style.margin = `${-pad}px`;
      canvas!.style.filter = "none";

      const textX = w / 2;
      const textY = pad + fontSize * 0.85;

      // Render text offscreen for pixel sampling
      tmp.width = Math.ceil(w);
      tmp.height = Math.ceil(h);
      tctx.font = font;
      tctx.fillStyle = "#fff";
      tctx.textAlign = "center";
      tctx.textBaseline = "alphabetic";
      tctx.fillText(text, textX, textY);

      const imgData = tctx.getImageData(0, 0, tmp.width, tmp.height);
      const px = imgData.data;
      const gap = Math.max(2, Math.round(fontSize / 50));
      const candidates: { x: number; y: number }[] = [];

      for (let y = 0; y < tmp.height; y += gap) {
        for (let x = 0; x < tmp.width; x += gap) {
          if (px[(y * tmp.width + x) * 4 + 3] > 80) {
            candidates.push({ x, y });
          }
        }
      }

      const maxParticles = 5000;
      let s = 137;
      const rng = () => {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
      };

      if (candidates.length > maxParticles) {
        for (let i = candidates.length - 1; i > 0; i--) {
          const j = Math.floor(rng() * (i + 1));
          [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
        }
        candidates.length = maxParticles;
      }

      // Spatially coherent delays — nearby particles dissolve together
      // creating organic "patches" like real smoke breaking apart
      const particles: Particle[] = candidates.map(({ x, y }) => ({
        ox: x,
        oy: y,
        delay: Math.abs(fbm(x * 0.008, y * 0.008)) * 0.15 + rng() * 0.04,
        seed: rng() * 999,
        strength: 0.5 + rng() * 1.0,
      }));

      const sprite = createSprite(64);
      const baseSize = Math.max(3, fontSize / 30);

      stateRef.current = {
        particles,
        sprite,
        font,
        textX,
        textY,
        w,
        h,
        pad,
        fontSize,
        baseSize,
        dpr,
      };

      draw(progress.get());
    }

    init();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, [text, progress, draw]);

  useMotionValueEvent(progress, "change", draw);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none"
      role="img"
      aria-label={text}
    />
  );
}
