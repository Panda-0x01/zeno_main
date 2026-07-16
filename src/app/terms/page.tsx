import type { Metadata } from "next";
import Link from "next/link";
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
      <main className="flex-1 mx-auto max-w-3xl px-5 sm:px-8 pt-32 pb-24">
        <Link href="/" className="text-sm text-accent hover:underline">
          ← Back home
        </Link>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-muted-2">Last updated: 2026</p>

        <div className="mt-10 space-y-8 text-sm sm:text-[15px] leading-relaxed text-muted">
          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">License</h2>
            <p>
              Zeno&apos;s desktop application is free and open source, released
              under the MIT License. See the LICENSE file in the repository
              for full terms.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">Third-party components</h2>
            <p>
              Zeno bundles or integrates with several third-party projects,
              including Ollama, FastAPI, React, and Electron (all MIT
              licensed), and optionally Whisper (MIT), VOSK (Apache 2.0), and
              Porcupine (proprietary, with a free tier requiring an API key).
              Each retains its own license.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">Disclaimer</h2>
            <p>
              Zeno is a local-first AI assistant provided as-is. While
              security and privacy are prioritized in its design, you are
              responsible for securing your encryption password, reviewing
              plugin code before installation, understanding the capabilities
              and limitations of the models you run, and complying with the
              licenses of Ollama and any models you use.
            </p>
          </section>
          <section>
            <h2 className="text-foreground font-semibold text-base mb-2">Paid support plans</h2>
            <p>
              Optional hosted or supported plans referenced on this site are
              offered separately from the free, open-source desktop app and
              may carry their own terms, communicated at signup.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
