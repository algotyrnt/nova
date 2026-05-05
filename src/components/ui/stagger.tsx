'use client'
import { Children, type ReactNode } from 'react'
import { useInView } from './use-in-view'

interface StaggerWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function StaggerWrapper({ children, style, ...rest }: StaggerWrapperProps) {
  const { ref, visible } = useInView()

  return (
    <div ref={ref} style={style} {...rest}>
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
