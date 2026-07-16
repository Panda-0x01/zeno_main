import { ArrowRight } from "lucide-react";
import { trustedBy, stack } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function TrustedBy() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 -mt-2 sm:mt-4 pb-4">
      <Reveal>
        <div className="neu rounded-3xl p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trustedBy.stats.map((s) => (
              <div key={s.label} className="neu-in rounded-2xl p-7 sm:p-8">
                <div className="font-dot text-4xl sm:text-5xl tracking-tight">
                  {s.value}
                </div>
                <p className="mt-3 text-sm text-muted">{s.label}</p>
              </div>
            ))}

            <div className="neu-in rounded-2xl p-7 sm:p-8 flex flex-col justify-between gap-6">
              <p className="text-sm text-muted leading-relaxed">{trustedBy.note}</p>
              <Button asChild variant="default" size="sm" className="w-fit">
                <a href="#pricing">
                  Sign up
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          {stack.map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              <span className="mono-tag text-[11px] text-muted-2">{s}</span>
              {i < stack.length - 1 ? (
                <span className="text-border-strong">/</span>
              ) : null}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
