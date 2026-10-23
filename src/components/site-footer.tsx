import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { footerLinks, social } from "@/lib/content";
import { DiscordIcon, GitHubIcon, XIcon } from "@/components/brand-icons";

const SOCIAL_ICONS = {
  GitHub: GitHubIcon,
  Discord: DiscordIcon,
  X: XIcon,
} as const;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050708]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <a
              href="#top"
              className="flex items-center gap-2.5"
              aria-label="Zeno home"
            >
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-[9px] bg-white shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_6px_16px_-8px_rgba(0,0,0,0.9)] ring-1 ring-white/15">
                <Image
                  src="/zeno.png"
                  alt=""
                  width={24}
                  height={24}
                  className="rounded-[6px]"
                />
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                zeno
              </span>
            </a>
            <p className="mt-4 max-w-[260px] text-[12.5px] leading-relaxed text-muted-2">
              A local-first AI desktop assistant. Free & open source under the
              MIT License.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/[0.05] px-2.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-accent-text">
                All systems local
              </span>
            </div>
          </div>

          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Resources" links={footerLinks.resources} />

          <div>
            <p className="mono-tag text-[9px] text-muted-2">Legal</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[12.5px] text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-tag text-[9px] text-muted-2">Community</p>
            <ul className="mt-4 space-y-2.5">
              {social.map((s) => {
                const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS];
                if (!Icon) return null;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-[12.5px] text-muted transition-colors hover:text-foreground"
                    >
                      <Icon className="h-3 w-3 text-muted-2 transition-colors group-hover:text-foreground" />
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-7 sm:flex-row">
          <p className="text-[11px] text-muted-2">
            © {new Date().getFullYear()} Zeno. MIT License. No telemetry.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-1.5 text-[11px] text-muted-2 transition-colors hover:text-foreground"
          >
            Back to top
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/[0.08] transition-colors group-hover:border-white/20">
              <ArrowUp className="h-2.5 w-2.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mono-tag text-[9px] text-muted-2">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[12.5px] text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
