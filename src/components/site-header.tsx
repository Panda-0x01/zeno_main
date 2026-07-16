"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
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
        "fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-[0_6px_16px_-8px_var(--neu-dark)]" : ""
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8 h-16">
        <a href="#top" className="flex items-center gap-2.5 shrink-0" aria-label="Zeno home">
          <span className="neu neu-hover neu-press flex h-9 w-9 items-center justify-center rounded-[10px]">
            <Image src="/zeno.png" alt="Zeno logo" width={28} height={28} className="rounded-sm" />
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
              {i === 0 ? <ChevronDown className="h-3.5 w-3.5 text-muted-2" /> : null}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Log In
          </a>
          <Button asChild size="sm">
            <a href="#pricing">Join Wishlist</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-background overflow-hidden shadow-[inset_0_1px_0_var(--neu-light),0_6px_16px_-8px_var(--neu-dark)]"
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-3 w-full">
              <a href="#pricing" onClick={() => setOpen(false)}>
                Join Wishlist
              </a>
            </Button>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
