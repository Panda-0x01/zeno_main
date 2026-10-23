import { ArrowUpRight, MessageCircle } from "lucide-react";
import { faq } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { DiscordIcon, GitHubIcon } from "@/components/brand-icons";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions people ask before they clone the repo"
              description="Straight answers about data, hardware, voice, plugins, and what actually ships in the desktop app."
            />

            <Reveal delay={0.15}>
              <div className="card-surface mt-8 rounded-2xl p-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/20 bg-accent/[0.07]">
                    <MessageCircle className="h-4 w-4 text-accent-text" />
                  </span>
                  <div>
                    <p className="text-[13px] font-medium text-foreground">
                      Still curious?
                    </p>
                    <p className="text-[11px] text-muted-2">
                      Ask the people building it.
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-1.5">
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-[12px] text-muted transition-colors hover:border-white/[0.12] hover:text-foreground"
                  >
                    <DiscordIcon className="h-3.5 w-3.5 text-[#8b9cf8]" />
                    Join the Discord
                    <ArrowUpRight className="ml-auto h-3 w-3 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-[12px] text-muted transition-colors hover:border-white/[0.12] hover:text-foreground"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    Open an issue on GitHub
                    <ArrowUpRight className="ml-auto h-3 w-3 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Accordion
              type="single"
              collapsible
              className="flex w-full flex-col gap-3"
            >
              {faq.map((item, i) => (
                <AccordionItem key={item.question} value={`item-${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
