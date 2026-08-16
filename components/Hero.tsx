"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section id="top" className="relative min-h-svh w-full overflow-hidden border-b border-[var(--line)]">
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>

      {/* readability scrim */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,11,9,0.55) 0%, rgba(10,11,9,0.15) 30%, rgba(10,11,9,0.35) 70%, rgba(10,11,9,0.92) 100%)",
        }}
      />

      <div
        className="relative z-10 flex min-h-svh flex-col justify-between mx-auto"
        style={{ maxWidth: "var(--max)", padding: "6.5rem var(--edge) 3rem" }}
      >
        <div className="flex items-start justify-between font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-dim)]">
          <span>Electronic Systems</span>
          <span className="hidden sm:inline">[LOCATION]</span>
        </div>

        <div>
          <p className="font-mono text-xs tracking-[0.18em] uppercase text-[var(--accent)] mb-5">
            Utkarsh / Portfolio
          </p>
          <h1
            className="font-semibold text-[var(--ink)]"
            style={{
              fontSize: "clamp(2.75rem, 9vw, 7.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            Building
            <br />
            physical
            <br />
            systems.
          </h1>

          <div className="mt-8 max-w-md">
            <p className="text-[var(--ink-dim)] text-base leading-relaxed">
              Embedded control, instrumentation, and hardware built from first
              principles — from microcontroller firmware to the circuit that
              proves it.
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between mt-16">
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--ink-faint)] leading-relaxed">
            Embedded C — Microcontrollers
            <br />
            Instrumentation — Robotics
          </div>
          <a
            href="#about"
            className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-dim)] hover:text-[var(--accent)] transition-colors flex items-center gap-2"
          >
            Scroll
            <span aria-hidden className="inline-block w-4 h-px bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
