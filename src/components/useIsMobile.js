import { useEffect, useState } from 'react'

const BREAKPOINT = 768
const check = () => window.innerWidth < BREAKPOINT

export default function useIsMobile() {
  const [mobile, setMobile] = useState(check)

  useEffect(() => {
    const onResize = () => setMobile(check())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return mobile
}
