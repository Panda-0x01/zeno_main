import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="mono-tag text-accent-text text-xs">{eyebrow}</span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl leading-[1.15] tracking-tight text-foreground text-balance">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-4 text-muted text-base sm:text-[17px] leading-relaxed text-balance">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
