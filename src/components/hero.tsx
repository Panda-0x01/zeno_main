import { ArrowUpRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppPreview } from "@/components/app-preview";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative border-b border-line">
      <div className="container-page pt-28 sm:pt-32">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="mono-label text-ink">
              {site.version} · {hero.badge}
            </span>
          </span>
          <span className="mono-label hidden text-muted-2 sm:inline">
            Open source · MIT licensed
          </span>
        </div>

        <h1 className="mt-10 max-w-[20ch] text-[clamp(42px,7vw,78px)] font-semibold leading-[0.97] tracking-[-0.045em] text-ink">
          {hero.headline.map((line, index) => {
            const last = index === hero.headline.length - 1;
            return (
              <span key={line} className="block">
                {last ? line.replace(/\.$/, "") : line}
                {last ? <span className="text-accent">.</span> : " "}
              </span>
            );
          })}
        </h1>

        <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <p className="max-w-[56ch] text-[16px] leading-7 text-muted sm:text-[17px] sm:leading-8">
            {hero.sub}
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row lg:justify-end">
            <Button asChild size="lg">
              <a href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={hero.secondaryCta.href}>
                <Terminal className="h-4 w-4 text-muted" />
                {hero.secondaryCta.label}
              </a>
            </Button>
          </div>
        </div>

        <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 pb-1">
          {hero.facts.map((fact) => (
            <li
              key={fact}
              className="mono-label flex items-center gap-2 text-muted-2"
            >
              <span aria-hidden className="h-3 w-px bg-line-strong" />
              {fact}
            </li>
          ))}
        </ul>
      </div>

      <div className="container-page pb-8 pt-12 sm:pt-16">
        <AppPreview />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3">
          <span className="mono-label text-muted-2">
            Zeno desktop · local session
          </span>
          <span className="mono-label text-muted-2">
            llama3.2:3b · CPU · 0 outbound requests
          </span>
        </div>
      </div>
    </section>
  );
}
