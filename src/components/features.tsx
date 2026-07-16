"use client";

import { Bot, Mic, ShieldCheck, Sparkles, Blocks, Cpu, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { features } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

const ICONS: Record<string, LucideIcon> = {
  Bot,
  Mic,
  ShieldCheck,
  Sparkles,
  Blocks,
  Cpu,
};

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Platform"
        title="Everything the assistant needs, none of the cloud it doesn't"
        description="Zeno bundles model access, voice, security, and extensibility into one desktop app — each piece pulled straight from the codebase, not a marketing layer on top of it."
      />

      <RevealGroup className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => {
          const Icon = ICONS[f.icon];
          return (
            <RevealItem key={f.title}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="neu neu-hover group h-full rounded-2xl p-6"
              >
                <div className="neu-in-lg flex h-10 w-10 items-center justify-center rounded-xl text-accent-text">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <h3 className="mt-5 text-[15px] font-semibold tracking-tight text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {f.description}
                </p>
              </motion.div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
