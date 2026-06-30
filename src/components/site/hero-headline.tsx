"use client";

import * as React from "react";

/**
 * Cursor-reactive hero headline. Each letter near the pointer gets heavier
 * (variable `wght`) and slightly stretched. Falls back to a static bold
 * headline when reduced motion is requested.
 *
 * Segments are split into words (keep wrapping) → characters (animated).
 */
const SEGMENTS: { text: string; highlight?: boolean; trailingSpace?: boolean }[] =
  [
    { text: "Imagine waking up to", trailingSpace: true },
    { text: "qualified leads,", highlight: true },
    { text: " every day." },
  ];

function Chars({ text }: { text: string }) {
  // split keeping spaces so words wrap but never break mid-word
  const parts = text.split(/(\s+)/).filter(Boolean);
  return (
    <>
      {parts.map((part, pi) => {
        if (/^\s+$/.test(part)) return <span key={pi}> </span>;
        return (
          <span key={pi} className="inline-block whitespace-nowrap">
            {Array.from(part).map((ch, ci) => (
              <span
                key={ci}
                data-k
                className="inline-block will-change-transform [transition:font-variation-settings_180ms_ease,transform_180ms_ease]"
                style={{ transformOrigin: "center bottom" }}
              >
                {ch}
              </span>
            ))}
          </span>
        );
      })}
    </>
  );
}

export function HeroHeadline({ className }: { className?: string }) {
  const ref = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const chars = Array.from(el.querySelectorAll<HTMLElement>("[data-k]"));
    const pointer = { x: -9999, y: -9999, active: false };
    let raf = 0;

    const frame = () => {
      // batch reads, then writes (avoid layout thrash)
      const rects = chars.map((c) => c.getBoundingClientRect());
      const radius = 180;
      for (let i = 0; i < chars.length; i++) {
        const r = rects[i];
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const d = Math.hypot(pointer.x - cx, pointer.y - cy);
        const infl = pointer.active ? Math.max(0, 1 - d / radius) : 0;
        const w = Math.round(640 + infl * 260); // 640 → 900
        const wdth = Math.round(100 + infl * 25); // 100 → 125 (real width axis)
        const sx = (1 + infl * 0.06).toFixed(3); // tiny extra stretch
        chars[i].style.fontVariationSettings = `"wght" ${w}, "wdth" ${wdth}`;
        chars[i].style.transform = `scaleX(${sx})`;
      }
      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };

    window.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {SEGMENTS.map((seg, i) => {
        const inner = <Chars text={seg.text} />;
        const node = seg.highlight ? (
          <span key={i} className="plot whitespace-nowrap text-brass">
            {inner}
          </span>
        ) : (
          <span key={i}>{inner}</span>
        );
        return (
          <React.Fragment key={i}>
            {node}
            {seg.trailingSpace ? <span> </span> : null}
          </React.Fragment>
        );
      })}
    </h1>
  );
}
