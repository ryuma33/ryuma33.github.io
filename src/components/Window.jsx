import { useRef } from 'react'
import { Minus, Square, Copy, X } from 'lucide-react'

export const TASKBAR_H = 52

const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi)

export default function Window({ win, app, active, isMobile, onFocus, onClose, onMinimize, onToggleMax, onMove, children }) {
  const drag = useRef(null)
  const Icon = app.icon
  const full = isMobile || win.max

  function onPointerDown(e) {
    if (full || e.button !== 0 || e.target.closest('button')) return
    drag.current = { dx: e.clientX - win.x, dy: e.clientY - win.y }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function onPointerMove(e) {
    if (!drag.current) return
    const x = clamp(e.clientX - drag.current.dx, 80 - win.w, window.innerWidth - 80)
    const y = clamp(e.clientY - drag.current.dy, 0, window.innerHeight - TASKBAR_H - 40)
    onMove(win.id, x, y)
  }

  function endDrag() {
    drag.current = null
  }

  const pos = full
    ? { left: 0, top: 0, width: '100%', height: '100%' }
    : { left: win.x, top: win.y, width: win.w, height: win.h }

  return (
    <section
      role="dialog"
      aria-label={app.title}
      onPointerDown={() => onFocus(win.id)}
      style={{ ...pos, zIndex: win.z, display: win.min ? 'none' : undefined }}
      className={`win-open absolute flex flex-col overflow-hidden bg-panel/95 backdrop-blur-md ${
        full ? '' : 'rounded-xl'
      } ${active ? 'glow-border-active' : 'glow-border'}`}
    >
      {/* Title bar */}
      <header
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDoubleClick={(e) => !isMobile && !e.target.closest('button') && onToggleMax(win.id)}
        className={`flex h-11 shrink-0 select-none items-center gap-2.5 border-b border-plasma/30 pr-1.5 pl-4 ${
          active ? 'bg-gradient-to-r from-neon/20 via-plasma/15 to-transparent' : 'bg-panel2/60'
        } ${full ? '' : 'cursor-grab active:cursor-grabbing'}`}
      >
        <Icon size={16} className={active ? 'text-neon' : 'text-mute'} />
        <h2 className="flex-1 truncate font-display text-[13px] font-semibold tracking-wider">{app.title}</h2>
        <button
          onClick={() => onMinimize(win.id)}
          aria-label="Minimize"
          className="grid size-8 place-items-center rounded-md text-mute hover:bg-plasma/20 hover:text-ink"
        >
          <Minus size={16} />
        </button>
        {!isMobile && (
          <button
            onClick={() => onToggleMax(win.id)}
            aria-label={win.max ? 'Restore' : 'Maximize'}
            className="grid size-8 place-items-center rounded-md text-mute hover:bg-plasma/20 hover:text-ink"
          >
            {win.max ? <Copy size={13} /> : <Square size={13} />}
          </button>
        )}
        <button
          onClick={() => onClose(win.id)}
          aria-label="Close"
          className="grid size-8 place-items-center rounded-md text-mute hover:bg-neon hover:text-white"
        >
          <X size={16} />
        </button>
      </header>

      <div className="win-scroll min-h-0 flex-1 overflow-auto">{children}</div>
    </section>
  )
}
