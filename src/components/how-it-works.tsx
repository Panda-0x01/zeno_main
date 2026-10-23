"use client";

import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, CircleCheck, ShieldCheck } from "lucide-react";
import { howItWorks } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = howItWorks[active];

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % howItWorks.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + howItWorks.length) % howItWorks.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = howItWorks.length - 1;
    }

    setActive(next);
    document.getElementById(`step-tab-${howItWorks[next].step}`)?.focus();
  }

  return (
    <section
      id="how-it-works"
      className="relative overflow-x-clip border-y border-white/[0.055] bg-white/[0.012]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="How it works"
          title="From ollama pull to a working assistant in four steps"
          description="Zeno's own quick-start, laid out as a path — install a model, launch the stack, talk to it, then extend it with plugins you control."
        />

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-1.5" role="tablist" aria-label="Quick-start steps">
              {howItWorks.map((item, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={item.step}
                    type="button"
                    role="tab"
                    id={`step-tab-${item.step}`}
                    aria-controls="step-panel"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className={cn(
                      "group relative w-full rounded-xl border px-4 py-4 text-left transition-colors duration-200 sm:px-5",
                      isActive
                        ? "border-white/[0.13] bg-white/[0.04]"
                        : "border-transparent hover:border-white/[0.06] hover:bg-white/[0.02]"
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="active-step-rail"
                        className="absolute inset-y-4 left-0 w-[2px] rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500"
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      />
                    ) : null}
                    <div className="flex items-start gap-4">
                      <span
                        className={cn(
                          "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border font-mono text-[10px] transition-colors",
                          isActive
                            ? "border-accent/30 bg-accent/[0.1] text-accent-text"
                            : "border-white/[0.08] bg-white/[0.02] text-muted-2"
                        )}
                      >
                        {item.step}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3
                          className={cn(
                            "text-[14px] font-medium tracking-tight transition-colors",
                            isActive ? "text-foreground" : "text-muted"
                          )}
                        >
                          {item.title}
                        </h3>
                        <div
                          className={cn(
                            "grid transition-all duration-300",
                            isActive
                              ? "mt-1.5 grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          )}
                        >
                          <p className="overflow-hidden text-[13px] leading-[1.6] text-muted-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        className={cn(
                          "mt-1 h-3.5 w-3.5 shrink-0 transition-all duration-300",
                          isActive
                            ? "translate-x-0 text-accent-text"
                            : "-translate-x-1 text-white/15"
                        )}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="mt-6 flex items-start gap-2 px-1 text-[12px] leading-relaxed text-muted-2">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-text" />
              Every layer runs on your machine. The only network calls Ollama
              makes are to itself.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative lg:sticky lg:top-24">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(52,211,153,0.12),transparent_75%)] blur-xl"
              />
              <div
                role="tabpanel"
                id="step-panel"
                aria-labelledby={`step-tab-${step.step}`}
                className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#080b0d] shadow-[0_40px_100px_-40px_rgba(0,0,0,0.95)]"
              >
                <div className="flex h-10 items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                  </div>
                  <span className="mx-auto font-mono text-[10px] text-muted-2">
                    zeno — zsh
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[9px] text-muted-2">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    local
                  </span>
                </div>

                <div className="min-h-[248px] p-4 font-mono text-[11.5px] leading-[1.95] sm:p-6 sm:text-[12.5px]">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-accent">$</span>
                    <span className="text-foreground">{step.command}</span>
                    <span className="caret" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="mt-1"
                    >
                      {step.output.map((line, i) => (
                        <motion.div
                          key={line}
                          initial={{ opacity: 0, x: -4 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.08 + i * 0.09, duration: 0.3 }}
                          className="flex items-start gap-2"
                        >
                          {i === step.output.length - 1 ? (
                            <CircleCheck className="mt-[5px] h-3 w-3 shrink-0 text-accent" />
                          ) : (
                            <span className="shrink-0 text-muted-2/50">›</span>
                          )}
                          <span
                            className={cn(
                              i === step.output.length - 1
                                ? "text-accent-text"
                                : "text-muted-2"
                            )}
                          >
                            {line}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.06] bg-white/[0.015] px-4 py-2.5 font-mono text-[9px] text-muted-2">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3 w-3 text-accent-text" />
                    sandboxed · encrypted · offline
                  </span>
                  <span>
                    step {step.step} / {String(howItWorks.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
