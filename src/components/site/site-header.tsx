"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";

const links = [
  { href: "/#process", label: "Process" },
  { href: "/#services", label: "What we deliver" },
  { href: "/#faq", label: "Questions" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      {/* glassy vanilla pill */}
      <div
        className={cn(
          "mx-auto max-w-6xl rounded-[2rem] border border-white/60 shadow-[0_10px_36px_-14px_rgba(30,22,10,0.4),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl transition-colors duration-300",
          scrolled ? "bg-[#f1ecd9]/85" : "bg-[#f1ecd9]/60",
        )}
      >
        <div className="flex h-14 items-center justify-between px-5 sm:h-16 sm:px-7">
          <Link href="/" aria-label="Meridian Media home">
            <Logo className="text-[#191512]" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-heading text-[0.8rem] font-semibold uppercase tracking-wide text-[#3c3524]/80 transition-colors hover:text-[#191512]"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="hidden rounded-full bg-[#191512] px-5 text-[#f4efdc] hover:bg-[#191512] sm:inline-flex"
            >
              <Link href="/contact">Book a call</Link>
            </Button>
            <button
              className="inline-flex size-10 items-center justify-center rounded-full text-[#191512] md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col border-t border-black/10 px-6 py-3 md:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-base text-[#191512]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 mb-2 rounded-full bg-[#191512] text-[#f4efdc] hover:bg-[#191512]"
            >
              <Link href="/contact" onClick={() => setOpen(false)}>
                Book a call
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
