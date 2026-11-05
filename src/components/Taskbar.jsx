import Logo from './Logo'
import Clock from './Clock'
import { TASKBAR_H } from './Window'

export default function Taskbar({ apps, wins, activeId, startOpen, onStart, onAppClick, isMobile }) {
  return (
    <nav
      style={{ height: TASKBAR_H }}
      className="absolute inset-x-0 bottom-0 z-[9000] flex items-center gap-1 border-t border-plasma/40 bg-void/85 px-2 backdrop-blur-xl sm:gap-2 sm:px-3"
      aria-label="Taskbar"
    >
      <button
        onClick={onStart}
        aria-label="Start menu"
        aria-expanded={startOpen}
        className={`grid size-10 shrink-0 place-items-center rounded-lg transition-colors ${
          startOpen ? 'bg-plasma/30' : 'hover:bg-plasma/20'
        }`}
      >
        <Logo size={28} />
      </button>

      <span className="mx-1 h-7 w-px shrink-0 bg-plasma/30" aria-hidden="true" />

      <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
        {apps.map((app) => {
          const win = wins.find((w) => w.id === app.id)
          const isActive = activeId === app.id
          const Icon = app.icon
          return (
            <button
              key={app.id}
              onClick={() => onAppClick(app.id)}
              title={app.title}
              aria-label={app.title}
              className={`relative grid size-10 shrink-0 place-items-center rounded-lg transition-colors ${
                isActive ? 'bg-plasma/30 text-neon' : 'text-ink/80 hover:bg-plasma/20 hover:text-ink'
              }`}
            >
              <Icon size={20} />
              {win && (
                <span
                  className={`absolute bottom-0.5 h-[3px] rounded-full transition-all ${
                    isActive ? 'w-4 bg-neon shadow-[0_0_8px_#ff2bd6]' : 'w-1.5 bg-mute'
                  }`}
                />
              )}
            </button>
          )
        })}
      </div>

      <div className="shrink-0 pl-2">
        <Clock compact={isMobile} />
      </div>
    </nav>
  )
}
