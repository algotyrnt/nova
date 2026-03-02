'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { GITHUB_USERNAME } from '@/util/data'

type Repo = {
    author: string
    name: string
    description: string
    language: string
    stars: number
}

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
    duration: 0.3,
}

export function ProjectsSection() {
    const [projects, setProjects] = useState<Repo[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch(
                    `https://pinned.berrysauce.dev/get/${GITHUB_USERNAME}`
                )
                if (!res.ok) throw new Error('Failed to fetch pinned repos')
                const data = await res.json()
                setProjects(data)
            } catch (error) {
                console.error('Error fetching github repos:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProjects()
    }, [])

    if (loading || projects.length === 0) return null

    return (
        <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            initial="hidden"
            animate="visible"
        >
            <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-medium">Projects</h2>
                <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                >
                    See more &rarr;
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AnimatedBackground
                    enableHover
                    className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                    transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.2,
                    }}
                >
                    {projects.map((project) => (
                        <a
                            className="rounded-xl p-4 relative z-10 block"
                            href={`https://github.com/${project.author}/${project.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={`${project.author}-${project.name}`}
                            data-id={`${project.author}-${project.name}`}
                        >
                            <div className="relative z-50 flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-medium dark:text-zinc-100">
                                        {project.name}
                                    </h3>
                                    <div className="flex items-center space-x-2 text-xs text-zinc-500 dark:text-zinc-400">
                                        {project.language && (
                                            <span className="flex items-center">
                                                <span
                                                    className="mr-1 h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-500"
                                                />
                                                {project.language}
                                            </span>
                                        )}
                                        <span className="flex items-center">
                                            ★ {project.stars}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                    {project.description || 'No description provided.'}
                                </p>
                            </div>
                        </a>
                    ))}
                </AnimatedBackground>
            </div>
        </motion.section>
    )
}
