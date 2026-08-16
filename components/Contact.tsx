"use client";

import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-[var(--line)]">
      <div className="mx-auto" style={{ maxWidth: "var(--max)", padding: "7rem var(--edge)" }}>
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-faint)]">
            08 / Contact
          </span>
          <h2
            className="font-semibold text-[var(--ink)] mt-6"
            style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 1.02 }}
          >
            Let&apos;s build
            <br />
            something real.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10">
            <div className="space-y-3 font-mono text-sm">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-disabled="true"
                className="block text-[var(--ink)] cursor-default underline decoration-[var(--line)] underline-offset-4"
              >
                [PROFESSIONAL EMAIL]
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-disabled="true"
                className="block text-[var(--ink-dim)] cursor-default"
              >
                [GITHUB URL]
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-disabled="true"
                className="block text-[var(--ink-dim)] cursor-default"
              >
                [LINKEDIN URL]
              </a>
            </div>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-disabled="true"
              className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase border border-[var(--line)] px-5 py-3 text-[var(--ink-dim)] cursor-default"
            >
              [RESUME PDF]
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
