"use client";

import * as React from "react";

type P = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
  hue: number;
};

/**
 * Ambient ember field for the hero. Warm orange flakes drift upward over the
 * dark-green surface and scatter away from the cursor. Rendered on a canvas,
 * paused entirely when the user prefers reduced motion.
 */
export function ParticleField({ className }: { className?: string }) {
  const ref = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const cv: HTMLCanvasElement = canvas;
    const ctx = cv.getContext("2d")!;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: P[] = [];
    const pointer = { x: -9999, y: -9999, active: false };

    const colors = [
      [255, 206, 51], // yellow
      [255, 92, 156], // pink
      [255, 107, 53], // orange
      [253, 240, 211], // cream
    ];

    function resize() {
      const parent = cv.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(110, (w * h) / 14000));
      particles = Array.from({ length: count }, () => spawn(true));
    }

    function spawn(anywhere: boolean): P {
      const c = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * w,
        y: anywhere ? Math.random() * h : h + 10,
        r: 0.6 + Math.random() * 2.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(0.15 + Math.random() * 0.5),
        a: 0.15 + Math.random() * 0.5,
        hue: (c[0] << 16) | (c[1] << 8) | c[2],
      };
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        // cursor repulsion
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const d2 = dx * dx + dy * dy;
          const radius = 130;
          if (d2 < radius * radius) {
            const d = Math.sqrt(d2) || 1;
            const force = (1 - d / radius) * 1.6;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy = p.vy * 0.96 - 0.012; // keep a gentle upward drift

        if (p.y < -10 || p.x < -10 || p.x > w + 10) {
          Object.assign(p, spawn(false));
        }

        const r = (p.hue >> 16) & 255;
        const g = (p.hue >> 8) & 255;
        const b = p.hue & 255;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r},${g},${b},${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    let raf = 0;
    resize();

    if (reduce) {
      // single static frame, no animation
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onMove = (e: PointerEvent) => {
      const rect = cv.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={className}
    />
  );
}
