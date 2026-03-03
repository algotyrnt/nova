import { ABOUT_TEXT } from '@/lib/config'
import { FadeIn } from '@/components/ui/fade-in'

export function AboutSection() {
  return (
    <FadeIn>
      <p className="whitespace-pre-line text-zinc-600 dark:text-zinc-400">
        {ABOUT_TEXT}
      </p>
    </FadeIn>
  )
}
