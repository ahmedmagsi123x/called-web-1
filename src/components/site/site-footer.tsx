import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="ink relative overflow-hidden">
      <div className="grid-survey absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="relative flex size-7 items-center justify-center rounded-full border border-brass/60"
              >
                <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-brass" />
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-brass/35" />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Meridian
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Strategy-led marketing for real estate operators ready to scale.
              We build the online presence that books the calls.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <Button asChild variant="brass" size="lg">
              <Link href="/contact">Book a call</Link>
            </Button>
            <a
              href="mailto:hello@meridianmedia.co"
              className="coord hover:text-brass"
            >
              hello@meridianmedia.co
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="coord">© {new Date().getFullYear()} Meridian Media</p>
          <nav className="flex gap-6">
            <Link href="/#method" className="hover:text-foreground">
              Method
            </Link>
            <Link href="/#work" className="hover:text-foreground">
              What we build
            </Link>
            <Link href="/#faq" className="hover:text-foreground">
              Questions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
