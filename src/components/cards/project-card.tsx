'use client'
import type { Repo } from '@/lib/types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { StaggerItem } from '@/components/ui/stagger'
import { tokens } from '@/components/theme/tokens'

/** GitHub language color palette (matches github.com dot colors). */
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

interface ProjectCardProps {
  project: Repo
}

export function ProjectCard({ project }: ProjectCardProps) {
  const langColor = LANG_COLORS[project.language] ?? '#aaaaaa'

  return (
    <StaggerItem style={{ height: '100%' }}>
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
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
          transition:
            'border-color 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            borderColor: tokens.border.medium,
            transform: 'translateY(-2px)',
            boxShadow: tokens.shadow.cardHover,
          },
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: (theme) => theme.palette.primary.main,
            outlineOffset: '2px',
          },
        }}
      >
        <Stack spacing={1.5} sx={{ flex: 1 }}>
          {/* Name */}
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

          {/* Description */}
          <Typography
            sx={{
              fontSize: '0.78rem',
              color: 'text.secondary',
              lineHeight: 1.65,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              lineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              flex: 1,
            }}
          >
            {project.description || 'No description provided.'}
          </Typography>

          {/* Language badge */}
          {project.language && (
            <Stack
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 0.75,
                mt: 'auto',
                pt: 0.5,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: langColor,
                  flexShrink: 0,
                  boxShadow: `0 0 0 1.5px ${langColor}22`,
                }}
              />
              <Typography
                sx={{
                  fontSize: '0.72rem',
                  color: 'text.disabled',
                  letterSpacing: '0.01em',
                }}
              >
                {project.language}
              </Typography>
            </Stack>
          )}
        </Stack>
      </Link>
    </StaggerItem>
  )
}
