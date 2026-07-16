import type { Metadata } from "next";
import Link from "next/link";
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
      <main className="flex-1 mx-auto max-w-3xl px-5 sm:px-8 pt-32 pb-24">
        <Link href="/" className="text-sm text-accent hover:underline">
          ← Back home
        </Link>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-2">Last updated: 2026</p>

        <div className="mt-10 space-y-8 text-sm sm:text-[15px] leading-relaxed text-muted">
          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">Local-first by default</h2>
            <p>
              Zeno is designed so that all data stays on your machine by
              default. Chat history is stored locally in SQLite at
              <code className="mx-1 rounded bg-surface px-1.5 py-0.5 text-[13px] font-mono">
                ~/.jarvis/history.db
              </code>
              , and audit logs are written to
              <code className="mx-1 rounded bg-surface px-1.5 py-0.5 text-[13px] font-mono">
                ~/.jarvis/logs/
              </code>
              . Nothing is uploaded to Zeno or any third party as part of normal use.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">No telemetry</h2>
            <p>
              Zeno collects zero analytics or tracking data. There is no
              telemetry pipeline built into the desktop app.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">Encryption</h2>
            <p>
              Chat history can optionally be encrypted at rest using a
              password-derived key (PBKDF2 + AES-256-GCM). You control whether
              encryption is enabled.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">Model providers</h2>
            <p>
              Zeno talks to a local Ollama instance running on your machine.
              If you choose to enable optional cloud-connected features or
              third-party integrations, their own privacy practices apply —
              review them before enabling anything.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">Your responsibilities</h2>
            <p>
              As with any local-first tool, you are responsible for securing
              your encryption password, reviewing any third-party plugin code
              before installing it, and complying with the license terms of
              Ollama and any models you choose to run.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
