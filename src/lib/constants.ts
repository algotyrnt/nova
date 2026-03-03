import type { Transition } from 'motion/react'

/**
 * Shared spring transition used across AnimatedBackground instances.
 */
export const SPRING_TRANSITION: Transition = {
  type: 'spring',
  bounce: 0,
  duration: 0.2,
}
