import { AboutSection } from '@/components/sections/About'
import { ExperienceSection } from '@/components/sections/Experience'
import { ConnectSection } from '@/components/sections/Connect'
import { ProjectsSection } from '@/components/sections/Projects'
import { BlogsSection } from '@/components/sections/Blogs'
import { FadeInStagger } from '@/components/ui/fade-in'

export default function Personal() {
  return (
    <FadeInStagger className="space-y-24">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <BlogsSection />
      <ConnectSection />
    </FadeInStagger>
  )
}
