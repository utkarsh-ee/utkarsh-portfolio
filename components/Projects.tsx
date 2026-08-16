import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="border-b border-[var(--line)]">
      <div className="mx-auto" style={{ maxWidth: "var(--max)", padding: "6rem var(--edge)" }}>
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-faint)]">
            04 / Selected Work
          </span>
          <h2
            className="font-semibold text-[var(--ink)] mt-4 max-w-2xl"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Four systems, built and verified on the bench.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-[var(--line)]">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.05}>
              <article className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 border-b border-[var(--line)]">
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-[var(--ink-faint)] tabular">{p.index}</span>
                </div>

                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-[var(--accent-dim)]">
                    {p.category}
                  </p>
                  <h3 className="mt-2 text-xl sm:text-2xl font-medium tracking-tight text-[var(--ink)]">
                    {p.title}
                  </h3>
                </div>

                <div className="md:col-span-5">
                  <p className="text-[var(--ink-dim)] leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] tracking-[0.08em] uppercase text-[var(--ink-faint)] border border-[var(--line)] px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
                  <div className="aspect-[4/3] w-full border border-dashed border-[var(--line)] flex items-center justify-center bg-[var(--bg-inset)]">
                    <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--ink-faint)] px-4 text-center">
                      [PROJECT PHOTOGRAPH]
                    </span>
                  </div>
                  <span className="mt-3 font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--ink-faint)]">
                    {p.date}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
