import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Zeno handles data — local-first, with no telemetry by default.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative flex-1 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px] hero-aurora opacity-70"
        />
        <div className="relative mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[12px] text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back home
          </Link>

          <div className="mt-7 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(52,211,153,0.45)]" />
            <span className="mono-tag text-[10px] text-muted">Legal</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[13px] text-muted-2">Last updated: 2026</p>

          <div className="card-surface mt-10 space-y-8 rounded-2xl p-6 text-[14px] leading-[1.8] text-muted sm:p-10 sm:text-[15px]">
            <section>
              <h2 className="mb-2 text-[15px] font-semibold text-foreground">
                Local-first by default
              </h2>
              <p>
                Zeno is designed so that all data stays on your machine by
                default. Chat history is stored locally in SQLite at
                <code className="mx-1 rounded-md border border-white/10 bg-white/[0.05] px-1.5 py-0.5 font-mono text-[12px] text-accent-text">
                  ~/.jarvis/history.db
                </code>
                , and audit logs are written to
                <code className="mx-1 rounded-md border border-white/10 bg-white/[0.05] px-1.5 py-0.5 font-mono text-[12px] text-accent-text">
                  ~/.jarvis/logs/
                </code>
                . Nothing is uploaded to Zeno or any third party as part of
                normal use.
              </p>
            </section>
            <section className="border-t border-white/[0.06] pt-8">
              <h2 className="mb-2 text-[15px] font-semibold text-foreground">
                No telemetry
              </h2>
              <p>
                Zeno collects zero analytics or tracking data. There is no
                telemetry pipeline built into the desktop app.
              </p>
            </section>
            <section className="border-t border-white/[0.06] pt-8">
              <h2 className="mb-2 text-[15px] font-semibold text-foreground">
                Encryption
              </h2>
              <p>
                Chat history can optionally be encrypted at rest using a
                password-derived key (PBKDF2 + AES-256-GCM). You control whether
                encryption is enabled.
              </p>
            </section>
            <section className="border-t border-white/[0.06] pt-8">
              <h2 className="mb-2 text-[15px] font-semibold text-foreground">
                Model providers
              </h2>
              <p>
                Zeno talks to a local Ollama instance running on your machine.
                If you choose to enable optional cloud-connected features or
                third-party integrations, their own privacy practices apply —
                review them before enabling anything.
              </p>
            </section>
            <section className="border-t border-white/[0.06] pt-8">
              <h2 className="mb-2 text-[15px] font-semibold text-foreground">
                Your responsibilities
              </h2>
              <p>
                As with any local-first tool, you are responsible for securing
                your encryption password, reviewing any third-party plugin code
                before installing it, and complying with the license terms of
                Ollama and any models you choose to run.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
