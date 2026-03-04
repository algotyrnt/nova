import { GITHUB_USERNAME } from '@/lib/config'
import { getPinnedProjects } from '@/lib/api/github'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { StaggerWrapper, StaggerItem } from '@/components/ui/Stagger'

// Real GitHub language colors
const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Go: '#00ADD8',
  Rust: '#dea584',
  Java: '#b07219',
  'C++': '#f34b7d',
  'C#': '#178600',
  C: '#555555',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Shell: '#89e051',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Scala: '#c22d40',
  Dart: '#00B4AB',
}

export async function ProjectsSection() {
  const projects = await getPinnedProjects()

  if (!projects.length) return null

  return (
    <Box component="section" id="projects" sx={{ scrollMarginTop: '80px' }}>
      {/* Section header */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
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
          <StaggerItem key={`${project.author}-${project.name}`} style={{ height: '100%' }}>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                p: 2.25,
                borderRadius: '10px',
                textDecoration: 'none',
                color: 'inherit',
                border: '1px solid rgba(0,0,0,0.08)',
                bgcolor: 'background.paper',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                '&:hover': {
                  borderColor: 'rgba(0,0,0,0.14)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 24px rgba(0,0,0,0.07)',
                },
              }}
            >
              <Stack spacing={1.5} sx={{ flex: 1 }}>
                {/* Name + arrow */}
                <Stack direction="row" alignItems="flex-start" justifyContent="space-between" spacing={1}>
                  <Typography
                    component="h3"
                    sx={{
                      fontWeight: 500,
                      fontSize: '0.85rem',
                      color: 'text.primary',
                      letterSpacing: '-0.015em',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.name}
                  </Typography>
                </Stack>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: '0.78rem',
                    color: 'text.secondary',
                    lineHeight: 1.65,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    flex: 1,
                  }}
                >
                  {project.description || 'No description provided.'}
                </Typography>

                {/* Language badge */}
                {project.language && (
                  <Stack direction="row" alignItems="center" spacing={0.75} sx={{ mt: 'auto', pt: 0.5 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: LANG_COLORS[project.language] ?? 'text.disabled',
                        flexShrink: 0,
                        boxShadow: `0 0 0 1.5px ${LANG_COLORS[project.language] ?? 'rgba(0,0,0,0.15)'}22`,
                      }}
                    />
                    <Typography sx={{ fontSize: '0.72rem', color: 'text.disabled', letterSpacing: '0.01em' }}>
                      {project.language}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Link>
          </StaggerItem>
        ))}
      </StaggerWrapper>
    </Box>
  )
}
