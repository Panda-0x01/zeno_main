import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[34rem]", className)}>
      {eyebrow ? (
        <Reveal>
          <span className="mono-label rule-label text-muted-2">{eyebrow}</span>
        </Reveal>
      ) : null}
      <Reveal delay={0.04}>
        <h2 className="mt-5 text-[clamp(29px,4vw,42px)] font-semibold leading-[1.06] tracking-[-0.035em] text-ink text-balance">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-[52ch] text-[15px] leading-7 text-muted">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
