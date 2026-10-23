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
    site-header.tsx, site-footer.tsx
  lib/
    content.ts   # single source of truth for all page copy
    utils.ts     # cn() class-merging helper
next.config.ts   # security headers (CSP, HSTS, X-Frame-Options, etc.)
```

## Design system

Light, editorial SaaS: a warm paper canvas (`#f7f5f0`), near-black ink, and a
single vermillion signal colour (`#e34a1b`). Structure comes from one-pixel
hairlines and whitespace rather than gradients, glass or glow. Cards are plain
white surfaces with restrained shadows; dark is reserved for terminals and the
closing CTA, where it adds contrast instead of atmosphere. **Geist** carries
the display/body type and **Geist Mono** handles labels, numbers, and code.
Both are self-hosted through `next/font`, so the strict CSP in
`next.config.ts` stays intact.

Signature UI pieces:

- `app-preview.tsx` — a light three-pane desktop window (threads, chat,
  session rail) with realistic chrome, model/context metadata, and a status bar.
- `how-it-works.tsx` — step tabs driving a dark, copyable terminal panel.
- `benefits.tsx` — a permission prompt and audit-log table built from the same
  surface language as the app.
- `features.tsx` — a numbered, hairline-separated capability index rather than
  a card grid.

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
- The stack row and stats band (`stats`) use only facts from the brief
  (2GB minimum RAM, zero telemetry, MIT license, three platforms).

## Deployment

This is a standard Next.js app — deploy to Vercel, or any Node host:

```bash
npm run build
npm run start
```

Before going live, replace the placeholder domain (`https://zeno.example.com`)
in `src/app/layout.tsx`, `robots.ts`, and `sitemap.ts`.
