import { ArrowUpRight } from "lucide-react";
import { faq, site } from "@/lib/content";
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
    <section id="faq" className="border-b border-line">
      <div className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions before you clone the repo."
              description="Straight answers about data, hardware, voice, plugins, and what actually ships in the desktop app."
            />

            <Reveal delay={0.12}>
              <div className="mt-9 border-t border-line pt-5">
                <p className="mono-label text-muted-2">Still curious</p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-6 w-fit items-center gap-2 text-[13px] font-medium text-ink"
                  >
                    <DiscordIcon className="h-3.5 w-3.5 text-muted" />
                    <span className="link-underline">Join the Discord</span>
                    <ArrowUpRight className="h-3 w-3 text-muted-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={`${site.repo}/issues`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-6 w-fit items-center gap-2 text-[13px] font-medium text-ink"
                  >
                    <GitHubIcon className="h-3.5 w-3.5 text-muted" />
                    <span className="link-underline">Open an issue on GitHub</span>
                    <ArrowUpRight className="h-3 w-3 text-muted-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.06}>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full border-t border-line"
            >
              {faq.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
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
