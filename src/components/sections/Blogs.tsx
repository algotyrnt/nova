import { MEDIUM_USERNAME } from '@/lib/config'
import { SPRING_TRANSITION } from '@/lib/constants'
import { getBlogs } from '@/lib/api/medium'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { FadeIn } from '@/components/ui/fade-in'
import { SectionHeader } from '@/components/ui/section-header'
import Link from 'next/link'

export async function BlogsSection() {
  const blogs = await getBlogs()

  if (!blogs.length) return null

  return (
    <FadeIn className="space-y-4">
      <SectionHeader
        title="Blog"
        href={`https://${MEDIUM_USERNAME}.medium.com`}
      />
      <AnimatedBackground
        enableHover
        className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
        transition={SPRING_TRANSITION}
      >
        {blogs.map((post) => (
          <Link
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 -mx-3 block rounded-xl px-3 py-3"
          >
            <div className="relative z-50 flex flex-col space-y-2 p-2">
              <h3 className="line-clamp-2 font-medium dark:text-zinc-100">
                {post.title}
              </h3>

              <p className="line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
                {post.description}
              </p>

              {!!post.categories.length && (
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((cat, i) => (
                    <span
                      key={`${cat}-${i}`}
                      className="inline-flex items-center rounded-full bg-zinc-200 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}

              {post.pubDate && (
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  {new Date(post.pubDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              )}
            </div>
          </Link>
        ))}
      </AnimatedBackground>
    </FadeIn>
  )
}
