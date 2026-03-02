'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Spotlight } from '@/components/ui/spotlight'
import { GITHUB_USERNAME } from '@/util/data'

type Repo = {
    id: number
    name: string
    html_url: string
    description: string
    language: string
    stargazers_count: number
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
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
                )
                if (!res.ok) throw new Error('Failed to fetch')
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
                <h3 className="text-lg font-medium">Projects</h3>
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
                {projects.map((project) => (
                    <a
                        className="relative h-full overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={project.id}
                    >
                        <Spotlight
                            className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                            size={64}
                        />
                        <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                            <div className="relative z-50 flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium dark:text-zinc-100">
                                        {project.name}
                                    </h4>
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
                                            ★ {project.stargazers_count}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                    {project.description || 'No description provided.'}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </motion.section>
    )
}
