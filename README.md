# Meridian Media

> **Trust is scarce. How you're perceived shapes your growth.**

The website for Meridian Media — a full-service branding agency that helps real estate
operators strengthen their reputation, expand their influence, and turn expertise into
recognition, trust, and market demand.

Built with **Next.js 16** (App Router) · **Tailwind CSS v4** · **shadcn/ui** · **TypeScript**.

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

```bash
pnpm build    # production build
pnpm lint     # eslint
```

## What's here

| Route | File | Job |
|-------|------|-----|
| **Home** | `src/app/page.tsx` | The full narrative → book a call |
| **Book a call** | `src/app/contact/page.tsx` | The single conversion point |

Homepage flow: hero (*wake up to qualified leads*) → the thesis (*trust is scarce*) →
the process (research → strategy & creative → production) → what we build → the standard →
why Meridian → FAQ → final invitation.

## Design

The identity is built on the brand's own meaning: a **meridian** is the prime reference line
a market navigates by. That idea drives a navigational, instrument-inspired system —

- **Palette:** warm survey *paper*, deep navigational *ink* sections, a single restrained
  *brass* reference line as the signature accent.
- **Type:** Bricolage Grotesque (display) · Hanken Grotesk (body) · IBM Plex Mono (coordinates & data).
- **Signature:** a brass meridian line and mono "coordinate" labels that plot each section on
  the page's single axis — from *invisible* to *the name trusted first*.
- Responsive to mobile, keyboard-accessible focus, and `prefers-reduced-motion` respected.

Design tokens live at the top of `src/app/globals.css`. Dark (`.ink`) sections re-map the
shadcn semantic tokens locally, so components adapt automatically.

## Replace before launch

- `hello@meridianmedia.co`, the `metadataBase` URL, social links, and a real logo mark.
- The proof/benchmark figures (illustrative) and the hero "inbound" readout (a stylized demo).
- Wire the booking form to a real scheduler (Calendly / Cal.com) or form handler — it currently
  shows a friendly demo confirmation.

## Legacy

The previous dependency-free static site is archived under [`legacy-static/`](./legacy-static).
