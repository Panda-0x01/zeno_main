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
            Terms of Service
          </h1>
          <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.1em] text-muted-2">
            Last updated: 2026
          </p>

          <div className="mt-10 border-t border-line">
            <section className="border-b border-line py-8">
              <h2 className="text-[15px] font-semibold text-ink">License</h2>
              <p className="mt-2.5 text-[14px] leading-7 text-muted">
                Zeno&apos;s desktop application is free and open source, released
                under the MIT License. See the LICENSE file in the repository for
                full terms.
              </p>
            </section>

            <section className="border-b border-line py-8">
              <h2 className="text-[15px] font-semibold text-ink">
                Third-party components
              </h2>
              <p className="mt-2.5 text-[14px] leading-7 text-muted">
                Zeno bundles or integrates with several third-party projects,
                including Ollama, FastAPI, React, and Electron (all MIT
                licensed), and optionally Whisper (MIT), VOSK (Apache 2.0), and
                Porcupine (proprietary, with a free tier requiring an API key).
                Each retains its own license.
              </p>
            </section>

            <section className="border-b border-line py-8">
              <h2 className="text-[15px] font-semibold text-ink">Disclaimer</h2>
              <p className="mt-2.5 text-[14px] leading-7 text-muted">
                Zeno is a local-first AI assistant provided as-is. While security
                and privacy are prioritized in its design, you are responsible
                for securing your encryption password, reviewing plugin code
                before installation, understanding the capabilities and
                limitations of the models you run, and complying with the
                licenses of Ollama and any models you use.
              </p>
            </section>

            <section className="border-b border-line py-8">
              <h2 className="text-[15px] font-semibold text-ink">
                Paid support plans
              </h2>
              <p className="mt-2.5 text-[14px] leading-7 text-muted">
                Optional hosted or supported plans referenced on this site are
                offered separately from the free, open-source desktop app and may
                carry their own terms, communicated at signup.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
