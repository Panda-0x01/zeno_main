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
          <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_2px_rgba(52,211,153,0.45)]" />
            <span className="mono-tag text-[10px] text-muted">{eyebrow}</span>
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-foreground text-balance sm:text-[42px] lg:text-[46px]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-muted text-balance sm:text-base">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
