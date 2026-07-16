"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricing } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-32">
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title="The app is free. Support is optional."
          description={pricing.note}
          className="mx-auto"
        />

        <RevealGroup className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch" stagger={0.1}>
          {pricing.plans.map((plan) => (
            <RevealItem key={plan.name} className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "neu neu-hover relative flex h-full flex-col rounded-2xl p-7",
                  plan.recommended && "ring-2 ring-accent/25"
                )}
              >
                {plan.recommended ? (
                  <Badge variant="accent" className="absolute -top-3 left-7">
                    Recommended
                  </Badge>
                ) : null}

                <h3 className="font-display text-lg text-foreground tracking-tight">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed min-h-10">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-3xl sm:text-4xl text-foreground tracking-tight">
                    {plan.price}
                  </span>
                  {plan.cadence ? (
                    <span className="text-sm text-muted-2">{plan.cadence}</span>
                  ) : null}
                </div>

                <Button
                  asChild
                  variant={plan.recommended ? "default" : "outline"}
                  className="mt-6 w-full"
                >
                  <a href="#faq">{plan.cta}</a>
                </Button>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
