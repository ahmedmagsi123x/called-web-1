import { cn } from "@/lib/utils";

/**
 * Instrument-style section marker. The coordinate is not decoration —
 * it plots each section on the page's single north–south axis, the
 * journey from "invisible" to "the name trusted first".
 */
export function SectionLabel({
  index,
  coord,
  children,
  className,
}: {
  index: string;
  coord: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="coord text-brass">{index}</span>
      <span className="h-px w-8 bg-brass/50" aria-hidden />
      <span className="coord">{children}</span>
      <span className="coord ml-auto opacity-60" aria-hidden>
        {coord}
      </span>
    </div>
  );
}
