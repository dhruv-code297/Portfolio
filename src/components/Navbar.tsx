"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_LINKS, PERSONAL } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [mounted, setMounted] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);

      const current = NAV_LINKS.reduce((acc, link) => {
        const sectionId = link.href.replace("#", "");
        const section = document.getElementById(sectionId);
        if (!section) {
          return acc;
        }

        const threshold = section.offsetTop - 140;
        return offset >= threshold ? link.href : acc;
      }, "#home");

      setActiveLink(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const menuNode = mobileMenuRef.current;
    const focusableElements = menuNode
      ? Array.from(menuNode.querySelectorAll<HTMLElement>(focusableSelector))
      : [];

    focusableElements[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab" || focusableElements.length === 0) {
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const navClass = scrolled
    ? "bg-background/70 backdrop-blur-xl border-b border-border/70 shadow-[var(--shadow-card)]"
    : "bg-transparent border-b border-transparent";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${navClass}`}
    >
      <div className="relative mx-auto flex h-20 w-full max-w-6xl items-center px-6">
        <nav className="hidden rounded-3xl border border-border/70 bg-card/60 px-2 py-1 shadow-[var(--shadow-button)] backdrop-blur-xl md:absolute md:left-1/2 md:top-1/2 md:flex md:-translate-x-1/2 md:-translate-y-1/2 md:items-center md:gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeLink === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-2xl px-4 py-2 text-sm font-medium outline-none transition-colors after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:origin-left after:rounded-full after:bg-gradient-to-r after:from-accent after:to-cyan after:transition-transform after:duration-300 after:content-[''] ${
                  isActive
                    ? "text-foreground after:scale-x-100"
                    : "text-muted hover:text-foreground after:scale-x-0 hover:after:scale-x-100"
                } hover:bg-card-secondary/40 focus-visible:ring-2 focus-visible:ring-accent/40`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-4 md:flex">
          {mounted ? <ThemeToggle /> : <div className="h-11 w-11" />}
          <a
            href={PERSONAL.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-muted shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:text-foreground hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-haspopup="dialog"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card/70 text-foreground shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:shadow-[var(--shadow-button-hover)] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              ref={mobileMenuRef}
              initial={{ x: 18, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 18, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-4 top-4 bottom-4 flex w-[min(360px,calc(100%-2rem))] flex-col rounded-3xl border border-border bg-card/85 p-6 shadow-[var(--shadow-card-hover)] backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold tracking-[0.28em] text-muted">MENU</p>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-card/70 text-foreground shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  onClick={() => setMobileOpen(false)}
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="mt-10 flex flex-1 flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center justify-between gap-4 border-t border-border/60 pt-6">
                {mounted ? <ThemeToggle /> : <div className="h-11 w-11" />}
                <a
                  href={PERSONAL.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-2xl border border-border bg-card/70 px-4 py-2 text-sm font-semibold text-muted shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:text-foreground hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
