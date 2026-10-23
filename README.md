# Zeno — Landing Page

A production-ready marketing site for **Zeno**, built with Next.js App Router,
TypeScript, Tailwind CSS v4, hand-authored shadcn/ui-style primitives, and
Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev     # local dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
src/
  app/
    layout.tsx        # SEO metadata, Open Graph, JSON-LD, fonts, root shell
    page.tsx           # assembles all landing sections
    privacy/page.tsx    terms/page.tsx   # legal pages
    robots.ts  sitemap.ts
    globals.css         # design tokens (CSS variables) + custom utilities
  components/
    ui/                # button, card, badge, accordion (shadcn/ui-style)
    motion/reveal.tsx   # scroll-reveal / stagger helpers (Framer Motion)
    app-preview.tsx     # hero product UI mock — the signature visual
    brand-icons.tsx     # GitHub / Discord / X marks (not in lucide)
    hero.tsx, trusted-by.tsx, features.tsx, how-it-works.tsx,
    benefits.tsx, pricing.tsx, faq.tsx, final-cta.tsx,
    site-header.tsx, site-footer.tsx, countdown.tsx
  lib/
    content.ts   # single source of truth for all page copy
    utils.ts     # cn() class-merging helper
next.config.ts   # security headers (CSP, HSTS, X-Frame-Options, etc.)
```

## Design system

Modern dark SaaS: near-black canvas (`#060809`), emerald signal color with a
violet secondary, translucent glass surfaces, one-pixel gradient hairlines,
soft radial glows, and a product-window mockup in the hero. **Inter** carries
the display/body type and **JetBrains Mono** is reserved for code, labels, and
the terminal. Both are self-hosted through `next/font`, so the strict CSP in
`next.config.ts` stays intact.

Signature UI pieces:

- `app-preview.tsx` — three-pane chat window showing a local model session,
  streaming answer, context meter, and "0 bytes uploaded" proof points.
- `how-it-works.tsx` — interactive step tabs driving a live terminal panel.
- `benefits.tsx` — permission-prompt and audit-log mockups for the security
  story.
- `features.tsx` — bento grid with a cursor-following spotlight on each card.

## Notes on content sourcing

- `src/lib/content.ts` is the single source of truth for copy. Every section
  pulls from it rather than hardcoding text in components.
- Features, the "how it works" steps (including the example terminal output),
  security/benefits copy, and the FAQ are derived directly from the product
  brief. Example command output is illustrative, not a guarantee of log
  formatting.
- Pricing plans are **not** stated in the product brief (Zeno's desktop app is
  described as 100% free/MIT-licensed) — they were added to satisfy the brief's
  pricing requirement and are clearly marked as inferred in `content.ts`,
  framed as an optional hosted/support tier on top of the free app.
- The countdown timer is a structural requirement from the brief, not a
  product fact; it's labeled generically ("next feature drop") rather than as
  a real commitment and lives in the closing CTA.
- The stack row and stats band (`trustedBy`) use only facts from the brief
  (2GB minimum RAM, zero telemetry, MIT license, three platforms).

## Deployment

This is a standard Next.js app — deploy to Vercel, or any Node host:

```bash
npm run build
npm run start
```

Before going live, replace the placeholder domain (`https://zeno.example.com`)
in `src/app/layout.tsx`, `robots.ts`, and `sitemap.ts`, and add a real
`/public/og-image.png` (1200×630).
