"use client";

import * as React from "react";
import {
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
  Star,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Service = {
  no: string;
  icon: LucideIcon;
  name: string;
  desc: string;
  color: string;
};

const services: Service[] = [
  { no: "01", icon: MonitorPlay, name: "YouTube Production", desc: "Long-form authority your market searches for.", color: "#e2551d" },
  { no: "02", icon: Smartphone, name: "Short-Form Content", desc: "Daily reach that keeps your face in every feed.", color: "#e8468f" },
  { no: "03", icon: Bot, name: "AI Video", desc: "Polished, on-brand video — produced at speed.", color: "#7d3ce8" },
  { no: "04", icon: Share2, name: "Social Management", desc: "Every platform handled, consistent, done for you.", color: "#1aa862" },
  { no: "05", icon: PenTool, name: "Scripts & Copy", desc: "Words that build trust and move people to act.", color: "#0f8fb4" },
  { no: "06", icon: Clapperboard, name: "Property Video", desc: "Listings and brand films that look premium.", color: "#b5342a" },
  { no: "07", icon: Mail, name: "Email & CRM", desc: "Stay top of mind until they're ready to move.", color: "#c47f0e" },
  { no: "08", icon: Megaphone, name: "Paid Advertising", desc: "Qualified buyers and sellers, on demand.", color: "#2b3fd6" },
  { no: "09", icon: Palette, name: "Branding & Design", desc: "An identity that signals authority instantly.", color: "#d1379b" },
  { no: "10", icon: Compass, name: "Strategy & Consulting", desc: "A plan that ties every asset to growth.", color: "#1c7a4f" },
];

/**
 * OUR SERVICES — royal blue poster block. Boxes sit muted/desaturated and
 * flood with their own colour on hover/focus, revealing icon + description.
 */
export function ServicesBoxes() {
  return (
    <section id="services" className="surf-royal relative scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <h2 className="head-italic text-[clamp(2.4rem,6vw,4.5rem)] text-white">
            Our Services
          </h2>
          <span className="flex gap-1.5" aria-hidden>
            {Array.from({ length: 7 }).map((_, i) => (
              <Star
                key={i}
                className="size-5 fill-star text-star sm:size-6"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </span>
        </div>
        <div className="mt-3 h-px w-full bg-white/40" aria-hidden />

        <div className="mt-8 rounded-2xl bg-[#efe9d2] p-3 sm:p-4">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.no}>
                  <button
                    type="button"
                    className={cn(
                      "group relative flex aspect-[4/5] w-full flex-col justify-between overflow-hidden rounded-lg p-4 text-left",
                      "bg-[#a5a4c6] transition-all duration-300 ease-out",
                      "hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(10,10,40,0.45)] focus-visible:-translate-y-1",
                    )}
                    style={
                      {
                        "--svc": s.color,
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor =
                        s.color)
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor =
                        "")
                    }
                    onFocus={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor =
                        s.color)
                    }
                    onBlur={(e) =>
                      ((e.currentTarget as HTMLElement).style.backgroundColor =
                        "")
                    }
                  >
                    <div className="flex items-start justify-between">
                      <Icon className="size-7 text-[#3c3b5c] opacity-60 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:opacity-100" />
                      <span className="coord !text-[0.62rem] !text-[#3c3b5c]/70 transition-colors group-hover:!text-white/80">
                        {s.no}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-bold uppercase leading-tight text-[#2c2b48] transition-colors group-hover:text-white sm:text-base">
                        {s.name}
                      </h3>
                      <p className="mt-1.5 max-h-0 overflow-hidden text-xs leading-snug text-white/90 opacity-0 transition-all duration-300 group-hover:max-h-16 group-hover:opacity-100 group-focus-visible:max-h-16 group-focus-visible:opacity-100">
                        {s.desc}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
