import Link from "next/link";
import {
  ArrowRight,
  Compass,
  PenTool,
  Clapperboard,
  Smartphone,
  Sparkles,
  Share2,
  Search,
  LineChart,
  Microscope,
  Layers,
  Film,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Reveal } from "@/components/site/reveal";
import { SectionLabel } from "@/components/site/section-label";

const inbound = [
  { name: "New seller lead — Eastside", note: "3-bed, motivated", t: "06:02" },
  { name: "Booked call — investor", note: "portfolio, $2.4M", t: "07:14" },
  { name: "New buyer lead — downtown", note: "pre-approved", t: "08:41" },
  { name: "Booked call — developer", note: "12-unit project", t: "09:08" },
];

const services = [
  {
    icon: Compass,
    title: "Brand strategy & positioning",
    outcome: "Own a clear, defensible place in your market's mind.",
  },
  {
    icon: PenTool,
    title: "Creative direction",
    outcome: "A look and a voice that signal trust before you say a word.",
  },
  {
    icon: Layers,
    title: "Content systems",
    outcome: "Show up consistently, everywhere your market pays attention.",
  },
  {
    icon: Film,
    title: "Video production",
    outcome: "Studio-grade production that makes every deal look premium.",
  },
  {
    icon: Smartphone,
    title: "Short-form social",
    outcome: "Be the face that follows your market across every feed.",
  },
  {
    icon: Share2,
    title: "Social management",
    outcome: "Own the conversation on every platform — handled for you.",
  },
  {
    icon: Search,
    title: "Research & insight",
    outcome: "Work grounded in a deep read of your market and audience.",
  },
  {
    icon: LineChart,
    title: "Reporting & optimization",
    outcome: "See what builds authority — then do more of exactly that.",
  },
];

const method = [
  {
    icon: Microscope,
    step: "01",
    title: "Research",
    body: "A meticulous research process uncovers the insights behind your market — so the work resonates with the right people and carries real commercial value.",
  },
  {
    icon: Sparkles,
    step: "02",
    title: "Strategy & creative",
    body: "We turn those insights into positioning, message, and creative that communicates with clarity and signals trust at first glance.",
  },
  {
    icon: Clapperboard,
    step: "03",
    title: "Production",
    body: "A rigorous production process holds precision and quality across every piece of content, on every platform — consistently, at scale.",
  },
];

