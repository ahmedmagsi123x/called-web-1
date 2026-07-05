"use client";

import * as React from "react";

import { Reveal } from "@/components/site/reveal";

/**
 * White statement band: bold black copy that reveals line by line, a
 * chartreuse bar on the page edge, and a red vertical line that draws
 * from top to bottom as the visitor scrolls through the section.
 */
export function StatementBand() {
  const ref = React.useRef<HTMLElement>(null);
  const lineRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      const line = lineRef.current;
      if (el && line) {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 when the section enters, 1 when its bottom nears the viewport top
        const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height * 0.6)));
        line.style.transform = `scaleY(${p})`;
      }
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

  const lines = [
    <>WE&apos;RE A FULL-SERVICE BRANDING AGENCY</>,
    <>
      HELPING REAL ESTATE OPERATORS{" "}
      <span className="text-royal">STRENGTHEN THEIR REPUTATION,</span>
    </>,
    <>
      <span className="text-ribbon">EXPAND THEIR INFLUENCE</span> AND
    </>,
    <>GROW THEIR BUSINESS.</>,
  ];

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#faf8f2]">
      {/* chartreuse edge bar */}
      <div
        className="absolute left-0 top-0 h-full w-2.5 bg-chartreuse sm:w-3.5"
        aria-hidden
      />
      {/* vertical brand label */}
      <span
        className="coord absolute left-5 top-1/2 hidden -translate-y-1/2 rotate-180 !text-[0.6rem] !text-black/40 sm:block"
        style={{ writingMode: "vertical-rl" }}
        aria-hidden
      >
        MERIDIAN.MEDIA
      </span>
      {/* red line drawing top -> bottom */}
      <div
        ref={lineRef}
        className="absolute right-8 top-0 h-full w-1.5 origin-top bg-ribbon sm:right-14"
        style={{ transform: "scaleY(0)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-8 py-20 sm:px-14 lg:py-28">
        <div className="font-heading text-[clamp(1.35rem,3.4vw,2.6rem)] font-extrabold uppercase leading-[1.18] tracking-tight text-[#121212]">
          {lines.map((l, i) => (
            <Reveal key={i} delay={i * 110} as="div">
              {l}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
