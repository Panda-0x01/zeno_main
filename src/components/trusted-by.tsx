import { Atom, Box, BrainCircuit, Database, Radio, Zap } from "lucide-react";
import { stack, trustedBy } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

const STACK_ICONS = [Atom, Box, Radio, Zap, BrainCircuit, Database];

export function TrustedBy() {
  return (
    <section className="relative border-y border-white/[0.055] bg-white/[0.012]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <p className="mono-tag text-center text-[10px] text-muted-2">
            Built on the stack you already trust
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12">
            {stack.map((name, i) => {
              const Icon = STACK_ICONS[i] ?? Box;
              return (
                <li
                  key={name}
                  className="group flex items-center gap-2 text-muted-2 transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4 text-muted-2 transition-colors group-hover:text-accent-text" />
                  <span className="text-[13px] font-medium tracking-tight">
                    {name}
                  </span>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-4">
            {trustedBy.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#080b0d] px-5 py-6 sm:px-7 sm:py-7"
              >
                <div className="text-[34px] font-semibold leading-none tracking-[-0.04em] text-gradient-muted sm:text-[40px]">
                  {stat.value}
                </div>
                <p className="mt-3 text-[12px] leading-snug text-muted-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
