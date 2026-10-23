import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricing } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-line bg-paper-2">
      <div className="container-page py-20 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionHeading
            eyebrow="Pricing"
            title="The app is free. Support is optional."
            description={pricing.note}
          />
          <p className="mono-label hidden text-muted-2 lg:block">
            Prices in USD · cancel anytime
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pricing.plans.map((plan) => (
            <Reveal key={plan.name} delay={plan.recommended ? 0.05 : 0}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-xl border bg-surface p-6",
                  plan.recommended
                    ? "border-ink shadow-[0_24px_48px_-36px_rgba(23,21,15,0.55)]"
                    : "border-line"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[13px] font-medium text-ink">
                    {plan.name}
                  </h3>
                  {plan.recommended ? (
                    <span className="rounded bg-ink px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-paper">
                      Popular
                    </span>
                  ) : null}
                </div>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-[40px] font-semibold leading-none tracking-[-0.04em] text-ink tabular-nums">
                    {plan.price}
                  </span>
                  <span className="text-[12px] text-muted-2">
                    {plan.cadence}
                  </span>
                </div>

                <p className="mt-3 min-h-[40px] max-w-[30ch] text-[12.5px] leading-6 text-muted">
                  {plan.description}
                </p>

                <Button
                  asChild
                  variant={plan.recommended ? "default" : "outline"}
                  className="mt-6 w-full"
                >
                  <a href={plan.href}>{plan.cta}</a>
                </Button>

                <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[12.5px] leading-5 text-muted"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-ink" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-[70ch] text-[12px] leading-6 text-muted-2">
          The free desktop app is available now under the MIT License. Optional
          support plans are billed separately and never gate the local-first
          core.
        </p>
      </div>
    </section>
  );
}
