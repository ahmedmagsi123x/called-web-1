import { cn } from "@/lib/utils";

/**
 * Meridian wordmark — set in the punchy display face. No icon mark.
 * Inherits color from the surface (text-foreground), so it adapts on
 * light and dark sections.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-2xl font-extrabold tracking-tight text-foreground",
        className,
      )}
    >
      Meridian
    </span>
  );
}
