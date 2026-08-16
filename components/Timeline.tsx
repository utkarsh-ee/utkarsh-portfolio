import Reveal from "./Reveal";

const entries = [
  { when: "[DATE]", label: "BS Electronic Systems, IIT Madras", detail: "Coursework across electronics, embedded systems, and signals & systems." },
  { when: "[DATE]", label: "Electronics Laboratory", detail: "RC filter characterization with ADALM1000 and Pixelpulse2." },
  { when: "[DATE]", label: "TM4C123 ESC Controller Simulator", detail: "Arm/disarm control logic and diagnostics on the Tiva C LaunchPad." },
  { when: "[DATE]", label: "Raspberry Pi + OLED", detail: "I²C display driver on Raspberry Pi / Linux." },
  { when: "[DATE]", label: "RopeWalker", detail: "BLDC-driven rope-climbing robot." },
];

export default function Timeline() {
  return (
    <section id="timeline" className="border-b border-[var(--line)] bg-[var(--bg-elevated)]">
      <div className="mx-auto" style={{ maxWidth: "var(--max)", padding: "6rem var(--edge)" }}>
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-faint)]">
            07 / Technical Timeline
          </span>
        </Reveal>

        <div className="mt-12">
          {entries.map((e, i) => (
            <Reveal key={e.label} delay={i * 0.04}>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-6 border-t border-[var(--line)] last:border-b">
                <div className="sm:col-span-2">
                  <span className="font-mono text-xs text-[var(--ink-faint)] tabular">{e.when}</span>
                </div>
                <div className="sm:col-span-4">
                  <span className="text-[var(--ink)] font-medium">{e.label}</span>
                </div>
                <div className="sm:col-span-6">
                  <span className="text-[var(--ink-dim)] text-sm leading-relaxed">{e.detail}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
