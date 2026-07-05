import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Reveal } from "@/components/site/reveal";
import { IntroSplash } from "@/components/site/intro-splash";
import { HeroStage } from "@/components/site/hero-stage";
import { StatementBand } from "@/components/site/statement-band";
import { ServicesBoxes } from "@/components/site/services-boxes";
import { ProcessShowcase } from "@/components/site/process-showcase";

const strip = [
  "YouTube",
  "Social Media Management",
  "Paid Ads",
  "Email Marketing",
  "Short Form",
  "AI Video",
  "Branding",
  "Strategy",
];

const faqs = [
  {
    q: "Is online presence really how deals get won now?",
    a: "Trust is scarce, and how you're perceived increasingly shapes your growth. Your next client forms an opinion of you on a screen before you ever speak. A consistent, credible presence is what makes you the default choice — the operator who looks the most trusted wins the relationship.",
  },
  {
    q: "I don't have time to manage this. Is it hands-off?",
    a: "That's the point. Meridian is full-service and done-for-you — strategy, creative, content, and production, handled end to end. Your only job is to keep doing the work you're great at while your reputation compounds.",
  },
  {
    q: "How fast will I see results?",
    a: "Presence builds in layers. You'll feel the shift in how you show up within the first weeks; the deeper compounding — recognition, inbound trust, and demand — builds over the following months and keeps growing.",
  },
  {
    q: "What does it cost?",
    a: "It depends on your market and how aggressively you want to grow your influence. We scope it on the call so the investment is grounded in the commercial value it creates. If we're not confident we can move your numbers, we'll tell you.",
  },
  {
    q: "Can a team that isn't local really understand my market?",
    a: "Understanding the industry is the foundation of everything we do. Every engagement starts with meticulous research into your specific market, offer, and audience — the strategy is built on your reality, never a generic template.",
  },
  {
    q: "I've been burned by an agency before. Why is this different?",
    a: "Most agencies sell you posts. We build authority — grounded in research, held to a rigorous production standard, and pointed at one outcome: recognition, trust, and increased market demand.",
  },
];

export default function Home() {
  return (
    <>
      <IntroSplash />
      <SiteHeader />
      <main className="flex-1">
        {/* ============ HERO: duotone peaks, ribbon, person ============ */}
        <section className="relative overflow-hidden bg-[#1c1468]">
          <HeroStage />
          {/* services marquee — right to left */}
          <div className="marquee absolute inset-x-0 bottom-0 border-t border-white/15 bg-[#241a8a]/85 backdrop-blur-sm">
            <div className="marquee-track py-3.5">
              {[0, 1].map((rep) => (
                <div
                  key={rep}
                  className="flex shrink-0 items-center"
                  aria-hidden={rep === 1}
                >
                  {strip.map((c) => (
                    <span
                      key={c}
                      className="coord flex items-center whitespace-nowrap !text-[#d9d3f4]"
                    >
                      <span className="px-7">{c}</span>
                      <span className="text-gold">•</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ STATEMENT BAND ============ */}
        <StatementBand />

        {/* ============ OUR SERVICES ============ */}
        <ServicesBoxes />

        {/* ============ OUR PROCESS ============ */}
        <ProcessShowcase />

        {/* ============ HANDWRITTEN BAND ============ */}
        <section className="halftone bg-chartreuse">
          <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8">
            <p className="font-hand -rotate-1 text-[clamp(1.8rem,4.5vw,3.2rem)] font-bold leading-tight text-[#1c1c10]">
              A dominant online presence is the ultimate unfair advantage.
            </p>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section id="faq" className="scroll-mt-24">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
            <Reveal>
              <h2 className="head-italic text-[clamp(2.2rem,5.5vw,4rem)] text-[#151510]">
                Frequently Asked
                <br />
                Questions
              </h2>
            </Reveal>
            <div className="mt-3 h-px w-full bg-black/20" aria-hidden />
            <Reveal delay={120}>
              <Accordion type="single" collapsible className="mt-8">
                {faqs.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger>{f.q}</AccordionTrigger>
                    <AccordionContent>{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* ============ PINK CTA CARD ============ */}
        <section className="relative pb-24 pt-6">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal from="scale">
              <div className="rounded-[2.5rem] bg-pinkcard px-6 py-16 text-center shadow-[0_50px_90px_-25px_rgba(110,40,90,0.55)] sm:px-12 sm:py-20">
                <span className="coord !text-[#7c2f6b]">THE INVITATION</span>
                <h2 className="font-heading mx-auto mt-5 max-w-3xl text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight text-[#3c0f38] sm:text-5xl">
                  We turn your expertise into recognition, trust, and increased
                  market demand.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#5d2153]">
                  One call. We&apos;ll map your market, show you where your
                  reputation is leaking, and tell you straight how we&apos;d
                  build the presence that compounds it.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-[#16156b] px-8 text-white hover:bg-[#16156b]"
                  >
                    <Link href="/contact">
                      Book your call <ArrowRight />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-[#3c0f38]/40 px-8 text-[#3c0f38] hover:bg-[#3c0f38]/10 hover:text-[#3c0f38]"
                  >
                    <Link href="/#services">See what we deliver</Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
