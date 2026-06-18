# Meridian Media — Single-Page Website

> **We don't offer services. We build authorities.**
> A colorful, persuasive, conversion-focused single-page site that turns a cold real estate professional into someone who books a call.

A static, dependency-free site (HTML + CSS + vanilla JS). Open `index.html` in any browser — no build step. Ready to hand to a developer or deploy to Netlify / Vercel / GitHub Pages as-is.

---

## Structure

Everything lives on one page (`index.html`) with smooth in-page scrolling. The nav links jump to anchored sections; every section ends pointing at the one action: **book a call**.

### Section order (the story arc)
1. **Nav** — logo, anchor links, persistent *Book a Call* (pill, blur backdrop on scroll)
2. **Hero** — dark rounded card, oversized brand type, floating colorful badges, the promise
3. **Statement** — the big promise headline (*Become the name your market trusts first*)
4. **Marquee** — capabilities scrolling at a glance
5. **The Problem** — the cost of being invisible
6. **The Shift** — trust is now built on a screen
7. **Meet Meridian** — the guide + positioning line
8. **How It Works** — the simple 3-step path
9. **What We Build** — 9 services framed as outcomes (colorful cards)
10. **The Proof** — dark section, count-up stats, the channel
11. **Why Meridian** — system / standard / done-for-you
12. **Two Futures** — with us vs. without us
13. **FAQ** — the 6 real objections, dissolved (accordion)
14. **Final CTA / Book** — the warm invitation + booking form
15. **Footer** — CTA repeated, oversized brand wordmark, essentials

---

## Design & motion
- **Reference look:** bold display type, dark rounded hero card, floating colorful badge icons, oversized brand wordmark, stats, FAQ — inspired by the supplied screenshots.
- **Palette:** warm off-white canvas; coral, green, yellow, blue, purple, pink in soft section blocks. Each section owns a color family.
- **Shape:** everything rounded — pill buttons, rounded cards, blobby background shapes.
- **Type:** `Bricolage Grotesque` (display) + `Plus Jakarta Sans` (body), via Google Fonts.
- **Motion:** scroll-reveal with stagger, per-word headline reveals, count-up stats, marquee, floating + mouse-parallax badges, animated hero glow, scroll-progress bar, FAQ accordion, springy hovers. All respect `prefers-reduced-motion`.
- **Tokens:** all colors, radii, shadows, spacing live as CSS variables at the top of `assets/css/style.css`.

## Service → benefit translations
| Service | What they actually get |
|---------|------------------------|
| YouTube production | *Become the channel your market subscribes to* |
| Short-form | *Be the face that follows them everywhere* |
| AI video | *Show up more without filming more* |
| Social management | *Own the conversation in your market* |
| Scripting & copy | *Never stare at a blank page again* |
| Property/business video | *Make every deal look premium* |
| Email | *Stay in their inbox, top of mind* |
| Paid ads | *Pour fuel on what's already working* |
| Branding & strategy | *Look the most trusted before you speak* |

## Conversion path
`Book a Call` appears in: the nav (always visible), hero, after the shift, after How-It-Works, in proof, the two-futures card, the final CTA + form, and the footer. No dead ends.

## Replace before launch (placeholders)
- Stat numbers in `[data-count]` → real figures
- Gradient/emoji thumbnails → real thumbnails/screenshots in `assets/img/`
- `hello@meridianmedia.co`, social links, logo mark
- Wire the booking form to a real handler / Calendly embed (currently a friendly demo confirmation)
