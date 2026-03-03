import { GITHUB_USERNAME } from '@/lib/config'
import { SPRING_TRANSITION } from '@/lib/constants'
import { getPinnedProjects } from '@/lib/api/github'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { FadeIn } from '@/components/ui/fade-in'
import { SectionHeader } from '@/components/ui/section-header'

export async function ProjectsSection() {
  const projects = await getPinnedProjects()

  if (!projects.length) return null

  return (
    <FadeIn className="space-y-4">
      <SectionHeader
        title="Projects"
        href={`https://github.com/${GITHUB_USERNAME}`}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
          transition={SPRING_TRANSITION}
        >
          {projects.map((project) => (
            <a
              key={`${project.author}-${project.name}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 block rounded-xl p-4"
            >
              <div className="relative z-50 flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium dark:text-zinc-100">
                    {project.name}
                  </h3>
                  {project.language && (
                    <span className="flex items-center text-xs text-zinc-500 dark:text-zinc-400">
                      <span className="mr-1 h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                      {project.language}
                    </span>
                  )}
                </div>
                <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description || 'No description provided.'}
                </p>
              </div>
            </a>
          ))}
        </AnimatedBackground>
      </div>
    </FadeIn>
  )
}
