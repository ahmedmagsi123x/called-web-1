"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  MonitorPlay,
  Smartphone,
  Bot,
  Share2,
  PenTool,
  Clapperboard,
  Mail,
  Megaphone,
  Palette,
  Compass,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";

type Service = {
  no: string;
  icon: LucideIcon;
  title: string;
  outcome: string;
  img?: string;
};

const services: Service[] = [
  { no: "01", icon: MonitorPlay, title: "YouTube content production", outcome: "Long-form authority that makes you the operator people search for." },
  { no: "02", icon: Smartphone, title: "Short-form content", outcome: "Daily reach that puts your face in front of the whole market." },
  { no: "03", icon: Bot, title: "AI video production", outcome: "Scale your presence with polished, on-brand video — produced faster." },
  { no: "04", icon: Share2, title: "Social media management", outcome: "Every platform handled, consistent, and on-brand — done for you." },
  { no: "05", icon: PenTool, title: "Scriptwriting & copywriting", outcome: "Words that build trust and move the right people to act." },
  { no: "06", icon: Clapperboard, title: "Property & business video", outcome: "Listings and brand films that make every deal look premium.", img: "/services/production.png" },
  { no: "07", icon: Mail, title: "Email marketing & CRM", outcome: "Stay top of mind and turn your list into booked calls." },
  { no: "08", icon: Megaphone, title: "Paid advertising", outcome: "Qualified buyers and sellers in front of your offer, on demand.", img: "/services/paid-ads.png" },
  { no: "09", icon: Palette, title: "Branding & design", outcome: "An identity that signals authority before you say a word." },
  { no: "10", icon: Compass, title: "Strategy & consulting", outcome: "A clear plan that ties every asset to real commercial growth.", img: "/services/strategy.png" },
];

export function ServicesMenu() {
  const [active, setActive] = React.useState(0);
  const current = services[active];
  const Icon = current.icon;

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      {/* Interactive list */}
      <ul className="border-t border-border">
        {services.map((s, i) => {
          const RowIcon = s.icon;
          const isActive = i === active;
          return (
            <li key={s.no} className="border-b border-border">
              <Link
                href="/contact"
                className="group flex items-center gap-4 py-5 outline-none sm:gap-6"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span
                  className={cn(
                    "coord w-7 shrink-0 transition-colors",
                    isActive ? "text-brass" : "text-muted-foreground",
                  )}
                >
                  {s.no}
                </span>
                <RowIcon
                  className={cn(
                    "size-5 shrink-0 transition-colors",
                    isActive ? "text-brass" : "text-muted-foreground",
                  )}
                />
                <span
                  className={cn(
                    "flex-1 text-lg font-semibold tracking-tight transition-all duration-300 sm:text-xl",
                    isActive
                      ? "translate-x-1 text-foreground"
                      : "text-foreground/70",
                  )}
                >
                  {s.title}
                </span>
                <ArrowUpRight
                  className={cn(
                    "size-5 shrink-0 transition-all duration-300",
                    isActive
                      ? "translate-x-0 text-brass opacity-100"
                      : "-translate-x-2 opacity-0",
                  )}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Synced preview panel (desktop) */}
      <div className="hidden lg:block">
        <div className="sticky top-24">
          <div className="glass relative overflow-hidden rounded-2xl p-8">
            <div className="blob -right-10 -top-10 size-44 bg-brass/40" aria-hidden />
            <div className="relative">
              <span className="coord text-brass">{current.no} — featured</span>

              <div className="mt-6 flex h-44 items-center justify-center">
                {current.img ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={current.img}
                    src={asset(current.img)}
                    alt=""
                    className="floaty h-44 w-auto drop-shadow-xl"
                  />
                ) : (
                  <span
                    key={current.no}
                    className="flex size-24 items-center justify-center rounded-2xl border border-brass/40 bg-brass/10 text-brass"
                  >
                    <Icon className="size-10" />
                  </span>
                )}
              </div>

              <h3 className="display mt-6 text-2xl">{current.title}</h3>
              <p className="mt-3 text-muted-foreground">{current.outcome}</p>
              <Link
                href="/contact"
                className="coord mt-6 inline-flex items-center gap-1.5 text-brass hover:underline"
              >
                Start here <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
