"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/countdown";
import { finalCta } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta() {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(finalCta.quickstart);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard access can be blocked; the command stays visible to copy.
    }
  }

  return (
    <section className="relative px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal>
        <div className="ring-gradient relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#080b0d]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-fade opacity-60"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/[0.16] blur-[110px] animate-drift"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-violet/[0.1] blur-[90px]"
          />

          <div className="relative flex flex-col items-center px-6 py-16 text-center sm:px-16 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
              <span className="mono-tag text-[9px] text-muted">
                {finalCta.eyebrow}
              </span>
            </motion.div>

            <div className="mt-7">
              <Countdown />
            </div>

            <h2 className="mt-7 max-w-3xl text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-foreground text-balance sm:text-5xl lg:text-[58px]">
              {finalCta.headlineLead}
              <br className="hidden sm:block" />{" "}
              <span className="text-gradient">{finalCta.headlineAccent}</span>
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted text-balance sm:text-base">
              {finalCta.sub}
            </p>

            <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={finalCta.primaryCta.href}>
                  {finalCta.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href={finalCta.secondaryCta.href}>
                  {finalCta.secondaryCta.label}
                </a>
              </Button>
            </div>

            <div className="mt-9 flex flex-col items-center gap-2.5">
              <span className="mono-tag text-[8px] text-muted-2">
                or start from the command line
              </span>
              <button
                type="button"
                onClick={copyCommand}
                className="group inline-flex items-center gap-2.5 rounded-lg border border-white/[0.09] bg-black/40 px-3.5 py-2 font-mono text-[11px] text-muted transition-colors hover:border-white/[0.16] hover:text-foreground"
                aria-label={`Copy command: ${finalCta.quickstart}`}
              >
                <Terminal className="h-3.5 w-3.5 text-violet" />
                <span>
                  <span className="text-accent">$</span>{" "}
                  {finalCta.quickstart}
                </span>
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-accent" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-muted-2 transition-colors group-hover:text-foreground" />
                )}
                <span className="sr-only" role="status">
                  {copied ? "Copied to clipboard" : ""}
                </span>
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
