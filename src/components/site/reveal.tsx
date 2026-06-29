"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Reveals children on scroll. Honors prefers-reduced-motion via CSS
 * (the `.reveal` class is reset when reduced motion is requested).
 */
export function Reveal({
  className,
  as: Tag = "div",
  delay = 0,
  ...props
}: React.ComponentProps<"div"> & {
  as?: React.ElementType;
  delay?: number;
}) {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("in");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      {...props}
    />
  );
}