const proof = [
  { value: "4", label: "disciplines under one roof: strategy, creative, content, production" },
  { value: "Every", label: "social platform your market actually uses" },
  { value: "100%", label: "done-for-you — you stay in your zone of genius" },
  { value: "1", label: "north star: recognition, trust, and market demand" },
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
    a: "Presence builds in layers. You'll feel the shift in how you show up within the first weeks; the deeper compounding — recognition, inbound trust, and demand — builds over the following 90 days and keeps growing.",
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
    a: "Most agencies sell you posts. We build authority — grounded in research, held to a rigorous production standard, and measured against recognition, trust, and demand you can feel in your pipeline.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* ===================== HERO ===================== */}
        <section className="ink relative overflow-hidden">
          <div className="grid-survey absolute inset-0 opacity-50" aria-hidden />
          <div
            className="animate-sweep pointer-events-none absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-brass/0 via-brass/70 to-brass/0 sm:block lg:left-[max(2rem,calc(50%-34rem))]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="coord text-brass">PRIME MERIDIAN</span>
                    <span className="h-px w-10 bg-brass/50" aria-hidden />
                    <span className="coord">For operators ready to scale</span>
                  </div>
                </Reveal>

                <Reveal delay={80}>
                  <h1 className="display mt-7 text-balance text-5xl text-foreground sm:text-6xl lg:text-7xl">
                    Imagine waking up to{" "}
                    <span className="plot text-brass">qualified leads</span>,
                    every day.
                  </h1>
                </Reveal>

                <Reveal delay={160}>
                  <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                    A dominant online presence is the ultimate unfair advantage.
                    Meridian provides strategy-led marketing solutions for real
                    estate operators who are ready to scale.
                  </p>
                </Reveal>

                <Reveal delay={240}>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button asChild variant="brass" size="lg">
                      <Link href="/contact">
                        Book your call <ArrowRight />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="#method">See how it works</Link>
                    </Button>
                  </div>
                </Reveal>

                <Reveal delay={320}>
                  <p className="coord mt-10">
                    Wholesalers · Investors · Developers · Brokerages
                  </p>
                </Reveal>
              </div>

              {/* Signature: the inbound "wake up to leads" readout */}
              <Reveal delay={200} className="lg:justify-self-end">
                <div className="w-full max-w-md rounded-xl border border-border bg-card/60 p-5 shadow-xl backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="coord">INBOUND · LIVE</span>
                    <span className="flex items-center gap-2 coord text-brass">
                      <span className="size-1.5 animate-pulse rounded-full bg-brass" />
                      06:02 — 09:08
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col gap-2.5">
                    {inbound.map((row) => (
                      <div
                        key={row.t}
                        className="flex items-center gap-3 rounded-lg border border-border/70 bg-background/40 px-3.5 py-3"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-brass" />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-foreground">
                            {row.name}
                          </p>
                          <p className="truncate text-xs text-muted-foreground">
                            {row.note}
                          </p>
                        </div>
                        <span className="ml-auto coord shrink-0">{row.t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-sm text-muted-foreground">
                      Booked while you slept
                    </span>
                    <span className="display text-2xl text-brass">+4</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* capability strip */}
          <div className="relative border-t border-border">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-5 py-4 sm:px-8">
              {[
                "Strategy",
                "Creative",
                "Content",
                "Production",
                "Social",
                "Research",
                "Reporting",
              ].map((c) => (
                <span key={c} className="coord">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== TRUST IS SCARCE (thesis) ===================== */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <SectionLabel index="01" coord="41.8°N — THE THESIS">
                Trust is scarce
              </SectionLabel>
            </Reveal>
            <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <Reveal>
                <h2 className="display text-4xl text-balance sm:text-5xl">
                  How you&apos;re perceived increasingly shapes your growth.
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We&apos;re a full-service branding agency helping real estate
                  operators strengthen their reputation, expand their influence,
                  and grow their business. Everything we do is grounded in a deep
                  understanding of the industry — so the work resonates with the
                  right people and delivers lasting commercial value.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===================== METHOD ===================== */}
        <section id="method" className="ink relative scroll-mt-16">
          <div className="grid-survey absolute inset-0 opacity-30" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <SectionLabel index="02" coord="THE PROCESS">
                Research in, authority out
              </SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="display mt-8 max-w-3xl text-balance text-4xl sm:text-5xl">
                Precision and quality, held across every piece of content.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {method.map((m, i) => {
                const Icon = m.icon;
                return (
                  <Reveal key={m.step} delay={i * 100}>
                    <div className="relative h-full rounded-xl border border-border bg-card/50 p-7">
                      <div className="flex items-center justify-between">
                        <span className="flex size-11 items-center justify-center rounded-full border border-brass/40 text-brass">
                          <Icon className="size-5" />
                        </span>
                        <span className="display text-3xl text-brass/40">
                          {m.step}
                        </span>
                      </div>
                      <h3 className="mt-6 text-xl font-semibold">{m.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {m.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== SERVICES / WHAT WE BUILD ===================== */}
        <section id="work" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <SectionLabel index="03" coord="THE WORK">
                Strategy, creative, content & production
              </SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="display mt-8 max-w-3xl text-balance text-4xl sm:text-5xl">
                Everything you need to build authority — under one roof.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={(i % 4) * 70}>
                    <div className="group h-full bg-card p-7 transition-colors hover:bg-secondary/50">
                      <span className="flex size-11 items-center justify-center rounded-full border border-brass/40 text-brass transition-transform group-hover:-translate-y-0.5">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {s.outcome}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================== PROOF ===================== */}
        <section id="proof" className="ink relative scroll-mt-16 overflow-hidden">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-brass/0 via-brass/40 to-brass/0"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <SectionLabel index="04" coord="THE STANDARD">
                One roof, one standard
              </SectionLabel>
            </Reveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {proof.map((p, i) => (
                <Reveal key={p.label} delay={i * 90}>
                  <div className="bg-card p-8 text-center">
                    <div className="display text-4xl text-brass sm:text-5xl">
                      {p.value}
                    </div>
                    <p className="mt-3 text-sm leading-snug text-muted-foreground">
                      {p.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== WHY MERIDIAN ===================== */}
        <section className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <Reveal>
                <div>
                  <SectionLabel index="05" coord="THE NAME">
                    Why Meridian
                  </SectionLabel>
                  <h2 className="display mt-8 text-balance text-4xl sm:text-5xl">
                    The name your market navigates by.
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    A meridian is the line everything is measured against. That&apos;s
                    the position we build for you: the default, the reference, the
                    operator the rest of the market is compared to.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      k: "Grounded",
                      v: "Everything starts from a deep understanding of how real estate actually works.",
                    },
                    {
                      k: "Researched",
                      v: "A meticulous research process uncovers what resonates with the right people.",
                    },
                    {
                      k: "Produced",
                      v: "A rigorous production process holds precision and quality across every piece.",
                    },
                  ].map((b) => (
                    <div
                      key={b.k}
                      className="rounded-xl border border-border bg-card p-6"
                    >
                      <Badge variant="brass">{b.k}</Badge>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {b.v}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ===================== FAQ ===================== */}
        <section id="faq" className="ink relative scroll-mt-16">
          <div className="relative mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
            <Reveal>
              <SectionLabel index="06" coord="OBJECTIONS, DISSOLVED">
                Before you book
              </SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="display mt-8 text-balance text-4xl sm:text-5xl">
                The honest answers.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Accordion type="single" collapsible className="mt-10">
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

        {/* ===================== FINAL CTA ===================== */}
        <section className="relative">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-16 text-center sm:px-12">
              <div
                className="pointer-events-none absolute left-1/2 top-0 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-brass/0 to-brass"
                aria-hidden
              />
              <Reveal>
                <span className="coord text-brass">THE INVITATION</span>
                <h2 className="display mx-auto mt-6 max-w-3xl text-balance text-4xl sm:text-6xl">
                  Turn your expertise into recognition, trust, and demand.
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  One call. We&apos;ll map your market, show you where your
                  reputation is leaking, and tell you straight how we&apos;d build
                  the presence that compounds it.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button asChild variant="brass" size="lg">
                    <Link href="/contact">
                      Book your call <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#work">See what we build</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
