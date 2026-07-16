# Zeno — Landing Page

A production-ready marketing site for **Zeno**, generated from `README.md`
(product copy) and the provided design reference (visual direction), built
with Next.js App Router, TypeScript, Tailwind CSS v4, hand-authored
shadcn/ui-style primitives, and Framer Motion.

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
    layout.tsx        # SEO metadata, Open Graph, JSON-LD, root shell
    page.tsx           # assembles all landing sections
    privacy/page.tsx    terms/page.tsx   # legal pages
    robots.ts  sitemap.ts
    globals.css         # design tokens (CSS variables) + Tailwind v4 theme
  components/
    ui/                # button, card, badge, accordion (shadcn/ui-style)
    motion/reveal.tsx   # scroll-reveal / stagger helpers (Framer Motion)
    signature/local-node-graph.tsx  # animated architecture diagram (signature visual)
    hero.tsx, features.tsx, how-it-works.tsx, benefits.tsx,
    pricing.tsx, faq.tsx, final-cta.tsx, site-header.tsx, site-footer.tsx
  lib/
    content.ts   # ALL page copy in one place, sourced from README.md
    utils.ts     # cn() class-merging helper
next.config.ts   # security headers (CSP, HSTS, X-Frame-Options, etc.)
```

## Notes on content sourcing

- `src/lib/content.ts` is the single source of truth for copy. Every section
  pulls from it rather than hardcoding text in components.
- Features, the "how it works" steps, security/benefits copy, and the FAQ are
  all derived directly from `README.md`.
- Pricing plans are **not** in the README (Zeno's desktop app is described as
  100% free/MIT-licensed) — they were added to satisfy the brief's pricing
  requirement and are clearly marked as inferred in `content.ts`, framed as
  an optional hosted/support tier on top of the free app.
- The hero countdown timer is a structural requirement from the brief, not a
  README fact; it's labeled generically ("next feature drop") rather than as
  a real commitment.

## Design system

Dark, local-first / terminal-inspired aesthetic (monospace display type,
warm amber accent, node-graph "beacon" motif) intentionally distinct from the
lighter reference mock — see `globals.css` for the full token set.

## Deployment

This is a standard Next.js app — deploy to Vercel, or any Node host:

```bash
npm run build
npm run start
```

Before going live, replace the placeholder domain (`https://zeno.example.com`)
in `src/app/layout.tsx`, `robots.ts`, and `sitemap.ts`, and add a real
`/public/og-image.png` (1200×630).
