"use client";

import { useState } from "react";
import { systems } from "@/lib/data";
import Reveal from "./Reveal";

export default function Systems() {
  const [active, setActive] = useState(0);

  return (
    <section id="systems" className="border-b border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="mx-auto" style={{ maxWidth: "var(--max)", padding: "6rem var(--edge)" }}>
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-faint)]">
            03 / Systems
          </span>
          <h2
            className="font-semibold text-[var(--ink)] mt-4"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Technical taxonomy.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4">
          <div className="lg:col-span-5">
            {systems.map((s, i) => (
              <Reveal key={s.index} delay={i * 0.05}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`w-full text-left flex items-baseline gap-5 py-5 border-t border-[var(--line)] transition-colors ${
                    i === systems.length - 1 ? "border-b" : ""
                  } group`}
                >
                  <span
                    className={`font-mono text-xs tabular ${
                      active === i ? "text-[var(--accent)]" : "text-[var(--ink-faint)]"
                    }`}
                  >
                    {s.index}
                  </span>
                  <span
                    className={`text-2xl sm:text-3xl font-medium tracking-tight transition-colors ${
                      active === i ? "text-[var(--ink)]" : "text-[var(--ink-faint)] group-hover:text-[var(--ink-dim)]"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.15}>
              <div className="border border-[var(--line)] p-8 h-full min-h-[260px] bg-[var(--bg)]">
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-faint)] mb-6">
                  {systems[active].index} / {systems[active].title}
                </p>
                <ul className="space-y-4">
                  {systems[active].items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[var(--ink)] text-lg border-b border-[var(--line-soft)] pb-4"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--accent)] shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
