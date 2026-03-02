'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedBackground } from '@/components/ui/animated-background'
import Link from 'next/link'
import { MEDIUM_USERNAME } from '@/util/data'

type MediumPost = {
    title: string
    pubDate: string
    link: string
    guid: string
    author: string
    thumbnail: string
    description: string
    content: string
    categories: string[]
}

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
    duration: 0.3,
}

export function BlogsSection() {
    const [blogs, setBlogs] = useState<MediumPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await fetch(
                    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`
                )
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                if (data.status === 'ok') {
                    // Take the latest 4 posts
                    setBlogs(data.items.slice(0, 4))
                }
            } catch (error) {
                console.error('Error fetching medium blogs:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchBlogs()
    }, [])

    if (loading || blogs.length === 0) return null

    // Helper to extract a short description from the HTML content safely
    const extractDescription = (content: string) => {
        // Strip out image tags, paragraph tags, etc using a simple regex
        const text = content.replace(/<\/?[^>]+(>|$)/g, "")
        return text.trim().substring(0, 100) + '...'
    }

    return (
        <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            initial="hidden"
            animate="visible"
        >
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-medium">Blog</h2>
                <a
                    href={`https://${MEDIUM_USERNAME}.medium.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                >
                    See more &rarr;
                </a>
            </div>
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
                    {blogs.map((post) => (
                        <Link
                            key={post.guid}
                            className="-mx-3 rounded-xl px-3 py-3 relative z-10 block"
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-id={post.guid}
                        >
                            <div className="relative z-50 flex flex-col space-y-1 p-2">
                                <h3 className="font-normal dark:text-zinc-100">
                                    {post.title}
                                </h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                                    {extractDescription(post.description)}
                                </p>
                                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                                    {new Date(post.pubDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                        </Link>
                    ))}
                </AnimatedBackground>
            </div>
        </motion.section>
    )
}
