"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

const STEPS: { key: keyof (typeof projects)[number]["caseStudy"]; label: string }[] = [
  { key: "context", label: "01 / Context" },
  { key: "problem", label: "02 / Problem" },
  { key: "system", label: "03 / System" },
  { key: "implementation", label: "04 / Implementation" },
  { key: "result", label: "05 / Result" },
  { key: "next", label: "06 / Next Iteration" },
];

export default function CaseStudies() {
  const [openId, setOpenId] = useState<string | null>(projects[0].id);

  return (
    <section id="case-studies" className="border-b border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="mx-auto" style={{ maxWidth: "var(--max)", padding: "6rem var(--edge)" }}>
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-faint)]">
            05 / Project Case Studies
          </span>
          <h2
            className="font-semibold text-[var(--ink)] mt-4 max-w-2xl"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            From context to next iteration.
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-[var(--line)]">
          {projects.map((p, i) => {
            const isOpen = openId === p.id;
            return (
              <Reveal key={p.id} delay={i * 0.04}>
                <div className="border-b border-[var(--line)]">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : p.id)}
                    aria-expanded={isOpen}
                    aria-controls={`case-${p.id}`}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-xs text-[var(--ink-faint)] tabular">{p.index}</span>
                      <span className="text-xl sm:text-2xl font-medium tracking-tight text-[var(--ink)]">
                        {p.title}
                      </span>
                    </span>
                    <span
                      className={`font-mono text-lg shrink-0 transition-transform duration-300 text-[var(--accent)] ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`case-${p.id}`} className="pb-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                      {STEPS.map((step) => (
                        <div key={step.key}>
                          <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-[var(--accent-dim)] mb-2">
                            {step.label}
                          </p>
                          <p className="text-[var(--ink-dim)] leading-relaxed text-sm">
                            {p.caseStudy[step.key]}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
