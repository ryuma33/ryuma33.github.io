// Hexagon "A" mark used on the start button, boot screen and favicon.
export default function Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b14dff" />
          <stop offset="1" stopColor="#ff2bd6" />
        </linearGradient>
      </defs>
      <path d="M32 6 54 19v26L32 58 10 45V19Z" fill="none" stroke="url(#logo-g)" strokeWidth="4" />
      <path
        d="M23 43 32 20l9 23M26.5 35h11"
        fill="none"
        stroke="#3ef0ff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
