"use client";

import type { MouseEvent, ReactNode } from "react";
import {
  ArrowRight,
  Blocks,
  Bot,
  Cpu,
  Mic,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Bot,
  Mic,
  ShieldCheck,
  Sparkles,
  Blocks,
  Cpu,
  MonitorSmartphone,
};

const TONES: Record<string, string> = {
  "Voice in, voice out": "border-violet/20 bg-violet/[0.08] text-violet",
  "Plugin system": "border-indigo/20 bg-indigo/[0.08] text-indigo",
  "Cross-platform": "border-indigo/20 bg-indigo/[0.08] text-indigo",
};

function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={cn(
        "card-surface card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-7",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Platform"
            title="Everything the assistant needs, none of the cloud it doesn't"
            description="Zeno bundles model access, voice, security, and extensibility into one desktop app — each piece pulled straight from the codebase, not a marketing layer on top of it."
          />
          <Reveal delay={0.15} className="shrink-0">
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors hover:text-foreground"
            >
              See how it runs
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] transition-colors group-hover:border-accent/30 group-hover:text-accent-text">
                <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
          stagger={0.07}
        >
          {/* Hero feature: Ollama */}
          <RevealItem className="sm:col-span-2 lg:col-span-4">
            <SpotlightCard>
              <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-[320px]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent-text">
                    <Bot className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="mt-5 text-[15px] font-semibold tracking-tight text-foreground">
                    {features[0].title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.65] text-muted">
                    {features[0].description}
                  </p>
                  <div className="mt-5">
                    <span className="mono-tag inline-flex items-center rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 text-[9px] text-muted-2">
                      {features[0].meta}
                    </span>
                  </div>
                </div>

                {/* Mini model manager */}
                <div className="w-full shrink-0 rounded-xl border border-white/[0.08] bg-black/30 p-3 sm:max-w-[250px]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-2">
                      Models
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[9px] text-accent-text">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      ollama:11434
                    </span>
                  </div>
                  <div className="mt-2.5 space-y-1">
                    {[
                      { name: "llama3.2:3b", state: "active", pct: 100 },
                      { name: "mistral:7b", state: "ready", pct: 100 },
                      { name: "phi-3:mini", state: "pull 64%", pct: 64 },
                    ].map((m) => (
                      <div
                        key={m.name}
                        className={cn(
                          "rounded-lg border px-2.5 py-2",
                          m.state === "active"
                            ? "border-accent/25 bg-accent/[0.07]"
                            : "border-white/[0.05] bg-white/[0.015]"
                        )}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate font-mono text-[10px] text-foreground/90">
                            {m.name}
                          </span>
                          <span
                            className={cn(
                              "shrink-0 font-mono text-[8px]",
                              m.state === "active"
                                ? "text-accent-text"
                                : "text-muted-2"
                            )}
                          >
                            {m.state}
                          </span>
                        </div>
                        <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-emerald-500"
                            style={{ width: `${m.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </RevealItem>

          {features.slice(1).map((f) => {
            const Icon = ICONS[f.icon] ?? Sparkles;
            const wide = f.title === "Low-end PC support" || f.title === "Cross-platform";
            return (
              <RevealItem
                key={f.title}
                className={wide ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <SpotlightCard>
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl border",
                      TONES[f.title] ??
                        "border-accent/20 bg-accent/[0.08] text-accent-text"
                    )}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="mt-5 text-[15px] font-semibold tracking-tight text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.65] text-muted">
                    {f.description}
                  </p>
                  <div className="mt-auto pt-5">
                    <span className="mono-tag inline-flex items-center rounded-full border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 text-[9px] text-muted-2">
                      {f.meta}
                    </span>
                  </div>
                </SpotlightCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
