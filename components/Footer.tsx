export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div
        className="mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] tracking-[0.1em] uppercase text-[var(--ink-faint)]"
        style={{ maxWidth: "var(--max)", padding: "2rem var(--edge)" }}
      >
        <span>© {year} Utkarsh — Electronic Systems</span>
        <span>Built with Next.js, React Three Fiber, GSAP</span>
      </div>
    </footer>
  );
}
