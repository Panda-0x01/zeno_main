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
  Settings2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const threads = [
  { title: "Release recap", active: true },
  { title: "Refactor auth flow", active: false },
  { title: "Plugin permissions", active: false },
  { title: "Explain this stack trace", active: false },
];

const sessionRows = [
  { label: "Model", value: "llama3.2:3b" },
  { label: "Context", value: "5.1k / 8k" },
  { label: "Network", value: "None" },
  { label: "Storage", value: "Encrypted" },
  { label: "Voice", value: "Ready" },
];

export function AppPreview({ className }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Preview of the Zeno desktop app: a light three-pane chat interface on a local llama3.2 model, showing a release summary, a code block, and a session panel confirming zero outbound requests."
      className={cn(
        "window-shadow overflow-hidden rounded-xl border border-line-strong bg-surface",
        className
      )}
    >
      <div aria-hidden className="select-none">
        {/* Window chrome */}
        <div className="flex h-10 items-center gap-3 border-b border-line bg-paper-2/70 px-3.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e0a09a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e2c48d]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#a8c3a0]" />
          </div>
          <span className="mx-auto flex items-center gap-1.5 font-mono text-[10px] text-muted-2">
            <Lock className="h-2.5 w-2.5" />
            Zeno — Local session
          </span>
          <span className="rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[9px] text-muted-2">
            ⌘K
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[204px_1fr] lg:grid-cols-[204px_1fr_186px]">
          {/* Sidebar */}
          <aside className="hidden flex-col border-r border-line bg-paper-2/40 p-3 md:flex">
            <div className="flex items-center gap-2 px-1 pb-3">
              <span className="flex h-[22px] w-[22px] items-center justify-center overflow-hidden rounded-[4px]">
                <Image
                  src="/zeno.png"
                  alt=""
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px]"
                  style={{ filter: "invert(1)" }}
                />
              </span>
              <span className="text-[12px] font-semibold tracking-tight text-ink">
                zeno
              </span>
              <span className="ml-auto font-mono text-[8px] text-muted-2">
                v0.9.0
              </span>
            </div>

            <button
              type="button"
              tabIndex={-1}
              className="flex items-center gap-2 rounded-md border border-line-strong bg-surface px-2.5 py-1.5 text-[11px] font-medium text-ink shadow-[0_1px_1px_rgba(23,21,15,0.04)]"
            >
              <Plus className="h-3 w-3" />
              New chat
              <span className="ml-auto font-mono text-[8px] text-muted-2">
                ⌘N
              </span>
            </button>

            <div className="mt-2 flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] text-muted">
              <Search className="h-3 w-3" />
              Search
              <span className="ml-auto font-mono text-[8px] text-muted-2">
                ⌘F
              </span>
            </div>

            <p className="mono-label mt-4 px-1 pb-1 text-[8.5px] text-muted-2">
              Today
            </p>
            <div className="flex flex-col gap-0.5">
              {threads.map((thread) => (
                <div
                  key={thread.title}
                  className={cn(
                    "flex items-center gap-2 rounded-md border px-2 py-1.5 text-[11px]",
                    thread.active
                      ? "border-line bg-surface text-ink shadow-[0_1px_1px_rgba(23,21,15,0.04)]"
                      : "border-transparent text-muted"
                  )}
                >
                  <MessageSquare className="h-3 w-3 shrink-0 text-muted-2" />
                  <span className="truncate">{thread.title}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-4">
              <div className="rounded-md border border-line bg-surface p-2.5">
                <div className="flex items-center gap-1.5">
                  <Cpu className="h-3 w-3 text-muted-2" />
                  <span className="font-mono text-[9.5px] text-ink">
                    llama3.2:3b
                  </span>
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-success" />
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-paper-2">
                  <div className="h-full w-[62%] rounded-full bg-ink/60" />
                </div>
                <div className="mt-1.5 flex items-center justify-between font-mono text-[8.5px] text-muted-2">
                  <span>Context</span>
                  <span>5.1k / 8k</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Chat */}
          <div className="flex min-w-0 flex-col bg-surface">
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
              <div className="min-w-0">
                <p className="truncate text-[12px] font-medium text-ink">
                  Release recap
                </p>
                <p className="mt-0.5 truncate font-mono text-[9px] text-muted-2">
                  ollama · llama3.2:3b · temp 0.7
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden items-center gap-1.5 font-mono text-[9px] text-success sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-success" />
                  Local
                </span>
                <Settings2 className="h-3.5 w-3.5 text-muted-2" />
                <MoreHorizontal className="h-3.5 w-3.5 text-muted-2" />
              </div>
            </div>

            <div className="flex flex-col gap-4 px-4 py-4 sm:px-5">
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-lg rounded-br-sm border border-line bg-paper-2/70 px-3 py-2 text-[11.5px] leading-relaxed text-ink-soft">
                  Summarise what changed in this release.
                </div>
              </div>

              <div className="flex gap-2.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-[4px] border border-line bg-white">
                  <Image
                    src="/zeno.png"
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-ink">
                      Zeno
                    </span>
                    <span className="rounded border border-line px-1 py-px font-mono text-[8px] uppercase tracking-[0.06em] text-muted-2">
                      local
                    </span>
                  </div>

                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted">
                    Here is the short version. Everything below ran on this
                    machine:
                  </p>

                  <ul className="mt-2 space-y-1.5">
                    {[
                      "Voice now streams partial transcripts.",
                      "Plugin permissions are per-command, not global.",
                      "History is encrypted at rest with AES-256-GCM.",
                    ].map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2 text-[11.5px] leading-relaxed text-ink-soft"
                      >
                        <Check className="mt-[3px] h-3 w-3 shrink-0 text-success" />
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex items-center gap-2 rounded-md bg-terminal px-2.5 py-2 font-mono text-[9.5px] text-terminal-text">
                    <span className="text-accent-on-dark">$</span>
                    <span className="truncate">npm run build:win</span>
                    <span className="caret ml-auto" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pl-[34px] font-mono text-[8.5px] text-muted-2">
                <span className="flex gap-0.5">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  <span className="h-1 w-1 rounded-full bg-accent/60" />
                  <span className="h-1 w-1 rounded-full bg-accent/30" />
                </span>
                streaming · 42 tok/s · 0 outbound requests
              </div>
            </div>

            <div className="mt-auto px-4 pb-4 sm:px-5">
              <div className="rounded-lg border border-line-strong bg-surface p-2">
                <div className="flex items-center gap-2 px-1">
                  <span className="flex-1 text-[11.5px] text-muted-2">
                    Ask Zeno anything…
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded border border-line text-muted">
                    <Mic className="h-3 w-3" />
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-ink text-paper">
                    <ArrowUp className="h-3 w-3" />
                  </span>
                </div>
                <div className="mt-1.5 flex items-center gap-2 border-t border-line px-1 pt-1.5 font-mono text-[8px] uppercase tracking-[0.06em] text-muted-2">
                  <span>↵ send</span>
                  <span className="text-line-strong">/</span>
                  <span>⇧↵ newline</span>
                  <span className="text-line-strong">/</span>
                  <span>⌘K commands</span>
                </div>
              </div>
            </div>
          </div>

          {/* Session rail */}
          <aside className="hidden flex-col border-l border-line bg-paper-2/40 p-3 lg:flex">
            <p className="mono-label px-1 text-[8.5px] text-muted-2">Session</p>
            <dl className="mt-2.5 divide-y divide-line">
              {sessionRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-2 py-2"
                >
                  <dt className="text-[10.5px] text-muted">{row.label}</dt>
                  <dd className="font-mono text-[9.5px] text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-3 rounded-md border border-line bg-surface p-2.5">
              <div className="flex items-center gap-1.5">
                <Lock className="h-3 w-3 text-success" />
                <span className="text-[10px] font-medium text-ink">
                  Local only
                </span>
              </div>
              <p className="mt-1.5 text-[10px] leading-relaxed text-muted-2">
                History, voice and inference stay on this device.
              </p>
            </div>

            <p className="mt-auto pt-4 font-mono text-[8px] leading-relaxed text-muted-2">
              ZENO 0.9.0
              <br />
              ELECTRON · FASTAPI
            </p>
          </aside>
        </div>

        {/* Status bar */}
        <div className="flex h-7 items-center justify-between border-t border-line bg-paper-2/60 px-3.5 font-mono text-[8.5px] text-muted-2">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            ollama:11434 · connected
          </span>
          <span className="hidden sm:inline">42 tok/s · 5.1k / 8k context</span>
          <span>0 outbound</span>
        </div>
      </div>
    </div>
  );
}
