import { useEffect, useState } from 'react'
import Logo from './Logo'
import { profile } from '../data'

const LINES = [
  'RYUMA-OS v1.0 — booting…',
  '[ OK ] Powering up neural core',
  '[ OK ] Calibrating flame sensors',
  '[ OK ] Loading vision models',
  '[ OK ] Mounting /projects',
  `Welcome. Starting ${profile.firstName}'s desktop…`,
]

export default function BootScreen({ onDone }) {
  const [shown, setShown] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (shown < LINES.length) {
      const t = setTimeout(() => setShown((n) => n + 1), 230)
      return () => clearTimeout(t)
    }
    const t1 = setTimeout(() => setLeaving(true), 450)
    const t2 = setTimeout(onDone, 800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [shown, onDone])

  useEffect(() => {
    const skip = () => onDone()
    window.addEventListener('keydown', skip)
    return () => window.removeEventListener('keydown', skip)
  }, [onDone])

  return (
    <div
      onClick={onDone}
      className={`fixed inset-0 z-[10000] flex cursor-pointer flex-col items-center justify-center gap-8 bg-void px-6 transition-opacity duration-300 ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <Logo size={72} />
      <div className="w-full max-w-md font-mono text-[13px] leading-6">
        {LINES.slice(0, shown).map((l) => (
          <div key={l} className={l.startsWith('[ OK ]') ? 'text-ink/80' : 'text-neon'}>
            {l.startsWith('[ OK ]') ? (
              <>
                <span className="text-ice">[ OK ]</span>
                {l.slice(6)}
              </>
            ) : (
              l
            )}
          </div>
        ))}
        <span className="cursor-blink text-neon">▋</span>
      </div>
      <p className="text-xs text-mute">click or press any key to skip</p>
    </div>
  )
}
