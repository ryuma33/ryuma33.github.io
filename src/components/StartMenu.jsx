import { Power } from 'lucide-react'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons'
import { TASKBAR_H } from './Window'

export default function StartMenu({ apps, onOpen, onReboot }) {
  const socials = [
    { label: 'GitHub', href: profile.links.github, icon: GithubIcon },
    { label: 'LinkedIn', href: profile.links.linkedin, icon: LinkedinIcon },
    { label: 'Instagram', href: profile.links.instagram, icon: InstagramIcon },
  ].filter((s) => s.href)

  return (
    <div
      style={{ bottom: TASKBAR_H + 8 }}
      className="rise glow-border absolute left-2 z-[9001] w-[min(340px,calc(100vw-16px))] overflow-hidden rounded-xl bg-panel/95 backdrop-blur-xl"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="bg-gradient-to-br from-neon/25 via-plasma/20 to-transparent p-5">
        <p className="font-display text-lg leading-tight font-extrabold">{profile.name}</p>
        <p className="mt-1 text-sm text-mute">{profile.tagline}</p>
      </div>

      <ul className="p-2">
        {apps.map((app) => {
          const Icon = app.icon
          return (
            <li key={app.id}>
              <button
                onClick={() => onOpen(app.id)}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left hover:bg-plasma/20"
              >
                <Icon size={18} className="text-neon" />
                <span className="font-medium">{app.title}</span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="flex items-center gap-1 border-t border-plasma/30 p-2">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="grid size-9 place-items-center rounded-lg text-mute hover:bg-plasma/20 hover:text-ink"
          >
            <Icon size={17} />
          </a>
        ))}
        <button
          onClick={onReboot}
          title="Reboot"
          aria-label="Reboot"
          className="ml-auto grid size-9 place-items-center rounded-lg text-mute hover:bg-neon hover:text-white"
        >
          <Power size={17} />
        </button>
      </div>
    </div>
  )
}
