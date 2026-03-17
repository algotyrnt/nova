import { WORK_EXPERIENCE } from '@/lib/config'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { StaggerWrapper, StaggerItem } from '@/components/ui/Stagger'

export function WorkSection() {
  return (
    <Box component="section" id="work" sx={{ scrollMarginTop: '80px' }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: '0.68rem',
          fontWeight: 700,
          mb: 2.5,
          color: 'text.disabled',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
        }}
      >
        Work
      </Typography>
      <StaggerWrapper style={{ width: '100%' }}>
        <Stack spacing={0}>
          {WORK_EXPERIENCE.map((job) => (
            <StaggerItem key={job.id}>
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
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="baseline"
                  width="100%"
                >
                  <Box>
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        color: 'text.primary',
                        letterSpacing: '-0.01em',
                        mb: 0.25,
                      }}
                    >
                      {job.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.83rem',
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
          ))}
        </Stack>
      </StaggerWrapper>
    </Box>
  )
}
