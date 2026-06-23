# Meridian Media — Website

> **We don't offer services. We build authorities.**
> A colorful, persuasive, conversion-focused one-page site that turns a cold real estate professional into someone who books a call.

A static, dependency-free **single-page** site (HTML + CSS + vanilla JS). Open `index.html` in any browser — no build step. Ready to hand to a developer or deploy to Netlify / Vercel / GitHub Pages as-is.

---

## One page, one narrative

Everything lives on `index.html`. The nav links scroll to sections (`#services`, `#work`, `#about`, `#book`); every CTA points at the booking form (`#book`). No dead ends.

### Section order (the story)
1. **Nav** — logo, anchor links, persistent *Book a Call*
2. **Hero** — the promise: *Become the name your market trusts first*
3. **Marquee** — capabilities at a glance
4. **The Problem** — the cost of being invisible
5. **The Shift** — trust is now built on a screen
6. **Meet Meridian** `#about` — the guide + positioning line
7. **How It Works** — the simple 3-step path
8. **What We Build** `#services` — 9 services as outcomes (colorful cards)
9. **The Proof** `#work` — the channel, the numbers, the standard + a testimonial
10. **Why Meridian** — system / standard / done-for-you
11. **Two Futures** — with us vs. without us
12. **FAQ** — the 6 real objections, dissolved
13. **Book a Call** `#book` — what to expect + the form (the one conversion point)
14. **Footer** — anchor links + essentials

Every section ends pointing at the one action: **book a call**.

---

## Service → benefit translations
| Service | What they actually get |
|---------|------------------------|
| YouTube production | *Become the channel your market subscribes to and trusts* |
| Short-form | *Be the face that follows them everywhere* |
| AI video | *Show up more without filming more* |
| Social management | *Own the conversation in your market* |
| Scripting & copy | *Never stare at a blank page again* |
| Property/business video | *Make every deal look premium* |
| Email | *Stay in their inbox, top of mind* |
| Paid ads | *Pour fuel on what's already working* |
| Branding & strategy | *Look the most trusted before you say a word* |

## Objections handled (in-flow + FAQ)
Results vs. vanity · camera time · cost · time required · remote-team quality · "is content even how my client is won?"

---

## Design system
- **Palette:** warm off-white canvas; coral, green, yellow, blue, purple, pink used in soft section blocks. Each section owns a color family.
- **Shape:** everything rounded — pill buttons, rounded cards, blobby background shapes.
- **Type:** `Bricolage Grotesque` (characterful display) + `Plus Jakarta Sans` (clean body), via Google Fonts.
- **Motion:** scroll reveals, count-up stats, animated bars, floating blobs, springy hovers. Smooth in-page anchor scrolling, with `scroll-margin-top` so the sticky nav never covers a heading. Respects `prefers-reduced-motion`.
- **Tokens:** all colors, radii, shadows, and spacing live as CSS variables at the top of `assets/css/style.css`.

## Files
- `index.html` — the entire site
- `assets/css/style.css` — design system + all styles
- `assets/js/main.js` — nav, scroll reveals, FAQ accordion, count-up stats, demo form handler
- `COPY.md` — the full copy deck (every word, section by section) for easy editing

## Replace before launch (placeholders)
- Stat numbers in `[data-count]` + channel metrics → real figures
- Gradient video thumbnails → real thumbnails/screenshots in `assets/img/`
- `hello@meridian.media`, social links, logo mark
- Wire the contact form to a real handler / Calendly embed (currently a friendly demo confirmation)
