import { useEffect, useState } from 'react'

export default function Clock({ compact = false }) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const date = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <div className="text-right leading-tight">
      <div className="font-mono text-sm font-semibold text-ink">{time}</div>
      {!compact && <div className="text-[11px] text-mute">{date}</div>}
    </div>
  )
}
