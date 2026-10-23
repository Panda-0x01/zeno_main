"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { GitHubIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        scrolled
          ? "border-line bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-paper/70 backdrop-blur-sm"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-[13px] focus:text-paper"
      >
        Skip to content
      </a>

      <div className="container-page flex h-14 items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="flex shrink-0 items-center gap-2"
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
                priority
              />
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
              zeno
            </span>
            <span className="hidden rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-muted-2 sm:inline">
              {site.version}
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:bg-paper-2 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-md px-2.5 text-[13px] font-medium text-muted transition-colors hover:bg-paper-2 hover:text-ink"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <span aria-hidden className="mx-1 h-4 w-px bg-line" />
          <Button asChild size="sm">
            <a href={site.releases}>
              Download
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line-strong bg-surface text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-paper lg:hidden"
          >
            <div className="container-page flex flex-col py-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-3 text-[14px] text-ink"
                >
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-2" />
                </a>
              ))}
              <div className="mt-4 flex items-center gap-2 pb-2">
                <Button asChild className="flex-1">
                  <a href={site.releases} onClick={() => setOpen(false)}>
                    Download Zeno
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a
                    href={site.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Zeno on GitHub"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
