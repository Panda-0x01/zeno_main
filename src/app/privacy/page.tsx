import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Zeno handles data — local-first, with no telemetry by default.",
};

const codeClass =
  "rounded border border-line bg-paper-2 px-1.5 py-0.5 font-mono text-[12px] text-ink";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <div id="top" />
        <div className="mx-auto w-full max-w-[760px] px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[12.5px] text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back home
          </Link>

          <span className="mono-label rule-label mt-9 text-muted-2">Legal</span>
          <h1 className="mt-4 text-[clamp(34px,5vw,46px)] font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
            Privacy Policy
          </h1>
          <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-2">
            Last updated: 2026
          </p>

          <div className="mt-10 border-t border-line">
            <section className="border-b border-line py-8">
              <h2 className="text-[15px] font-semibold text-ink">
                Local-first by default
              </h2>
              <p className="mt-2.5 text-[14px] leading-7 text-muted">
                Zeno is designed so that all data stays on your machine by
                default. Chat history is stored locally in SQLite at
                <code className={`mx-1 ${codeClass}`}>~/.jarvis/history.db</code>
                , and audit logs are written to
                <code className={`mx-1 ${codeClass}`}>~/.jarvis/logs/</code>.
                Nothing is uploaded to Zeno or any third party as part of normal
                use.
              </p>
            </section>

            <section className="border-b border-line py-8">
              <h2 className="text-[15px] font-semibold text-ink">
                No telemetry
              </h2>
              <p className="mt-2.5 text-[14px] leading-7 text-muted">
                Zeno collects zero analytics or tracking data. There is no
                telemetry pipeline built into the desktop app.
              </p>
            </section>

            <section className="border-b border-line py-8">
              <h2 className="text-[15px] font-semibold text-ink">Encryption</h2>
              <p className="mt-2.5 text-[14px] leading-7 text-muted">
                Chat history can optionally be encrypted at rest using a
                password-derived key (PBKDF2 + AES-256-GCM). You control whether
                encryption is enabled.
              </p>
            </section>

            <section className="border-b border-line py-8">
              <h2 className="text-[15px] font-semibold text-ink">
                Model providers
              </h2>
              <p className="mt-2.5 text-[14px] leading-7 text-muted">
                Zeno talks to a local Ollama instance running on your machine. If
                you choose to enable optional cloud-connected features or
                third-party integrations, their own privacy practices apply —
                review them before enabling anything.
              </p>
            </section>

            <section className="border-b border-line py-8">
              <h2 className="text-[15px] font-semibold text-ink">
                Your responsibilities
              </h2>
              <p className="mt-2.5 text-[14px] leading-7 text-muted">
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
