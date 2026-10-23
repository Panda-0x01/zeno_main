"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { finalCta, site } from "@/lib/content";

const outputs = [
  "ollama     ready  :11434",
  "fastapi    ready  :8000",
  "renderer   ready  :5173",
];

export function FinalCta() {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(finalCta.quickstart);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // The command stays visible if clipboard access is blocked.
    }
  }

  return (
    <section className="bg-ink text-paper">
      <div className="container-page py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-20">
          <div>
            <span className="mono-label text-accent-on-dark">
              {finalCta.eyebrow}
            </span>

            <h2 className="mt-6 max-w-[20ch] text-balance text-[clamp(34px,4.3vw,50px)] font-semibold leading-[1.05] tracking-[-0.04em]">
              {finalCta.headline}
            </h2>

            <p className="mt-5 max-w-[48ch] text-[15px] leading-7 text-paper/65">
              {finalCta.sub}
            </p>

            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
              <Button asChild variant="invert" size="lg">
                <a href={finalCta.primaryCta.href}>
                  {finalCta.primaryCta.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="invertOutline" size="lg">
                <a href={finalCta.secondaryCta.href}>
                  {finalCta.secondaryCta.label}
                </a>
              </Button>
            </div>

            <p className="mono-label mt-7 text-paper/55">
              Free · MIT · No account required
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-terminal">
            <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-terminal-2 px-3.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
              <span className="mx-auto font-mono text-[9.5px] text-terminal-muted">
                quickstart — zsh
              </span>
              <button
                type="button"
                onClick={copyCommand}
                className="inline-flex min-h-6 items-center gap-1.5 rounded px-2 py-1 font-mono text-[9px] text-terminal-muted transition-colors hover:bg-white/5 hover:text-terminal-text"
                aria-label={`Copy command: ${finalCta.quickstart}`}
              >
                {copied ? (
                  <Check className="h-3 w-3 text-[#8fce9f]" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="no-scrollbar overflow-x-auto p-4 font-mono text-[10.5px] leading-[2] sm:p-5 sm:text-[11.5px]">
              <div className="flex gap-2 whitespace-nowrap">
                <span className="text-accent-on-dark">$</span>
                <span className="text-terminal-text">{finalCta.clone}</span>
              </div>
              <div className="flex gap-2 whitespace-nowrap">
                <span className="text-accent-on-dark">$</span>
                <span className="text-terminal-text">
                  cd zeno_main && {finalCta.quickstart}
                </span>
              </div>

              <div className="mt-2 space-y-0.5">
                {outputs.map((line) => (
                  <div key={line} className="flex items-center gap-2">
                    <Check className="h-3 w-3 shrink-0 text-[#8fce9f]" />
                    <span className="text-[#9ed3ab]">{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 bg-terminal-2 px-3.5 py-2.5 font-mono text-[9px] text-terminal-muted">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8fce9f]" />
                runs offline after setup
              </span>
              <span>Windows · macOS · Linux</span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[10px] text-paper/55">
          <span>{site.version} · Public beta</span>
          <a
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-6 items-center transition-colors hover:text-paper/70"
          >
            github.com/Panda-0x01/zeno_main
          </a>
        </div>
      </div>
    </section>
  );
}
