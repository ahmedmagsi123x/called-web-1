"use client";

import * as React from "react";

import { asset } from "@/lib/asset";

const WORD = "MERIDIAN";
const HOLD_MS = 2400; // visible time before the exit starts
const EXIT_MS = 650;

/**
 * Full-screen opening moment: the duotone mountain with the MERIDIAN
 * wordmark rising in letter by letter, held ~2.4s, then lifted away.
 * Skipped for reduced-motion visitors and after the first view in a session.
 */
export function IntroSplash() {
  const [phase, setPhase] = React.useState<"idle" | "show" | "out" | "gone">(
    "idle",
  );

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("meridian-intro");
    if (reduce || seen) {
      // client-only capability check — intentional one-shot state set
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase("gone");
      return;
    }
    sessionStorage.setItem("meridian-intro", "1");
    setPhase("show");
    const t1 = setTimeout(() => setPhase("out"), HOLD_MS);
    const t2 = setTimeout(() => setPhase("gone"), HOLD_MS + EXIT_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  React.useEffect(() => {
    // lock scroll while the splash is up
    const lock = phase === "show" || phase === "out";
    document.documentElement.style.overflow = lock ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [phase]);

  if (phase === "idle" || phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#1c1468] ${
        phase === "out" ? "intro-out" : ""
      }`}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/hero-duotone.jpg")}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a220a]/40 via-transparent to-[#140f4e]/60" />
      <h1 className="display relative select-none text-[clamp(3.5rem,15vw,13rem)] leading-none text-[#fdf6dc] drop-shadow-[0_6px_40px_rgba(20,10,60,0.55)]">
        {Array.from(WORD).map((ch, i) => (
          <span
            key={i}
            className="intro-letter"
            style={{ animationDelay: `${0.12 + i * 0.055}s` }}
          >
            {ch}
          </span>
        ))}
      </h1>
    </div>
  );
}
