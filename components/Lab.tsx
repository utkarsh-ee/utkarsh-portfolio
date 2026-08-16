import Reveal from "./Reveal";

const items = [
  { label: "[INSERT OSCILLOSCOPE TRACE]", note: "RC filter response — ADALM1000 / Pixelpulse2" },
  { label: "[INSERT PCB PHOTOGRAPH]", note: "TM4C123 control rig" },
  { label: "[INSERT BREADBOARD PHOTOGRAPH]", note: "RC low/high-pass network" },
  { label: "[INSERT SCHEMATIC]", note: "Arm/disarm state logic" },
  { label: "[INSERT COMPONENT CLOSE-UP]", note: "SSD1306 OLED module" },
  { label: "[INSERT LAB PHOTOGRAPH]", note: "RopeWalker traction assembly" },
];

export default function Lab() {
  return (
    <section id="lab" className="border-b border-[var(--line)]">
      <div className="mx-auto" style={{ maxWidth: "var(--max)", padding: "6rem var(--edge)" }}>
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-faint)]">
            06 / Hardware Lab
          </span>
          <h2
            className="font-semibold text-[var(--ink)] mt-4 max-w-2xl"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Measured, not assumed.
          </h2>
          <p className="mt-5 text-[var(--ink-dim)] max-w-lg leading-relaxed">
            Bench photography, waveform captures, and schematics belong here
            once measured. No result is fabricated — every placeholder below
            is waiting on a real capture.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)]">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={(i % 3) * 0.06}>
              <div className="bg-[var(--bg)] aspect-[4/3] p-6 flex flex-col justify-between">
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--ink-faint)]">
                  {item.label}
                </span>
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--ink-dim)]">
                  {item.note}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
