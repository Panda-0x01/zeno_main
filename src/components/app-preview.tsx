import Image from "next/image";
import {
  ArrowUp,
  Check,
  Cpu,
  Lock,
  MessageSquare,
  Mic,
  MoreHorizontal,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const threads = [
  { title: "Summarize release notes", active: true },
  { title: "Refactor auth flow", active: false },
  { title: "Plan plugin permissions", active: false },
  { title: "Explain this stack trace", active: false },
];

export function AppPreview({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      {/* Ambient light behind the window */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-10 top-6 bottom-4 rounded-[40px] bg-[radial-gradient(50%_60%_at_50%_50%,rgba(52,211,153,0.22),rgba(52,211,153,0)_75%)] blur-2xl"
      />

      <div
        role="img"
        aria-label="Preview of the Zeno desktop app: a dark three-pane chat interface showing a local llama3.2 session, a streaming answer about release notes, and zero network requests."
        className="relative overflow-hidden rounded-2xl border border-white/[0.11] bg-[#080b0d]/95 shadow-[0_0_0_1px_rgba(0,0,0,0.6),0_50px_120px_-30px_rgba(0,0,0,0.95),0_0_80px_-20px_rgba(52,211,153,0.25)]"
      >
        <div aria-hidden className="select-none">
          {/* Window chrome */}
          <div className="flex h-11 items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
            </div>
            <div className="mx-auto hidden items-center gap-1.5 rounded-md border border-white/[0.06] bg-black/30 px-3 py-1 font-mono text-[10px] text-muted-2 sm:flex">
              <Lock className="h-2.5 w-2.5 text-accent-text" />
              zeno.local / chat
            </div>
            <div className="ml-auto flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.08] px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-accent-text">
                Local only
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[210px_1fr]">
            {/* Sidebar */}
            <aside className="hidden flex-col gap-1 border-r border-white/[0.06] bg-white/[0.012] p-3 md:flex">
              <div className="flex items-center gap-2 px-1.5 pb-3 pt-1">
                <span className="flex h-[20px] w-[20px] items-center justify-center overflow-hidden rounded-[5px] bg-white">
                  <Image
                    src="/zeno.png"
                    alt=""
                    width={16}
                    height={16}
                    className="rounded-[3px]"
                  />
                </span>
                <span className="text-[12px] font-semibold tracking-tight text-foreground">
                  zeno
                </span>
                <span className="ml-auto rounded border border-white/[0.08] px-1 py-0.5 font-mono text-[8px] text-muted-2">
                  v1.0
                </span>
              </div>

              <div className="mb-2 flex items-center gap-2 rounded-lg border border-dashed border-white/[0.12] px-2.5 py-2 text-[11px] text-muted">
                <Plus className="h-3 w-3" />
                New chat
                <span className="ml-auto rounded border border-white/[0.08] px-1 font-mono text-[8px] text-muted-2">
                  ⌘N
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-2.5 py-1.5 text-[11px] text-muted-2">
                <Search className="h-3 w-3" />
                Search history
              </div>

              <p className="mt-3 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-2">
                Today
              </p>
              {threads.map((t) => (
                <div
                  key={t.title}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px]",
                    t.active
                      ? "bg-accent/[0.09] text-foreground"
                      : "text-muted-2"
                  )}
                >
                  <MessageSquare
                    className={cn(
                      "h-3 w-3 shrink-0",
                      t.active ? "text-accent-text" : "text-muted-2"
                    )}
                  />
                  <span className="truncate">{t.title}</span>
                </div>
              ))}

              <div className="mt-4 rounded-lg border border-white/[0.07] bg-white/[0.02] p-2.5">
                <div className="flex items-center gap-1.5 text-[10px] text-muted">
                  <Cpu className="h-3 w-3 text-accent-text" />
                  <span className="font-mono">llama3.2 · 3B</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                  <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-accent to-emerald-500" />
                </div>
                <div className="mt-1.5 flex items-center justify-between font-mono text-[9px] text-muted-2">
                  <span>Context</span>
                  <span>5.1k / 8k</span>
                </div>
              </div>
            </aside>

            {/* Chat pane */}
            <div className="flex min-w-0 flex-col">
              <div className="flex items-center justify-between gap-3 border-b border-white/[0.05] px-4 py-3">
                <div>
                  <p className="text-[12px] font-medium text-foreground">
                    Local session
                  </p>
                  <p className="mt-0.5 font-mono text-[9px] text-muted-2">
                    ollama · llama3.2:3b · temp 0.7
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden items-center gap-1 rounded-md border border-accent/20 bg-accent/[0.07] px-2 py-1 font-mono text-[9px] text-accent-text sm:flex">
                    <ShieldCheck className="h-2.5 w-2.5" />
                    Encrypted
                  </span>
                  <MoreHorizontal className="h-3.5 w-3.5 text-muted-2" />
                </div>
              </div>

              <div className="flex flex-col gap-4 px-4 py-5 sm:px-5">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-xl rounded-tr-sm border border-white/[0.07] bg-white/[0.055] px-3.5 py-2.5 text-[12px] leading-relaxed text-foreground/90">
                    Summarize what changed in this release.
                  </div>
                </div>

                {/* Assistant message */}
                <div className="flex gap-2.5">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/[0.1]">
                    <Sparkles className="h-3 w-3 text-accent-text" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-medium text-foreground">
                        Zeno
                      </span>
                      <span className="rounded border border-white/[0.08] px-1 py-px font-mono text-[8px] text-muted-2">
                        local
                      </span>
                    </div>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
                      Here&apos;s the short version — everything below ran on
                      your machine:
                    </p>
                    <ul className="mt-2.5 space-y-1.5">
                      {[
                        "Voice pipeline now streams partial transcripts.",
                        "Plugin permissions are per-command, not global.",
                        "History is encrypted at rest with AES-256-GCM.",
                      ].map((line) => (
                        <li
                          key={line}
                          className="flex items-start gap-2 text-[12px] leading-relaxed text-muted"
                        >
                          <Check className="mt-[3px] h-3 w-3 shrink-0 text-accent" />
                          {line}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/[0.07] bg-black/30 px-3 py-2 font-mono text-[10px] text-muted">
                      <Terminal className="h-3 w-3 text-violet" />
                      <span className="truncate">
                        <span className="text-accent-text">$</span> npm run
                        build:win
                      </span>
                      <span className="caret ml-auto" />
                    </div>
                  </div>
                </div>

                {/* Streaming status */}
                <div className="flex items-center gap-2 pl-8 font-mono text-[9px] text-muted-2">
                  <span className="flex gap-0.5">
                    <span className="h-1 w-1 animate-pulse rounded-full bg-accent" />
                    <span className="h-1 w-1 animate-pulse rounded-full bg-accent [animation-delay:150ms]" />
                    <span className="h-1 w-1 animate-pulse rounded-full bg-accent [animation-delay:300ms]" />
                  </span>
                  streaming · 42 tok/s · 0 network requests
                </div>
              </div>

              {/* Composer */}
              <div className="mt-auto px-4 pb-4 sm:px-5">
                <div className="rounded-xl border border-white/[0.1] bg-white/[0.035] p-2.5 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)]">
                  <div className="flex items-center gap-2">
                    <span className="flex-1 text-[12px] text-muted-2">
                      Ask Zeno anything…
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.08] text-muted">
                        <Mic className="h-3 w-3" />
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-300 to-emerald-500 text-[#04120c]">
                        <ArrowUp className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-2 border-t border-white/[0.05] pt-2 font-mono text-[8px] uppercase tracking-[0.08em] text-muted-2">
                    <span className="text-accent-text">●</span> voice ready
                    <span className="opacity-40">/</span> ⌘K commands
                    <span className="opacity-40">/</span> 8k context
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating proof points */}
      <div className="pointer-events-none absolute -left-5 top-1/3 hidden items-center gap-2.5 rounded-xl border border-white/[0.1] bg-[#0b0f12]/95 px-3.5 py-2.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md lg:flex animate-float">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-accent/25 bg-accent/[0.12]">
          <ShieldCheck className="h-3.5 w-3.5 text-accent-text" />
        </span>
        <div>
          <p className="text-[11px] font-medium text-foreground">
            0 bytes uploaded
          </p>
          <p className="font-mono text-[9px] text-muted-2">
            all inference is local
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -right-4 bottom-16 hidden items-center gap-2.5 rounded-xl border border-white/[0.1] bg-[#0b0f12]/95 px-3.5 py-2.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md lg:flex animate-float"
        style={{ animationDelay: "1.8s" }}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-violet/25 bg-violet/[0.12]">
          <Mic className="h-3.5 w-3.5 text-violet" />
        </span>
        <div>
          <p className="text-[11px] font-medium text-foreground">
            Voice in, voice out
          </p>
          <p className="font-mono text-[9px] text-muted-2">
            whisper · offline STT
          </p>
        </div>
      </div>
    </div>
  );
}
