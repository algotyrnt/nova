'use client'
import {
  Children,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { useInView } from './use-in-view'

interface StaggerWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function StaggerWrapper({
  children,
  style,
  ...rest
}: StaggerWrapperProps) {
  const { ref, visible } = useInView()

  return (
    <div ref={ref} style={style} {...rest}>
      {Children.toArray(children).map((child, i) => (
        <div
          key={(child as { key?: string | null }).key ?? i}
          className={
            visible ? 'stagger-item stagger-item--visible' : 'stagger-item'
          }
          style={{ '--stagger-index': i } as CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
