'use client'
import { Children, type CSSProperties, type ReactNode } from 'react'
import { useInView } from './use-in-view'

interface StaggerWrapperProps {
  children: ReactNode
  style?: CSSProperties
}

export function StaggerWrapper({ children, style }: StaggerWrapperProps) {
  const { ref, visible } = useInView()

  return (
    <div ref={ref} style={style}>
      {Children.map(children, (child, i) => (
        <div
          className={
            visible ? 'stagger-item stagger-item--visible' : 'stagger-item'
          }
          style={{ '--stagger-index': i } as React.CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
