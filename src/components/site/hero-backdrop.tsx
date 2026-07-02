"use client";

import * as React from "react";

import { asset } from "@/lib/asset";

/**
 * Hero backdrop image. Very slowly zooms in (Ken Burns), and as the visitor
 * scrolls down the hero it darkens to black and fades out — sitting behind
 * the blue tint. Reduced motion: the zoom is disabled globally; the fade is
 * a passive scroll response so it stays gentle.
 */
export function HeroBackdrop() {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const blackRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let raf = 0;
    const update = () => {
      const fadeOver = window.innerHeight * 0.85;
      const p = Math.min(1, Math.max(0, window.scrollY / fadeOver));
      if (imgRef.current) imgRef.current.style.opacity = String(1 - p);
      if (blackRef.current) blackRef.current.style.opacity = String(p);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={asset("/hero-bg.jpg")}
        alt=""
        className="kenburns h-full w-full object-cover"
        style={{ willChange: "opacity, transform" }}
      />
      <div
        ref={blackRef}
        className="absolute inset-0 bg-black"
        style={{ opacity: 0 }}
      />
    </div>
  );
}
