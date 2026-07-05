"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

type Step = {
  no: string;
  title: string;
  hook: string;
  body: string[];
  img: string;
  bar: string;
};

const steps: Step[] = [
  {
    no: "01",
    title: "Research",
    hook: "We don't guess. We dig.",
    body: [
      "Every engagement starts with a forensic read of your market: who your buyers and sellers actually are, what makes them trust an operator, where their attention lives, and exactly where your competitors are invisible.",
      "We leave this phase with the one thing most agencies never find — the specific gap in your market that your expertise is supposed to fill.",
    ],
    img: "/services/strategy.png",
    bar: "#d8e21f",
  },
  {
    no: "02",
    title: "Strategizing",
    hook: "A plan built to win attention — and keep it.",
    body: [
      "Insight becomes positioning, a content engine, and a 90-day roadmap with a single job: make you the most recognizable, most trusted operator in your market.",
      "Every platform, every format, every hook is chosen on purpose. Nothing random, nothing wasted — just a system pointed at booked calls.",
    ],
    img: "/services/paid-ads.png",
    bar: "#2b3fd6",
  },
  {
    no: "03",
    title: "Production",
    hook: "Studio polish. Operator speed.",
    body: [
      "Scripts, shoots, edits, thumbnails, captions — produced to a standard that makes every deal look premium and every video feel inevitable.",
      "You show up once. We turn it into weeks of content that compounds across every platform while you stay in your zone: closing.",
    ],
    img: "/services/production.png",
    bar: "#b5342a",
  },
];

/**
 * OUR PROCESS — three stacked steps. The step nearest the viewport centre
 * (or under the cursor) is full colour and "live"; the rest sit grayed,
 * driving focus as the visitor scrolls.
 */
export function ProcessShowcase() {
  const [active, setActive] = React.useState(0);
  const [hovered, setHovered] = React.useState<number | null>(null);
  const refs = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.step);
            setActive(idx);
          }
        }
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const live = hovered ?? active;

  return (
    <section id="process" className="scroll-mt-24 bg-[#e6e5e0]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="head-italic text-[clamp(2.4rem,6vw,4.5rem)] text-[#101c14]">
          Our Process
        </h2>
        <div className="mt-3 h-px w-full bg-black/25" aria-hidden />

        <div className="mt-6 flex flex-col">
          {steps.map((s, i) => (
            <div
              key={s.no}
              data-step={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "grid items-center gap-8 border-b border-black/10 py-14 last:border-b-0 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14",
                live === i ? "step-live" : "step-dim",
              )}
            >
              {/* copy */}
              <div>
                <span className="coord !text-[#5c5a50]">
                  STEP {s.no} — OUR PROCESS
                </span>
                <h3 className="font-heading mt-3 text-4xl font-extrabold uppercase tracking-tight text-[#17251b] sm:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-lg font-semibold text-[#17251b]">
                  {s.hook}
                </p>
                {s.body.map((p, j) => (
                  <p
                    key={j}
                    className="mt-3 max-w-xl leading-relaxed text-[#4c4a42]"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* 3D art over colour bar */}
              <div className="relative mx-auto flex h-64 w-full max-w-sm items-center justify-center sm:h-72">
                <div
                  className="absolute left-1/2 top-1/2 h-24 w-[112%] -translate-x-1/2 -translate-y-1/2 sm:h-28"
                  style={{ backgroundColor: s.bar }}
                  aria-hidden
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(s.img)}
                  alt={`${s.title} illustration`}
                  className="floaty relative h-56 w-auto drop-shadow-[0_24px_45px_rgba(20,20,30,0.35)] sm:h-64"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
