'use client'
import type { ReactNode } from 'react'
import { useInView } from './use-in-view'

export function FadeIn({
  children,
  delay = 0,
  y = 20,
}: {
  children: ReactNode
  delay?: number
  y?: number
}) {
  const { ref, visible } = useInView()

  return (
    <div
      ref={ref}
      className={visible ? 'fade-in fade-in--visible' : 'fade-in'}
      style={
        {
          '--fade-y': `${y}px`,
          '--fade-delay': `${delay}s`,
          width: '100%',
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}
