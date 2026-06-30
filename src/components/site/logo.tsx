import { cn } from "@/lib/utils";

/**
 * Meridian mark — a geometric "M" drawn as a single navigational stroke,
 * with a marker dot at the apex. Uses currentColor so it adapts on any
 * surface (set the color via `text-brass`, etc.).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7 text-brass", className)}
      fill="none"
      aria-hidden
    >
      <path
        d="M5 26 V11 L16 21 L27 11 V26"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="6.5" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className,
  wordmarkClassName,
}: {
  className?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span
        className={cn(
          "text-lg font-semibold tracking-tight text-foreground",
          wordmarkClassName,
        )}
      >
        Meridian
      </span>
    </span>
  );
}
