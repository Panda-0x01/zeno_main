import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { footerLinks, site, social } from "@/lib/content";
import { DiscordIcon, GitHubIcon, XIcon } from "@/components/brand-icons";

const SOCIAL_ICONS = {
  GitHub: GitHubIcon,
  Discord: DiscordIcon,
  X: XIcon,
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper-2">
      <div className="container-page pb-8 pt-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <a
              href="/"
              className="flex w-fit items-center gap-2"
              aria-label="Zeno home"
            >
              <span className="flex h-[26px] w-[26px] items-center justify-center overflow-hidden rounded-[5px]">
                <Image
                  src="/zeno.png"
                  alt=""
                  width={26}
                  height={26}
                  className="h-[26px] w-[26px]"
                  style={{ filter: "invert(1)" }}
                />
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                zeno
              </span>
            </a>
            <p className="mt-4 max-w-[30ch] text-[12.5px] leading-6 text-muted">
              A local-first AI assistant for your desktop. Free and open source
              under the MIT License.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.1em] text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              All systems local
            </p>
          </div>

          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
          <FooterColumn title="Legal" links={footerLinks.legal} />

          <div>
            <p className="mono-label text-muted-2">Community</p>
            <ul className="mt-4 space-y-2.5">
              {social.map((item) => {
                const Icon = SOCIAL_ICONS[item.label as keyof typeof SOCIAL_ICONS];
                if (!Icon) return null;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex min-h-6 items-center gap-2 text-[12.5px] text-muted transition-colors hover:text-ink"
                    >
                      <Icon className="h-3 w-3 text-muted-2 transition-colors group-hover:text-ink" />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-5 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] text-muted-2">
            © {new Date().getFullYear()} Zeno · MIT License · No telemetry
          </p>
          <a
            href="#top"
            className="group inline-flex min-h-6 items-center gap-1.5 font-mono text-[10px] text-muted-2 transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
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
      <p className="mono-label text-muted-2">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="inline-flex min-h-6 items-center text-[12.5px] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
