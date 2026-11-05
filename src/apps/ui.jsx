// Small shared building blocks for the app windows.

export function Section({ title, children }) {
  return (
    <section className="mb-6 last:mb-0">
      <h3 className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.25em] text-ice">{title}</h3>
      {children}
    </section>
  )
}

export function Chip({ children }) {
  return (
    <span className="inline-block rounded-md border border-plasma/40 bg-plasma/10 px-2.5 py-1 text-xs font-medium text-ink">
      {children}
    </span>
  )
}

export function LinkButton({ href, children, primary = false }) {
  const base =
    'inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-ice'
  const style = primary
    ? 'bg-gradient-to-r from-neon to-plasma text-white hover:brightness-110'
    : 'border border-plasma/50 text-ink hover:border-neon hover:text-neon'
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${base} ${style}`}>
      {children}
    </a>
  )
}
