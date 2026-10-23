"use client";

import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricing } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden border-y border-white/[0.055] bg-white/[0.012]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.055] blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title="The app is free. Support is optional."
          description={pricing.note}
          className="mx-auto max-w-3xl"
        />

        <RevealGroup
          className="mt-14 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3"
          stagger={0.1}
        >
          {pricing.plans.map((plan) => (
            <RevealItem key={plan.name} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-6 sm:p-7",
                  plan.recommended
                    ? "ring-gradient overflow-hidden bg-[#09100d] shadow-[0_30px_80px_-40px_rgba(52,211,153,0.45)]"
                    : "card-surface card-hover"
                )}
              >
                {plan.recommended ? (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(52,211,153,0.14),transparent_75%)]"
                    />
                    <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/[0.1] px-2.5 py-1">
                      <Sparkles className="h-3 w-3 text-accent-text" />
                      <span className="mono-tag text-[8px] text-accent-text">
                        Most popular
                      </span>
                    </div>
                  </>
                ) : null}

                <div className="relative">
                  <h3 className="text-[13px] font-medium text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-2 min-h-[40px] max-w-[260px] text-[12.5px] leading-relaxed text-muted-2">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex items-end gap-1.5">
                    <span
                      className={cn(
                        "font-semibold leading-none tracking-[-0.04em] text-foreground",
                        plan.price.length > 8
                          ? "text-[28px]"
                          : "text-[40px]"
                      )}
                    >
                      {plan.price}
                    </span>
                    {plan.cadence ? (
                      <span className="mb-1 text-[12px] text-muted-2">
                        {plan.cadence}
                      </span>
                    ) : null}
                  </div>

                  <Button
                    asChild
                    variant={plan.recommended ? "default" : "outline"}
                    className="mt-6 w-full"
                  >
                    <a href="#faq">{plan.cta}</a>
                  </Button>

                  <div className="mt-7 h-px w-full bg-gradient-to-r from-white/[0.09] to-transparent" />

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[12.5px] leading-snug text-muted"
                      >
                        <span className="mt-px flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/[0.07]">
                          <Check className="h-2.5 w-2.5 text-accent-text" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-9 max-w-xl text-center text-[11.5px] leading-relaxed text-muted-2">
            The free desktop app is available today under the MIT License.
            Optional support plans are billed separately and never gate the
            local-first core.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
