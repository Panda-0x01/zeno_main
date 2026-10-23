"use client";

import { useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  Copy,
  ShieldCheck,
} from "lucide-react";
import { howItWorks } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const step = howItWorks[active];

  function select(index: number) {
    setActive(index);
    setCopied(false);
  }

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(step.command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // The command is always visible and selectable if the clipboard blocks.
    }
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    const keys = [
      "ArrowRight",
      "ArrowDown",
      "ArrowLeft",
      "ArrowUp",
      "Home",
      "End",
    ];
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

    select(next);
    document.getElementById(`step-tab-${howItWorks[next].step}`)?.focus();
  }

  return (
    <section id="how-it-works" className="border-b border-line bg-surface">
      <div className="container-page py-20 sm:py-28">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionHeading
            eyebrow="Quickstart"
            title="From ollama pull to a working assistant."
            description="Zeno's own four-step setup, laid out as a path: pull a model, launch the stack, talk to it, then extend it with plugins you control."
          />
          <p className="mono-label hidden text-muted-2 lg:block">
            Four steps · about ten minutes
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <div
              role="tablist"
              aria-label="Quickstart steps"
              className="border-t border-line"
            >
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
                    onClick={() => select(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className="group flex w-full items-start gap-5 border-b border-line py-5 text-left transition-colors"
                  >
                    <span
                      className={cn(
                        "mono-label pt-0.5 transition-colors",
                        isActive ? "text-accent-ink" : "text-muted-2"
                      )}
                    >
                      {item.step}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-4">
                        <span
                          className={cn(
                            "text-[14.5px] font-medium tracking-[-0.01em] transition-colors",
                            isActive ? "text-ink" : "text-muted"
                          )}
                        >
                          {item.title}
                        </span>
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 shrink-0 transition-all duration-200",
                            isActive
                              ? "translate-x-0 text-accent-ink"
                              : "-translate-x-1 text-line-strong group-hover:translate-x-0"
                          )}
                        />
                      </span>
                      <span
                        className={cn(
                          "grid transition-all duration-300",
                          isActive
                            ? "mt-1.5 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <span className="overflow-hidden text-[13px] leading-6 text-muted">
                          {item.description}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-5 flex items-start gap-2 text-[12px] leading-6 text-muted-2">
              <ShieldCheck className="mt-1 h-3.5 w-3.5 shrink-0 text-success" />
              Every layer runs on your machine. Nothing leaves the device
              during setup or use.
            </p>
          </div>

          <Reveal delay={0.08}>
            <div className="relative lg:sticky lg:top-24">
              <div
                role="tabpanel"
                id="step-panel"
                aria-labelledby={`step-tab-${step.step}`}
                className="overflow-hidden rounded-xl border border-[#2c2820] bg-terminal shadow-[0_20px_40px_-32px_rgba(23,21,15,0.6)]"
              >
                <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-terminal-2 px-3.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                    <span className="h-2 w-2 rounded-full bg-white/15" />
                  </div>
                  <span className="mx-auto font-mono text-[9.5px] text-terminal-muted">
                    zeno — zsh
                  </span>
                  <button
                    type="button"
                    onClick={copyCommand}
                    className="inline-flex min-h-6 items-center gap-1.5 rounded px-2 py-1 font-mono text-[9px] text-terminal-muted transition-colors hover:bg-white/5 hover:text-terminal-text"
                    aria-label={`Copy command: ${step.command}`}
                  >
                    {copied ? (
                      <Check className="h-3 w-3 text-[#8fce9f]" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <div className="min-h-[236px] p-4 font-mono text-[11.5px] leading-[2] sm:p-6 sm:text-[12.5px]">
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-accent-on-dark">$</span>
                    <span className="text-terminal-text">{step.command}</span>
                    <span className="caret" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="mt-1"
                    >
                      {step.output.map((line, index) => {
                        const isLast = index === step.output.length - 1;
                        return (
                          <motion.div
                            key={line}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                              delay: 0.05 + index * 0.07,
                              duration: 0.25,
                            }}
                            className="flex items-start gap-2"
                          >
                            {isLast ? (
                              <Check className="mt-[6px] h-3 w-3 shrink-0 text-[#8fce9f]" />
                            ) : (
                              <span
                                aria-hidden
                                className="shrink-0 text-terminal-muted/50"
                              >
                                ›
                              </span>
                            )}
                            <span
                              className={cn(
                                isLast
                                  ? "text-[#9ed3ab]"
                                  : "text-terminal-muted"
                              )}
                            >
                              {line}
                            </span>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 bg-terminal-2 px-3.5 py-2.5 font-mono text-[9px] text-terminal-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8fce9f]" />
                    sandboxed · offline
                  </span>
                  <span>
                    step {step.step} /{" "}
                    {String(howItWorks.length).padStart(2, "0")}
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
