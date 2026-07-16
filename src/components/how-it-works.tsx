import { howItWorks, architectureLayers } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-16">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="From ollama pull to a working assistant in four steps"
              description="Zeno's own quick-start, laid out as a path — install a model, launch the stack, talk to it, then extend it with plugins you control."
            />

            <RevealGroup className="mt-12 space-y-8">
              {howItWorks.map((step) => (
                <RevealItem key={step.step} className="flex gap-5">
                  <span className="font-display text-sm text-accent-text shrink-0 pt-0.5">
                    {step.step}
                  </span>
                  <div className="border-l border-border-strong pl-5">
                    <h3 className="text-[15px] font-semibold text-foreground tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <Reveal delay={0.15}>
            <div className="neu rounded-2xl p-6 sm:p-8 h-fit lg:sticky lg:top-28">
              <p className="mono-tag text-[11px] text-muted-2">Runtime stack</p>
              <div className="mt-5 flex flex-col">
                {architectureLayers.map((layer, i) => (
                  <div key={layer} className="flex flex-col items-center">
                    <div className="neu-in w-full rounded-lg px-4 py-3 text-center">
                      <span className="font-mono text-[13px] text-foreground">{layer}</span>
                    </div>
                    {i < architectureLayers.length - 1 ? (
                      <span className="my-1.5 text-muted-2 text-xs" aria-hidden>
                        ↓
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted-2 leading-relaxed">
                Every layer runs on your machine — the WebSocket link between the
                Electron shell and the FastAPI backend is local and secured, and
                the only network calls Ollama makes are to itself.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
