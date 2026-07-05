import type { Metadata } from "next";
import { Check } from "lucide-react";

import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { BookingForm } from "@/components/site/booking-form";
import { SectionLabel } from "@/components/site/section-label";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Book a call with Meridian. We'll map your market, show you where your reputation is leaking, and tell you straight how we'd build the presence that compounds it.",
};

const expect = [
  "A read on your market and where attention is leaking",
  "The presence and content plan we'd build for you",
  "Straight talk on whether we can move your numbers",
  "No pressure, no obligation, no canned pitch",
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="surf-blue relative overflow-hidden">
          <div className="grid-survey absolute inset-0 opacity-40" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-28 sm:px-8 sm:pt-32">
            <SectionLabel index="→" coord="THE CONVERSION POINT">
              Book a call
            </SectionLabel>
            <h1 className="display mt-7 max-w-3xl text-balance text-4xl sm:text-6xl">
              One call to map the presence that grows your business.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tell us where you are and where you want to be. We&apos;ll bring the
              research, the strategy, and an honest answer.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
            <div>
              <h2 className="coord text-brass">WHAT TO EXPECT</h2>
              <ul className="mt-6 flex flex-col gap-4">
                {expect.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-xl border border-border bg-secondary/40 p-6">
                <p className="display text-2xl">
                  &ldquo;Trust is scarce. How you&apos;re perceived shapes your
                  growth.&rdquo;
                </p>
                <p className="coord mt-4">— The Meridian thesis</p>
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                Prefer email?{" "}
                <a
                  href="mailto:hello@meridianmedia.co"
                  className="text-brass underline-offset-4 hover:underline"
                >
                  hello@meridianmedia.co
                </a>
              </p>
            </div>

            <BookingForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
