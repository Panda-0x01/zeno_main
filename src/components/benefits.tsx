import { Lock } from "lucide-react";
import { benefits } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

export function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
        <SectionHeading
          eyebrow="Security & privacy"
          title="A threat model, not a promise"
          description="Local-first isn't a slogan on Zeno's landing page — it's the storage layer, the sandbox, and the confirmation prompt in front of every action."
        />

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((b) => (
            <RevealItem key={b.title}>
              <div className="neu-in h-full rounded-2xl p-6">
                <span className="neu-sm inline-flex h-8 w-8 items-center justify-center rounded-lg text-signal">
                  <Lock className="h-3.5 w-3.5" />
                </span>
                <h3 className="mt-4 text-[15px] font-semibold text-foreground tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {b.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
