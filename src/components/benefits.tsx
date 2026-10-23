import { CircleCheck, Lock, ShieldCheck, Terminal } from "lucide-react";
import { benefits } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const tags = ["AES-256-GCM", "PBKDF2", "SQLite", "Strict CSP"];

const auditRows = [
  {
    time: "14:32:07",
    event: "Outbound request blocked",
    status: "Blocked",
    tone: "bg-accent",
    text: "text-accent-ink",
  },
  {
    time: "14:31:54",
    event: "History encrypted at rest",
    status: "Encrypted",
    tone: "bg-success",
    text: "text-success",
  },
  {
    time: "14:29:10",
    event: "Plugin run in sandbox",
    status: "Sandboxed",
    tone: "bg-warning",
    text: "text-warning",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="border-b border-line">
      <div className="container-page py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Security & privacy"
              title="A threat model, not a promise."
              description="Local-first is not a slogan here. It is the storage layer, the sandbox, and the confirmation prompt in front of every action Zeno can take."
            />

            <ol className="mt-9 border-t border-line">
              {benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={Math.min(index * 0.04, 0.16)}>
                  <li className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-line py-4">
                    <span className="mono-label pt-1 text-muted-2">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="flex items-center gap-2 text-[13.5px] font-semibold text-ink">
                        <CircleCheck className="h-3.5 w-3.5 text-success" />
                        {benefit.title}
                      </h3>
                      <p className="mt-1 max-w-[44ch] text-[12.5px] leading-6 text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.18}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-line bg-surface px-2 py-1 font-mono text-[10px] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="mx-auto flex w-full max-w-[500px] flex-col gap-3">
              {/* Permission request */}
              <div className="overflow-hidden rounded-xl border border-line-strong bg-surface shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded border border-warning/25 bg-warning/[0.08]">
                    <Lock className="h-3 w-3 text-warning" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-medium text-ink">
                      Permission required
                    </p>
                    <p className="font-mono text-[9px] text-muted-2">
                      requested by cleanup.py
                    </p>
                  </div>
                  <span className="ml-auto rounded border border-line px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-[0.08em] text-muted">
                    Shell
                  </span>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 rounded-md bg-terminal px-3 py-2.5 font-mono text-[10.5px] text-terminal-text">
                    <span className="text-accent-on-dark">$</span>
                    <span className="truncate">
                      rm -rf ~/Library/Caches/old-builds
                    </span>
                  </div>

                  <p className="mt-3 text-[12px] leading-6 text-muted">
                    This command permanently deletes{" "}
                    <span className="font-medium text-ink">1.2 GB</span> of
                    cached builds. Zeno never runs shell commands on its own.
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="flex h-8 flex-1 items-center justify-center rounded-md border border-line-strong bg-surface text-[11.5px] font-medium text-ink">
                      Deny
                    </span>
                    <span className="flex h-8 flex-[1.35] items-center justify-center gap-1.5 rounded-md bg-ink text-[11.5px] font-medium text-paper">
                      <ShieldCheck className="h-3 w-3" />
                      Allow once
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-muted-2">
                    <span>expires in 28s</span>
                    <span>every action needs approval</span>
                  </div>
                </div>
              </div>

              {/* Audit log */}
              <div className="overflow-hidden rounded-xl border border-line bg-surface">
                <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                  <span className="flex items-center gap-2">
                    <Terminal className="h-3 w-3 text-muted-2" />
                    <span className="mono-label text-[9px] text-muted">
                      Audit log
                    </span>
                  </span>
                  <span className="font-mono text-[9px] text-muted-2">
                    last 24 hours
                  </span>
                </div>

                <div className="divide-y divide-line">
                  {auditRows.map((row) => (
                    <div
                      key={row.time}
                      className="grid grid-cols-[4.25rem_minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5"
                    >
                      <span className="font-mono text-[9.5px] text-muted-2 tabular-nums">
                        {row.time}
                      </span>
                      <span className="truncate text-[11.5px] text-ink-soft">
                        {row.event}
                      </span>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 font-mono text-[9px]",
                          row.text
                        )}
                      >
                        <span className={cn("h-1 w-1 rounded-full", row.tone)} />
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-line bg-paper-2/50 px-4 py-2 font-mono text-[9.5px] text-muted-2">
                  <span>stored locally</span>
                  <span>~/.jarvis/logs/</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
