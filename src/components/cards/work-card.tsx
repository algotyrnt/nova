'use client'
import type { WorkExperience } from '@/lib/types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { StaggerItem } from '@/components/ui/stagger'

interface WorkCardProps {
  job: WorkExperience
}

export function WorkCard({ job }: WorkCardProps) {
  return (
    <StaggerItem>
      <Link
        href={job.link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          py: 1.75,
          px: 0,
          textDecoration: 'none',
          color: 'inherit',
          transition: 'padding-left 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            pl: 1.5,
          },
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: (theme) => theme.palette.primary.main,
            outlineOffset: '2px',
            textDecoration: 'none',
          },
        }}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            width: '100%',
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              component="h3"
              sx={{
                fontWeight: 500,
                fontSize: '0.875rem',
                color: 'text.primary',
                letterSpacing: '-0.01em',
                mb: 0.25,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {job.title}
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '0.83rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {job.company}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: 'text.disabled',
              fontSize: '0.775rem',
              letterSpacing: '0.01em',
              flexShrink: 0,
            }}
          >
            {job.start} – {job.end}
          </Typography>
        </Stack>
      </Link>
    </StaggerItem>
  )
}
