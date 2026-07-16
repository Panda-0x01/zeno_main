import { footerLinks, social } from "@/lib/content";
import { ZenoMark } from "@/components/zeno-mark";

export function SiteFooter() {
  return (
    <footer className="shadow-[inset_0_1px_0_var(--neu-light),inset_0_2px_4px_-2px_var(--neu-dark-soft)]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div className="col-span-2 sm:col-span-1">
            <a href="#top" className="flex items-center gap-2.5" aria-label="Zeno home">
              <ZenoMark className="h-5 w-5 text-accent" />
              <span className="font-display text-sm text-foreground">zeno</span>
            </a>
            <p className="mt-4 text-sm text-muted-2 leading-relaxed max-w-[220px]">
              A local-first AI desktop assistant. Free & open source under the
              MIT License.
            </p>
          </div>

          <FooterColumn title="Product" links={footerLinks.product} />
          <FooterColumn title="Resources" links={footerLinks.resources} />

          <div>
            <p className="mono-tag text-[11px] text-muted-2">Community</p>
            <ul className="mt-4 space-y-2.5">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-2">
            © {new Date().getFullYear()} Zeno. MIT License.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-muted-2 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
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
      <p className="mono-tag text-[11px] text-muted-2">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
