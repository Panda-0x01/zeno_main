"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";
import { AppPreview } from "@/components/app-preview";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-fade opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[820px] hero-aurora"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px] animate-drift"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] py-1.5 pl-3 pr-4 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
            <span className="text-[12px] text-muted">{hero.eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] text-foreground text-balance sm:text-6xl lg:text-[78px]"
          >
            {hero.headlineLines.map((line, i) => (
              <span
                key={line}
                className={
                  i === hero.headlineLines.length - 1
                    ? "block text-gradient"
                    : "block"
                }
              >
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14 }}
            className="mt-6 max-w-xl text-[15px] leading-[1.75] text-muted text-balance sm:text-[17px]"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a href={hero.secondaryCta.href}>
                <Terminal className="h-4 w-4 text-accent-text" />
                {hero.secondaryCta.label}
              </a>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            aria-label="Product highlights"
          >
            {hero.trust.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 text-[11px] text-muted-2"
              >
                <Check className="h-3 w-3 text-accent" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl sm:mt-20"
        >
          <AppPreview />
        </motion.div>
      </div>
    </section>
  );
}
