'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
    duration: 0.3,
}

export function FadeIn({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <motion.section
            className={className}
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
        >
            {children}
        </motion.section>
    )
}

const VARIANTS_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
}

export function FadeInStagger({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <motion.main
            className={className}
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.main>
    )
}
