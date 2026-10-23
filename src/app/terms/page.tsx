import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using Zeno, an MIT-licensed open source project.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-3 text-[13px] text-muted-2">Last updated: 2026</p>

          <div className="card-surface mt-10 space-y-8 rounded-2xl p-6 text-[14px] leading-[1.8] text-muted sm:p-10 sm:text-[15px]">
            <section>
              <h2 className="mb-2 text-[15px] font-semibold text-foreground">
                License
              </h2>
              <p>
                Zeno&apos;s desktop application is free and open source, released
                under the MIT License. See the LICENSE file in the repository
                for full terms.
              </p>
            </section>
            <section className="border-t border-white/[0.06] pt-8">
              <h2 className="mb-2 text-[15px] font-semibold text-foreground">
                Third-party components
              </h2>
              <p>
                Zeno bundles or integrates with several third-party projects,
                including Ollama, FastAPI, React, and Electron (all MIT
                licensed), and optionally Whisper (MIT), VOSK (Apache 2.0), and
                Porcupine (proprietary, with a free tier requiring an API key).
                Each retains its own license.
              </p>
            </section>
            <section className="border-t border-white/[0.06] pt-8">
              <h2 className="mb-2 text-[15px] font-semibold text-foreground">
                Disclaimer
              </h2>
              <p>
                Zeno is a local-first AI assistant provided as-is. While
                security and privacy are prioritized in its design, you are
                responsible for securing your encryption password, reviewing
                plugin code before installation, understanding the capabilities
                and limitations of the models you run, and complying with the
                licenses of Ollama and any models you use.
              </p>
            </section>
            <section className="border-t border-white/[0.06] pt-8">
              <h2 className="mb-2 text-[15px] font-semibold text-foreground">
                Paid support plans
              </h2>
              <p>
                Optional hosted or supported plans referenced on this site are
                offered separately from the free, open-source desktop app and
                may carry their own terms, communicated at signup.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
