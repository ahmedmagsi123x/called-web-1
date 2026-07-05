"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Megaphone,
  Heart,
  ThumbsUp,
  User,
  Play,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { asset } from "@/lib/asset";

/* Floating icon chips around the person — gentle float + cursor parallax. */
const chips = [
  { Icon: User, color: "#e2814d", x: "88%", y: "8%", s: 1.0, k: 26, d: 0 },
  { Icon: Megaphone, color: "#7d6bf0", x: "2%", y: "6%", s: 1.15, k: -34, d: 0.8 },
  { Icon: User, color: "#3aa981", x: "-4%", y: "62%", s: 1.05, k: 30, d: 1.6 },
  { Icon: Heart, color: "#e8468f", x: "92%", y: "48%", s: 0.9, k: -22, d: 0.4 },
  { Icon: ThumbsUp, color: "#2b3fd6", x: "6%", y: "88%", s: 0.85, k: 20, d: 2.2 },
  { Icon: Play, color: "#f5b31a", x: "86%", y: "82%", s: 0.95, k: -28, d: 1.2 },
];

export function HeroStage() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const fadeRef = React.useRef<HTMLDivElement>(null);
  const chipsRef = React.useRef<HTMLDivElement>(null);
  const [personOk, setPersonOk] = React.useState(true);

  /* Hero fades + drifts up as the visitor scrolls past it. */
  React.useEffect(() => {
    let raf = 0;
    const update = () => {
      const h = window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / (h * 0.9)));
      if (fadeRef.current) {
        fadeRef.current.style.opacity = String(1 - p * 1.05);
        fadeRef.current.style.transform = `translateY(${p * -46}px)`;
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

  /* Cursor parallax for the floating chips. */
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = chipsRef.current;
    const root = rootRef.current;
    if (!el || !root) return;
    const nodes = Array.from(el.querySelectorAll<HTMLElement>("[data-chip]"));
    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      for (const n of nodes) {
        const k = Number(n.dataset.k || 20);
        n.style.transform = `translate(${nx * k}px, ${ny * k}px)`;
      }
    };
    root.addEventListener("pointermove", onMove);
    return () => root.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      {/* ---- backdrop: duotone mountain, slow zoom ---- */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/hero-duotone.jpg")}
          alt=""
          className="kenburns h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b1a08]/35 via-transparent to-[#160f52]/70" />
      </div>

      {/* ---- red ribbon: draws in above the text, dives behind the person,
              fading + blurring as it goes ---- */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 860"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient
            id="ribbon-fade"
            gradientUnits="userSpaceOnUse"
            x1="180"
            y1="80"
            x2="1150"
            y2="760"
          >
            <stop offset="0" stopColor="#c23a2b" stopOpacity="0.95" />
            <stop offset="0.55" stopColor="#b5342a" stopOpacity="0.85" />
            <stop offset="0.85" stopColor="#b5342a" stopOpacity="0.35" />
            <stop offset="1" stopColor="#b5342a" stopOpacity="0" />
          </linearGradient>
          <filter id="ribbon-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>
        {/* soft glow underlay */}
        <path
          d="M -60 150 C 320 30, 700 20, 920 170 C 1120 310, 1180 520, 1080 860"
          stroke="#c23a2b"
          strokeOpacity="0.35"
          strokeWidth="30"
          strokeLinecap="round"
          filter="url(#ribbon-blur)"
          pathLength={1}
          className="ribbon-path"
        />
        {/* crisp ribbon */}
        <path
          d="M -60 150 C 320 30, 700 20, 920 170 C 1120 310, 1180 520, 1080 860"
          stroke="url(#ribbon-fade)"
          strokeWidth="16"
          strokeLinecap="round"
          pathLength={1}
          className="ribbon-path"
        />
      </svg>

      {/* ---- content ---- */}
      <div
        ref={fadeRef}
        className="relative mx-auto grid min-h-[92vh] w-full max-w-6xl items-center gap-10 px-5 pb-28 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* left: copy */}
        <div className="text-[#f5efdc]">
          <h1 className="display text-[clamp(2.6rem,7vw,4.9rem)] leading-[1.02] drop-shadow-[0_3px_24px_rgba(16,8,60,0.5)]">
            Imagine waking
            <br />
            up to qualified
            <br />
            leads <span className="marker">everyday.</span>
          </h1>

          <p className="coord mt-8 max-w-xl !text-[0.8rem] leading-relaxed !text-[#e4dcf6]">
            A dominant online presence is the ultimate unfair advantage.
            <br />
            Meridian provides strategy-led marketing solutions for real estate
            operators who are ready to scale.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="bg-gold text-[#2a1c05] hover:bg-gold"
            >
              <Link href="/contact">
                Book your call <ArrowRight />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#f5efdc]/40 text-[#f5efdc] hover:bg-white/10 hover:text-white"
            >
              <Link href="#services">See how it works</Link>
            </Button>
          </div>
        </div>

        {/* right: person + floating chips */}
        <div className="relative mx-auto hidden aspect-[3/4] w-full max-w-md lg:block">
          {personOk && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset("/hero-person.png")}
              alt="Creator holding a megaphone and phone"
              className="floaty absolute inset-0 h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(10,6,50,0.55)]"
              onError={() => setPersonOk(false)}
            />
          )}
          <div ref={chipsRef} className="absolute inset-0" aria-hidden>
            {chips.map(({ Icon, color, x, y, s, k, d }, i) => (
              <div
                key={i}
                data-chip
                data-k={k}
                className="absolute transition-transform duration-300 ease-out"
                style={{ left: x, top: y }}
              >
                <span
                  className="floaty flex items-center justify-center rounded-full border-2 border-white/70 shadow-xl"
                  style={{
                    width: 54 * s,
                    height: 54 * s,
                    backgroundColor: color,
                    animationDelay: `${d}s`,
                  }}
                >
                  <Icon className="size-5 text-white" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
