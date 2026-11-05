import { useCallback, useRef, useState } from 'react'
import { APPS, APP_BY_ID } from './apps'
import { profile } from './data'
import Window, { TASKBAR_H } from './components/Window'
import Taskbar from './components/Taskbar'
import StartMenu from './components/StartMenu'
import BootScreen from './components/BootScreen'
import useIsMobile from './components/useIsMobile'

// Show the boot animation once per browser tab session.
function shouldBoot() {
  try {
    return sessionStorage.getItem('booted') !== '1'
  } catch {
    return true
  }
}

export default function App() {
  const isMobile = useIsMobile()
  const [booting, setBooting] = useState(shouldBoot)
  const [wins, setWins] = useState([]) // { id, x, y, w, h, z, min, max }
  const [startOpen, setStartOpen] = useState(false)
  const zTop = useRef(10)

  const finishBoot = useCallback(() => {
    setBooting(false)
    try {
      sessionStorage.setItem('booted', '1')
    } catch {
      /* private mode — fine */
    }
  }, [])

  // The focused window is the top-most one that isn't minimized.
  const visible = wins.filter((w) => !w.min)
  const activeId = visible.length ? visible.reduce((a, b) => (a.z > b.z ? a : b)).id : null

  const openApp = useCallback((id) => {
    setStartOpen(false)
    setWins((ws) => {
      const z = ++zTop.current
      const existing = ws.find((w) => w.id === id)
      if (existing) return ws.map((w) => (w.id === id ? { ...w, min: false, z } : w))

      const app = APP_BY_ID[id]
      const vw = window.innerWidth
      const vh = window.innerHeight - TASKBAR_H
      const w = Math.min(app.w, vw - 32)
      const h = Math.min(app.h, vh - 32)
      const offset = (ws.length % 5) * 30 - 60
      const x = Math.round(Math.min(Math.max((vw - w) / 2 + offset, 16), vw - w - 16))
      const y = Math.round(Math.min(Math.max((vh - h) / 2 + offset, 16), vh - h - 16))
      return [...ws, { id, x, y, w, h, z, min: false, max: false }]
    })
  }, [])

  const focus = useCallback((id) => {
    setWins((ws) => {
      const top = Math.max(...ws.map((w) => w.z))
      if (ws.find((w) => w.id === id)?.z === top) return ws
      const z = ++zTop.current
      return ws.map((w) => (w.id === id ? { ...w, z } : w))
    })
  }, [])

  const close = useCallback((id) => setWins((ws) => ws.filter((w) => w.id !== id)), [])
  const minimize = useCallback((id) => setWins((ws) => ws.map((w) => (w.id === id ? { ...w, min: true } : w))), [])
  const toggleMax = useCallback((id) => setWins((ws) => ws.map((w) => (w.id === id ? { ...w, max: !w.max } : w))), [])
  const move = useCallback((id, x, y) => setWins((ws) => ws.map((w) => (w.id === id ? { ...w, x, y } : w))), [])

  // Taskbar icon: open / focus the app, or minimize it if it's already in front.
  function onTaskbarApp(id) {
    if (activeId === id) minimize(id)
    else openApp(id)
  }

  function reboot() {
    setStartOpen(false)
    setWins([])
    setBooting(true)
  }

  const appIds = APPS.map((a) => a.id)

  return (
    <div className="wallpaper relative h-full w-full overflow-hidden">
      {/* Background scene */}
      <div className="sun" aria-hidden="true" />
      <div className="horizon" aria-hidden="true" />
      <div className="floor-wrap" aria-hidden="true">
        <div className="grid-floor" />
      </div>
      <div className="scanlines" aria-hidden="true" />

      {/* Desktop area (everything above the taskbar) */}
      <main
        className="absolute inset-x-0 top-0"
        style={{ bottom: TASKBAR_H }}
        onPointerDown={() => setStartOpen(false)}
      >
        {/* Hero text on the wallpaper */}
        <div
          className={`pointer-events-none absolute select-none ${
            isMobile ? 'inset-x-0 top-8 px-6 text-center' : 'top-[16%] right-[6%] max-w-[50%] text-right'
          }`}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-ice uppercase sm:text-sm">&gt; hello, world</p>
          <h1 className="neon-text mt-2 font-display text-3xl leading-[1.08] font-black sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-base text-ink/85 sm:text-xl">{profile.tagline}</p>
        </div>

        {/* Desktop icons */}
        <ul
          className={
            isMobile
              ? 'absolute inset-x-0 top-60 grid grid-cols-4 gap-y-5 px-3'
              : 'absolute top-6 bottom-6 left-6 grid grid-flow-col grid-rows-[repeat(auto-fill,108px)] content-start gap-x-2'
          }
        >
          {APPS.map((app) => {
            const Icon = app.icon
            return (
              <li key={app.id} className="flex justify-center">
                <button
                  onClick={() => openApp(app.id)}
                  className="group flex w-[88px] flex-col items-center gap-2 rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-ice"
                >
                  <span className="grid size-14 place-items-center rounded-xl border border-plasma/50 bg-panel/80 text-neon shadow-[0_0_18px_rgb(177_77_255/0.25)] backdrop-blur transition group-hover:-translate-y-0.5 group-hover:border-neon group-hover:shadow-[0_0_24px_rgb(255_43_214/0.45)]">
                    <Icon size={26} strokeWidth={1.75} />
                  </span>
                  <span className="text-center text-[13px] leading-tight font-semibold [text-shadow:0_1px_6px_#000]">
                    {app.title}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        {/* Windows */}
        {wins.map((win) => {
          const app = APP_BY_ID[win.id]
          const Content = app.component
          return (
            <Window
              key={win.id}
              win={win}
              app={app}
              active={activeId === win.id}
              isMobile={isMobile}
              onFocus={focus}
              onClose={close}
              onMinimize={minimize}
              onToggleMax={toggleMax}
              onMove={move}
            >
              <Content openApp={openApp} closeSelf={() => close(win.id)} appIds={appIds} />
            </Window>
          )
        })}
      </main>

      {startOpen && <StartMenu apps={APPS} onOpen={openApp} onReboot={reboot} />}

      <Taskbar
        apps={APPS}
        wins={wins}
        activeId={activeId}
        startOpen={startOpen}
        onStart={() => setStartOpen((o) => !o)}
        onAppClick={onTaskbarApp}
        isMobile={isMobile}
      />

      {booting && <BootScreen onDone={finishBoot} />}
    </div>
  )
}
