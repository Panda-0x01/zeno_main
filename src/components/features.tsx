import {
  ArrowUpRight,
  Blocks,
  Bot,
  Cpu,
  Lock,
  Mic,
  MonitorSmartphone,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

const ICONS: Record<string, LucideIcon> = {
  Bot,
  Mic,
  ShieldCheck,
  Lock,
  Blocks,
  Cpu,
  MonitorSmartphone,
};

export function Features() {
  return (
    <section id="features" className="border-b border-line">
      <div className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading
              eyebrow="Platform"
              title="Local inference, without the rough edges."
              description="Model access, voice, permissions and plugins in one desktop app. Every capability below is built into the free, MIT-licensed core."
            />

            <Reveal delay={0.12}>
              <div className="mt-8 border-t border-line pt-4">
                <a
                  href="#how-it-works"
                  className="group inline-flex min-h-6 items-center gap-2 text-[13px] font-medium text-ink"
                >
                  <span className="link-underline">See how it runs</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <p className="mt-3 max-w-[30ch] text-[12.5px] leading-6 text-muted-2">
                  No hosted account, no feature gates, no lock-in.
                </p>
              </div>
            </Reveal>
          </div>

          <ol className="border-t border-line">
            {features.map((feature, index) => {
              const Icon = ICONS[feature.icon] ?? Bot;
              return (
                <Reveal key={feature.title} delay={Math.min(index * 0.03, 0.18)}>
                  <li className="group grid gap-4 border-b border-line py-6 sm:grid-cols-[2.25rem_minmax(0,1fr)_auto] sm:gap-6">
                    <div className="flex items-center gap-3 sm:block">
                      <span className="mono-label text-muted-2">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon className="ml-auto h-4 w-4 text-muted-2 transition-colors group-hover:text-accent-ink sm:ml-0 sm:mt-3" />
                    </div>

                    <div>
                      <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 max-w-[58ch] text-[13.5px] leading-6 text-muted">
                        {feature.description}
                      </p>
                      <span className="mono-label mt-3 inline-block text-muted-2 sm:hidden">
                        {feature.meta}
                      </span>
                    </div>

                    <span className="mono-label hidden pt-1 text-right text-muted-2 sm:block">
                      {feature.meta}
                    </span>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
