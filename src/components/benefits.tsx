import {
  Check,
  CircleCheck,
  Fingerprint,
  Lock,
  ScanEye,
  ShieldCheck,
} from "lucide-react";
import { benefits } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const auditRows = [
  { label: "Outbound request blocked", time: "just now" },
  { label: "History encrypted at rest", time: "2 min ago" },
  { label: "Plugin run in sandbox", time: "5 min ago" },
];

export function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-violet/[0.05] blur-[110px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.92fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Security & privacy"
              title="A threat model, not a promise"
              description="Local-first isn't a slogan on Zeno's landing page — it's the storage layer, the sandbox, and the confirmation prompt in front of every action."
            />

            <RevealGroup className="mt-10 space-y-6">
              {benefits.map((b) => (
                <RevealItem key={b.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/[0.07]">
                    <Check className="h-4 w-4 text-accent-text" />
                  </span>
                  <div>
                    <h3 className="text-[14px] font-semibold tracking-tight text-foreground">
                      {b.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-[13px] leading-[1.7] text-muted">
                      {b.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-2">
                {["AES-256-GCM", "PBKDF2", "SQLite", "Strict CSP"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="mono-tag rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[9px] text-muted-2"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative mx-auto w-full max-w-[460px]">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 rounded-[40px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(52,211,153,0.14),transparent_70%)] blur-2xl"
              />

              {/* Permission prompt mock */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0a0e11]/95 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.95)] backdrop-blur-xl">
                <div className="flex items-center gap-2.5 border-b border-white/[0.07] px-5 py-3.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-amber-300/20 bg-amber-300/[0.08]">
                    <Lock className="h-3.5 w-3.5 text-amber-200" />
                  </span>
                  <div>
                    <p className="text-[12px] font-medium text-foreground">
                      Permission required
                    </p>
                    <p className="font-mono text-[9px] text-muted-2">
                      shell · requested by cleanup.py
                    </p>
                  </div>
                  <span className="ml-auto rounded-full border border-amber-300/20 bg-amber-300/[0.08] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-amber-200">
                    Review
                  </span>
                </div>

                <div className="p-5">
                  <div className="rounded-lg border border-white/[0.07] bg-black/40 px-3.5 py-3 font-mono text-[11px] text-muted">
                    <span className="text-accent">$</span>{" "}
                    <span className="text-foreground/90">
                      rm -rf ~/Library/Caches/old-builds
                    </span>
                  </div>
                  <p className="mt-3 text-[12px] leading-relaxed text-muted">
                    This command permanently deletes{" "}
                    <span className="text-foreground">1.2 GB</span> of cached
                    builds. Zeno never runs shell commands without asking.
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <span className="flex h-9 flex-1 items-center justify-center rounded-[9px] border border-white/[0.1] bg-white/[0.03] text-[12px] font-medium text-muted">
                      Deny
                    </span>
                    <span className="flex h-9 flex-[1.4] items-center justify-center gap-1.5 rounded-[9px] bg-[linear-gradient(135deg,#b8f7d8,#4ade80_60%,#22c55e)] text-[12px] font-semibold text-[#04120c]">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Allow once
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-muted-2">
                    <span>expires in 28s</span>
                    <span className="flex items-center gap-1">
                      <Fingerprint className="h-2.5 w-2.5" />
                      you approve every action
                    </span>
                  </div>
                </div>
              </div>

              {/* Audit log mock, offset behind */}
              <div className="relative z-10 -mt-3 ml-auto w-[92%] rotate-[1.2deg] overflow-hidden rounded-xl border border-white/[0.09] bg-[#0b0f12]/95 p-4 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-2">
                    <ScanEye className="h-3 w-3 text-accent-text" />
                    audit log
                  </span>
                  <span className="rounded border border-white/[0.07] px-1.5 py-0.5 font-mono text-[8px] text-muted-2">
                    local only
                  </span>
                </div>
                <div className="mt-2.5 space-y-1">
                  {auditRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center gap-2 rounded-md px-1.5 py-1.5"
                    >
                      <CircleCheck className="h-3 w-3 shrink-0 text-accent" />
                      <span className="text-[10.5px] text-muted">
                        {row.label}
                      </span>
                      <span className="ml-auto font-mono text-[8px] text-muted-2">
                        {row.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-20 -mt-4 flex w-fit items-center gap-2 rounded-xl border border-white/[0.1] bg-[#0b0f12] px-3.5 py-2.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)]">
                <Lock className="h-3.5 w-3.5 text-accent-text" />
                <span className="text-[11px] font-medium text-foreground">
                  History encrypted
                </span>
                <span className="font-mono text-[9px] text-muted-2">
                  AES-256-GCM
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
