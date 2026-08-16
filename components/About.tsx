import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-b border-[var(--line)]">
      <div className="mx-auto" style={{ maxWidth: "var(--max)", padding: "6rem var(--edge)" }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8">
          <Reveal className="md:col-span-4">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-faint)]">
              02 / About
            </span>
          </Reveal>

          <div className="md:col-span-8">
            <Reveal>
              <p
                className="font-semibold text-[var(--ink)]"
                style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)", lineHeight: 1.25, letterSpacing: "-0.01em" }}
              >
                Utkarsh is a BS Electronic Systems student at IIT Madras,
                working across the layer where firmware meets copper — the
                point where a control loop stops being math and becomes a
                circuit that has to actually behave.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-[var(--ink-dim)] leading-relaxed max-w-2xl">
                The work spans embedded C on microcontrollers, digital and
                analog electronics, signals and systems, and the
                hardware-software integration that ties them together —
                verified on the bench, not just on paper.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 font-mono text-xs">
                <div>
                  <dt className="text-[var(--ink-faint)] uppercase tracking-[0.1em] mb-2">Program</dt>
                  <dd className="text-[var(--ink)]">BS, Electronic Systems</dd>
                </div>
                <div>
                  <dt className="text-[var(--ink-faint)] uppercase tracking-[0.1em] mb-2">Institution</dt>
                  <dd className="text-[var(--ink)]">IIT Madras</dd>
                </div>
                <div>
                  <dt className="text-[var(--ink-faint)] uppercase tracking-[0.1em] mb-2">Focus</dt>
                  <dd className="text-[var(--ink)]">Embedded Systems</dd>
                </div>
                <div>
                  <dt className="text-[var(--ink-faint)] uppercase tracking-[0.1em] mb-2">Focus</dt>
                  <dd className="text-[var(--ink)]">Instrumentation</dd>
                </div>
                <div>
                  <dt className="text-[var(--ink-faint)] uppercase tracking-[0.1em] mb-2">Focus</dt>
                  <dd className="text-[var(--ink)]">Hardware / Software Integration</dd>
                </div>
                <div>
                  <dt className="text-[var(--ink-faint)] uppercase tracking-[0.1em] mb-2">Focus</dt>
                  <dd className="text-[var(--ink)]">Robotics</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
