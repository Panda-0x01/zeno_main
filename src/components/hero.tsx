"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/countdown";
import { hero } from "@/lib/content";
import { LocalNodeGraph } from "@/components/signature/local-node-graph";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-200px] h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]"
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="neu-sm mono-tag inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] text-signal"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-8 text-4xl sm:text-6xl tracking-tight leading-[1.05] uppercase text-foreground"
        >
          Think. Create.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-8"
        >
          <Countdown />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.24 }}
        className="relative mx-auto mt-14 max-w-3xl px-5"
      >
        <LocalNodeGraph className="mx-auto h-auto w-full max-w-2xl" />
      </motion.div>

      <div className="relative mx-auto max-w-2xl px-5 sm:px-8 flex flex-col items-center text-center -mt-2">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-3xl sm:text-5xl tracking-tight uppercase text-foreground"
        >
          Stay local.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed text-balance"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <Button asChild size="lg">
            <a href={hero.primaryCta.href}>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-foreground" />
              </span>
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={hero.secondaryCta.href}>
              <Terminal className="h-4 w-4" />
              {hero.secondaryCta.label}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
