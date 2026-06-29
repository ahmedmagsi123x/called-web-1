import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

/**
 * Five signature areas, each with a floating 3D-vector slot.
 * Replace the placeholder art at /public/services/<key>.svg with your
 * uploaded vectors (any image format works — keep the same filename, or
 * tell me the new names and I'll repoint them).
 */
const featured = [
  {
    no: "01",
    name: "YouTube",
    img: "/services/youtube.svg",
    copy: "We build YouTube channels that turn expertise into lasting authority.",
  },
  {
    no: "02",
    name: "Short-form",
    img: "/services/short-form.svg",
    copy: "Attention is earned a few seconds at a time. Consistency determines who stays relevant. We produce short-form content designed to keep your brand visible and remembered.",
  },
  {
    no: "03",
    name: "Branding",
    img: "/services/branding.svg",
    copy: "Your reputation is formed long before the first conversation. We create identities that communicate credibility, professionalism, and trust.",
  },
  {
    no: "04",
    name: "Strategy",
    img: "/services/strategy.png",
    copy: "Content without direction rarely creates momentum. We develop strategic frameworks that expand your visibility, strengthen your market position, and drive business growth.",
  },
  {
    no: "05",
    name: "Production",
    img: "/services/production.png",
    copy: "Great ideas deserve exceptional execution. Every detail shapes perception. Our production process ensures every asset reflects the top-tier quality of your business.",
  },
];

export function FeaturedServices() {
  return (
    <div className="mt-16 flex flex-col gap-20 lg:gap-28">
      {featured.map((s, i) => {
        const imageRight = i % 2 === 1;
        return (
          <div
            key={s.no}
            className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            {/* Floating 3D-vector slot */}
            <Reveal
              from={imageRight ? "right" : "left"}
              className={`tilt-wrap order-1 ${
                imageRight ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <div className="relative mx-auto flex max-w-sm items-center justify-center">
                {/* ambient glow behind the vector */}
                <div
                  className="absolute size-56 rounded-full bg-brass/20 blur-3xl sm:size-72"
                  aria-hidden
                />
                <div className="floaty relative">
                  <div className="tilt">
                    {/* plain <img> so any uploaded asset format (svg/png/webp)
                        drops in without next/image SVG config */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={`${s.name} — illustration`}
                      width={400}
                      height={400}
                      className="w-64 select-none sm:w-80"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Copy */}
            <Reveal
              from={imageRight ? "left" : "right"}
              delay={120}
              className={`order-2 ${imageRight ? "lg:order-1" : "lg:order-2"}`}
            >
              <div className="flex items-center gap-3">
                <span className="coord text-brass">{s.no}</span>
                <span className="h-px w-10 bg-brass/50" aria-hidden />
              </div>
              <h3 className="display mt-5 text-4xl sm:text-5xl">{s.name}</h3>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
                {s.copy}
              </p>
              <Button asChild variant="link" className="mt-5 px-0 text-brass">
                <Link href="/contact">Start with {s.name} →</Link>
              </Button>
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}
