import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <ul className="grid gap-3 p-6 sm:grid-cols-2">
      {certifications.map((c) => (
        <li key={c.name} className="flex gap-3 rounded-xl border border-plasma/30 bg-panel2/60 p-4">
          <Award size={22} className="mt-0.5 shrink-0 text-neon" />
          <div className="min-w-0">
            <h3 className="font-semibold leading-snug">{c.name}</h3>
            <p className="text-sm text-mute">
              {c.issuer}
              {c.year && ` · ${c.year}`}
            </p>
            {c.url && (
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-sm text-ice hover:underline"
              >
                View <ExternalLink size={13} />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
