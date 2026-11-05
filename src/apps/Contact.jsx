import { useState } from 'react'
import { Mail, Copy, Check, Send } from 'lucide-react'
import { profile } from '../data'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/BrandIcons'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked — the mailto button still works */
    }
  }

  const socials = [
    { label: 'GitHub', href: profile.links.github, icon: GithubIcon },
    { label: 'LinkedIn', href: profile.links.linkedin, icon: LinkedinIcon },
    { label: 'Instagram', href: profile.links.instagram, icon: InstagramIcon },
  ].filter((s) => s.href)

  return (
    <div className="p-6">
      <h2 className="font-display text-xl font-extrabold">Let&apos;s build something.</h2>
      <p className="mt-1 text-mute">Have a project, an internship or just a cool idea? My inbox is open.</p>

      <div className="mt-5 flex items-center gap-3 rounded-xl border border-plasma/40 bg-panel2/60 p-4">
        <Mail size={20} className="shrink-0 text-neon" />
        <span className="min-w-0 flex-1 truncate font-mono text-sm">{profile.email}</span>
        <button
          onClick={copyEmail}
          aria-label="Copy email address"
          className="rounded-md p-2 text-mute hover:bg-plasma/20 hover:text-ink"
        >
          {copied ? <Check size={16} className="text-ice" /> : <Copy size={16} />}
        </button>
      </div>

      <a
        href={`mailto:${profile.email}`}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-neon to-plasma px-4 py-2.5 font-semibold text-white hover:brightness-110"
      >
        <Send size={16} /> Send me an email
      </a>

      {socials.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.25em] text-ice">Find me on</h3>
          <div className="flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-plasma/50 px-3.5 py-2 text-sm font-semibold hover:border-neon hover:text-neon"
              >
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
