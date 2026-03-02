'use client'
import { motion } from 'framer-motion'
import { WORK_EXPERIENCE } from '@/util/data'
import { AnimatedBackground } from '@/components/ui/animated-background'

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
    duration: 0.3,
}

export function ExperienceSection() {
    return (
        <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
        >
            <h2 className="mb-5 text-lg font-medium">Experience</h2>
            <div className="flex flex-col space-y-0">
                <AnimatedBackground
                    enableHover
                    className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                    transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.2,
                    }}
                >
                    {WORK_EXPERIENCE.map((job) => (
                        <a
                            className="-mx-3 rounded-xl px-3 py-3 relative z-10 block"
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={job.id}
                            data-id={job.id}
                        >
                            <div className="relative z-50 flex w-full flex-row justify-between p-2">
                                <div>
                                    <h3 className="font-normal dark:text-zinc-100">
                                        {job.title}
                                    </h3>
                                    <p className="text-zinc-500 dark:text-zinc-400">
                                        {job.company}
                                    </p>
                                </div>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    {job.start} - {job.end}
                                </p>
                            </div>
                        </a>
                    ))}
                </AnimatedBackground>
            </div>
        </motion.section>
    )
}
