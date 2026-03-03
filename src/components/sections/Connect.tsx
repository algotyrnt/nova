import { EMAIL, SOCIAL_LINKS } from '@/lib/config'
import { MagneticSocialLink } from '@/components/ui/magnetic-social-link'
import { FadeIn } from '@/components/ui/fade-in'
import { SectionHeader } from '@/components/ui/section-header'

export function ConnectSection() {
  return (
    <FadeIn>
      <SectionHeader title="Connect" />
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
    </FadeIn>
  )
}
