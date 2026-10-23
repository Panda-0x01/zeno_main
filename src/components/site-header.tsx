"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { GitHubIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2.5"
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

        <nav
          className="hidden items-center gap-0.5 rounded-full border border-white/[0.07] bg-white/[0.025] p-1 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-[10px] px-3 text-[13px] font-medium text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-3 w-3 opacity-50" />
          </a>
          <Button asChild size="sm">
            <a href="#pricing">Join Wishlist</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.03] text-foreground lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.06] bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/[0.05] hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 flex items-center gap-2">
                <Button asChild size="sm" className="flex-1">
                  <a href="#pricing" onClick={() => setOpen(false)}>
                    Join Wishlist
                  </a>
                </Button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.03] text-muted"
                  aria-label="Zeno on GitHub"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
