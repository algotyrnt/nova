import { WORK_EXPERIENCE } from '@/lib/config'
import { SPRING_TRANSITION } from '@/lib/constants'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { FadeIn } from '@/components/ui/fade-in'
import { SectionHeader } from '@/components/ui/section-header'

export function ExperienceSection() {
  return (
    <FadeIn>
      <SectionHeader title="Experience" />
      <AnimatedBackground
        enableHover
        className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
        transition={SPRING_TRANSITION}
      >
        {WORK_EXPERIENCE.map((job) => (
          <a
            key={job.id}
            className="relative z-10 -mx-3 block rounded-xl px-3 py-3"
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            data-id={job.id}
          >
            <div className="relative z-50 flex w-full flex-row justify-between p-2">
              <div>
                <h3 className="font-normal dark:text-zinc-100">{job.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {job.company}
                </p>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                {job.start} – {job.end}
              </p>
            </div>
          </a>
        ))}
      </AnimatedBackground>
    </FadeIn>
  )
}
