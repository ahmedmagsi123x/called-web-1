<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Meridian Media — project notes

Marketing / branding agency website for real estate operators.

## Stack

- **Next.js 16** (App Router, TypeScript, RSC) + **Tailwind CSS v4** + **shadcn/ui** (radix base, new-york).
- Package manager: **pnpm**.
- Fonts via `next/font/google`: Bricolage Grotesque (display), Hanken Grotesk (body), IBM Plex Mono (data/labels).

## Commands

- `pnpm dev` — local dev server
- `pnpm build` — production build (must pass before pushing)
- `pnpm lint` — eslint

## Design system

Concept: a *meridian* is the prime reference line a market navigates by. Tokens live in
`src/app/globals.css`.

- Palette: warm survey **paper** (`--background`), deep navigational **ink** (`.ink` surfaces),
  a single restrained **brass** accent (`--brass`) used for the signature reference line.
- `.ink` re-maps the shadcn semantic tokens locally, so every component flips automatically
  on dark sections — never hand-override component colors.
- Signature element: the brass meridian line + mono coordinate labels (`.coord`, `SectionLabel`).
- Quality floor: responsive to mobile, visible `:focus-visible`, `prefers-reduced-motion` respected.

## Structure

- `src/components/ui/*` — shadcn component source (button, card, badge, accordion, separator,
  input, textarea, label, field, toggle-group).
- `src/components/site/*` — site composition (header, footer, reveal, section-label, booking-form).
- `src/app/page.tsx` — homepage; `src/app/contact/page.tsx` — book-a-call.
- `legacy-static/` — the previous vanilla HTML site, archived.

## Adding shadcn components

`ui.shadcn.com` is blocked by this environment's network policy, so the CLI registry fetch
(`shadcn add`) fails here. npm is allowed — add the underlying radix dep and place the
component source by hand (the same result the CLI produces).

## Before launch (placeholders to replace)

- `hello@meridianmedia.co`, `metadataBase` URL, social links, real logo mark.
- Hero "inbound" readout is a stylized demo, not live data.
- `public/services/*.svg` — placeholder 3D-vector art for the featured-services section.
  Overwrite each (youtube/short-form/branding/strategy/production) with the real
  uploaded vectors, keeping the filenames (or repoint in `featured-services.tsx`).
- Wire `BookingForm` to a real scheduler (Calendly / Cal.com) or form handler — it currently
  shows a demo confirmation.
