"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { finalCta } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24 sm:pb-32">
      <div className="neu relative overflow-hidden rounded-3xl px-6 py-16 sm:px-16 sm:py-20 text-center">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[110px]"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-5xl tracking-tight text-foreground text-balance max-w-2xl mx-auto">
              {finalCta.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-5 text-muted text-base sm:text-lg max-w-xl mx-auto text-balance">
              {finalCta.sub}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg">
                <a href={finalCta.primaryCta.href}>
                  {finalCta.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={finalCta.secondaryCta.href}>{finalCta.secondaryCta.label}</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
