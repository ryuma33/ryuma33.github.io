import { MapPin, GraduationCap, Zap, FolderOpen, Mail } from 'lucide-react'
import { profile } from '../data'
import { Section } from './ui'

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase()
}

export default function Profile({ openApp }) {
  const rows = [
    { icon: Zap, text: profile.status },
    { icon: GraduationCap, text: profile.education },
    { icon: MapPin, text: profile.location },
  ].filter((r) => r.text)

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="size-24 shrink-0 rounded-2xl object-cover ring-2 ring-neon/60"
          />
        ) : (
          <div className="grid size-24 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-plasma to-neon font-display text-3xl font-black text-white ring-2 ring-neon/40">
            {initials(profile.name)}
          </div>
        )}
        <div>
          <h2 className="font-display text-2xl font-extrabold leading-tight">{profile.name}</h2>
          <p className="mt-1 text-mute">{profile.tagline}</p>
          {rows.length > 0 && (
            <ul className="mt-3 space-y-1 text-sm">
              {rows.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center justify-center gap-2 sm:justify-start">
                  <Icon size={15} className="shrink-0 text-neon" />
                  {text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Section title="About">
        <div className="space-y-3 leading-relaxed text-ink/90">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => openApp('projects')}
          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-neon to-plasma px-3.5 py-2 text-sm font-semibold text-white hover:brightness-110"
        >
          <FolderOpen size={16} /> See my projects
        </button>
        <button
          onClick={() => openApp('contact')}
          className="inline-flex items-center gap-2 rounded-md border border-plasma/50 px-3.5 py-2 text-sm font-semibold hover:border-neon hover:text-neon"
        >
          <Mail size={16} /> Get in touch
        </button>
      </div>
    </div>
  )
}
