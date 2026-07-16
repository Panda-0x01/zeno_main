import { faq } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 sm:px-8 py-24 sm:py-32">
      <SectionHeading
        align="center"
        eyebrow="FAQ"
        title="Questions people ask before they clone the repo"
        className="mx-auto"
      />

      <Reveal delay={0.1} className="mt-12">
        <div className="neu rounded-2xl px-6 sm:px-8">
          <Accordion type="single" collapsible className="w-full [&>*:last-child]:border-b-0">
            {faq.map((item, i) => (
              <AccordionItem key={item.question} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </section>
  );
}
