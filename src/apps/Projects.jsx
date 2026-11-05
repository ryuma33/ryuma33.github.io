import { ExternalLink } from 'lucide-react'
import { projects } from '../data'
import { Chip, LinkButton } from './ui'
import { GithubIcon } from '../components/BrandIcons'

export default function Projects() {
  return (
    <div className="space-y-4 p-6">
      {projects.map((p) => (
        <article
          key={p.name}
          className="rounded-xl border border-plasma/30 bg-panel2/60 p-5 transition-colors hover:border-neon/60"
        >
          <h3 className="font-display text-lg font-extrabold text-ink">{p.name}</h3>
          <p className="mt-0.5 text-sm font-semibold text-neon">{p.tagline}</p>
          <p className="mt-3 leading-relaxed text-ink/85">{p.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          {(p.github || p.demo) && (
            <div className="mt-4 flex flex-wrap gap-3">
              {p.github && (
                <LinkButton href={p.github}>
                  <GithubIcon size={16} /> Code
                </LinkButton>
              )}
              {p.demo && (
                <LinkButton href={p.demo} primary>
                  <ExternalLink size={16} /> Live demo
                </LinkButton>
              )}
            </div>
          )}
        </article>
      ))}
      <p className="pt-1 text-center text-sm text-mute">More projects coming soon…</p>
    </div>
  )
}
