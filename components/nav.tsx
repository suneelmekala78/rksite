"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? "bg-background/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="section-pad flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="font-display text-2xl tracking-[0.12em] text-foreground md:text-3xl">
            {site.monogram}
          </a>

          <nav className="hidden items-center gap-4 lg:gap-6 xl:gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground lg:text-[10px] lg:tracking-[0.22em]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:text-foreground lg:text-[10px]"
            >
              IG
            </a>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-6 flex-col gap-1.5">
                <span
                  className={`h-0.5 w-full bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
                />
                <span className={`h-0.5 w-full bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
                <span
                  className={`h-0.5 w-full bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-background md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="section-pad flex flex-1 flex-col justify-center gap-6 pt-16">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-6xl tracking-[0.04em] text-foreground"
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
              >
                {site.instagramHandle}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
