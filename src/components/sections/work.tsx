import { WORK_EXPERIENCE, SCROLL_MARGIN_TOP } from '@/lib/config'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { StaggerWrapper } from '@/components/ui/stagger'
import { WorkCard } from '@/components/cards/work-card'

export function Work() {
  return (
    <Box
      component="section"
      id="work"
      sx={{ scrollMarginTop: SCROLL_MARGIN_TOP }}
    >
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
            <WorkCard key={job.id} job={job} />
          ))}
        </Stack>
      </StaggerWrapper>
    </Box>
  )
}
