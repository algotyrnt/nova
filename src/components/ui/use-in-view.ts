'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Lightweight IntersectionObserver hook that fires once when the element
 * enters the viewport.
 */
export function useInView(margin = '-40px') {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: margin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [margin])

  return { ref, visible }
}
