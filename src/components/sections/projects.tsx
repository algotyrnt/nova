import { GITHUB_USERNAME, SCROLL_MARGIN_TOP } from '@/lib/config'
import { getPinnedProjects } from '@/lib/api/github'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { StaggerWrapper } from '@/components/ui/stagger'
import { ProjectCard } from '@/components/cards/project-card'

export async function Projects() {
  const projects = await getPinnedProjects()

  if (!projects.length) return null

  return (
    <Box
      component="section"
      id="projects"
      sx={{ scrollMarginTop: SCROLL_MARGIN_TOP }}
    >
      {/* Section header */}
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 4,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: '0.68rem',
            fontWeight: 700,
            color: 'text.disabled',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          Selected Projects
        </Typography>
        <Link
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          rel="noopener"
          sx={{
            fontSize: '0.75rem',
            color: 'text.disabled',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.25,
            transition: 'color 0.15s ease',
            '&:hover': { color: 'text.secondary' },
          }}
        >
          see more
        </Link>
      </Stack>

      <StaggerWrapper
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
          gap: '10px',
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={`${project.author}-${project.name}`}
            project={project}
          />
        ))}
      </StaggerWrapper>
    </Box>
  )
}
