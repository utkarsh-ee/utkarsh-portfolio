"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--line)]" : "border-b border-transparent"
      }`}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: "var(--max)", padding: "1.1rem var(--edge)" }}
      >
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
          aria-label="Utkarsh — home"
        >
          U.
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-dim)] hover:text-[var(--accent)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink)] border border-[var(--line)] px-3 py-1.5"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="md:hidden border-t border-[var(--line)] bg-[var(--bg)]"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-[var(--line-soft)]">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-xs tracking-[0.14em] uppercase text-[var(--ink-dim)] hover:text-[var(--accent)] py-4"
                  style={{ paddingLeft: "var(--edge)", paddingRight: "var(--edge)" }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
