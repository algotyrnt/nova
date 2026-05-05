'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Lightweight IntersectionObserver hook that fires once when the element
 * enters the viewport. Replaces framer-motion's `whileInView`.
 */
export function useInView(margin = '-40px') {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(
    typeof window === 'undefined' || !('IntersectionObserver' in window),
  )

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window))
      return

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
