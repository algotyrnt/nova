import { About } from '@/components/sections/about'
import { Work } from '@/components/sections/work'
import { Connect } from '@/components/sections/connect'
import { Projects } from '@/components/sections/projects'
import { Blogs } from '@/components/sections/blogs'
import Stack from '@mui/material/Stack'
import { FadeIn } from '@/components/ui/fade-in'

export default function Personal() {
  return (
    <Stack spacing={8} component="main" sx={{ pt: 3 }}>
      <FadeIn delay={0} y={12}>
        <About />
      </FadeIn>
      <FadeIn delay={0.05} y={12}>
        <Work />
      </FadeIn>
      <FadeIn delay={0.1} y={12}>
        <Projects />
      </FadeIn>
      <FadeIn delay={0.15} y={12}>
        <Blogs />
      </FadeIn>
      <FadeIn delay={0.2} y={12}>
        <Connect />
      </FadeIn>
    </Stack>
  )
}
