import { useEffect, useRef, useState } from 'react'
import { profile, projects, skills } from '../data'

const PROMPT = `${profile.firstName.toLowerCase()}@ryuma-os:~$`

export default function Terminal({ openApp, closeSelf, appIds }) {
  const [lines, setLines] = useState([
    { kind: 'sys', text: 'RYUMA-OS terminal v1.0' },
    { kind: 'sys', text: "Type 'help' to see what I can do." },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' })
  }, [lines])

  function run(raw) {
    const cmd = raw.trim()
    const [name, ...args] = cmd.split(/\s+/)
    const out = []
    const say = (text, kind = 'out') => out.push({ kind, text })

    switch ((name || '').toLowerCase()) {
      case '':
        break
      case 'help':
        say('Commands:')
        say('  whoami       who is this guy?')
        say('  about        short bio')
        say('  projects     list my projects')
        say('  skills       what I work with')
        say('  contact      how to reach me')
        say(`  open <app>   open a window (${appIds.join(', ')})`)
        say('  date         current date and time')
        say('  clear        clear the screen')
        say('  exit         close the terminal')
        break
      case 'whoami':
        say(profile.name)
        say(profile.tagline, 'accent')
        break
      case 'about':
        profile.about.forEach((p) => say(p))
        break
      case 'projects':
        projects.forEach((p) => {
          say(`▸ ${p.name}`, 'accent')
          say(`  ${p.tagline}`)
        })
        say("Tip: 'open projects' for the full view.")
        break
      case 'skills':
        skills.forEach((g) => say(`${g.group}: ${g.items.join(', ')}`))
        break
      case 'contact':
        say(`email   ${profile.email}`)
        Object.entries(profile.links)
          .filter(([, v]) => v)
          .forEach(([k, v]) => say(`${k.padEnd(8)}${v}`))
        break
      case 'open': {
        const target = (args[0] || '').toLowerCase()
        if (appIds.includes(target)) {
          say(`Opening ${target}…`)
          openApp(target)
        } else {
          say(`Unknown app '${target}'. Try: ${appIds.join(', ')}`, 'err')
        }
        break
      }
      case 'date':
        say(new Date().toString())
        break
      case 'sudo':
        say('Nice try. This incident will be reported. 😈', 'err')
        break
      case 'clear':
        setLines([])
        return
      case 'exit':
        closeSelf()
        return
      default:
        say(`command not found: ${name}. Type 'help'.`, 'err')
    }

    setLines((ls) => [...ls, { kind: 'cmd', text: cmd }, ...out])
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      run(input)
      if (input.trim()) setHistory((h) => [input, ...h].slice(0, 50))
      setInput('')
      setHistIdx(-1)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const i = Math.min(histIdx + 1, history.length - 1)
      if (i >= 0) {
        setHistIdx(i)
        setInput(history[i])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const i = histIdx - 1
      setHistIdx(Math.max(i, -1))
      setInput(i >= 0 ? history[i] : '')
    }
  }

  const color = { sys: 'text-mute', out: 'text-ink/90', accent: 'text-neon', err: 'text-red-400' }

  return (
    <div
      className="min-h-full cursor-text bg-black/40 p-4 font-mono text-[13px] leading-relaxed"
      onClick={() => inputRef.current?.focus()}
    >
      {lines.map((l, i) =>
        l.kind === 'cmd' ? (
          <div key={i} className="break-words">
            <span className="text-ice">{PROMPT}</span> {l.text}
          </div>
        ) : (
          <div key={i} className={`break-words whitespace-pre-wrap ${color[l.kind]}`}>
            {l.text}
          </div>
        ),
      )}
      <div className="flex items-center gap-2" ref={endRef}>
        <span className="shrink-0 text-ice">{PROMPT}</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          aria-label="Terminal input"
          className="min-w-0 flex-1 bg-transparent text-ink caret-neon outline-none"
        />
      </div>
    </div>
  )
}
