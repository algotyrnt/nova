'use client'
import { motion } from 'framer-motion'
import { EMAIL, SOCIAL_LINKS } from '@/util/data'
import { MagneticSocialLink } from '@/components/ui/magnetic-social-link'

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
    duration: 0.3,
}

export function ConnectSection() {
    return (
        <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
        >
            <h2 className="mb-5 text-lg font-medium">Connect</h2>
            <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                Feel free to contact me at{' '}
                <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                </a>
            </p>
            <div className="flex items-center justify-start space-x-3">
                {SOCIAL_LINKS.map((link) => (
                    <MagneticSocialLink key={link.label} link={link.link}>
                        {link.label}
                    </MagneticSocialLink>
                ))}
            </div>
        </motion.section>
    )
}
