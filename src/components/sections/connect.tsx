import { EMAIL, SOCIAL_LINKS } from '@/lib/config'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { StaggerWrapper } from '@/components/ui/stagger'
import { ConnectCard } from '@/components/cards/connect-card'

export function Connect() {
  return (
    <Box component="section">
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
        Connect
      </Typography>

      <Typography
        sx={{
          mb: 3,
          color: 'text.secondary',
          fontSize: '0.875rem',
          lineHeight: 1.7,
        }}
      >
        Have something in mind? Reach me at{' '}
        <Link
          href={`mailto:${EMAIL}`}
          sx={{
            color: 'text.primary',
            textDecorationColor: 'rgba(0,0,0,0.25)',
            textUnderlineOffset: 3,
            fontWeight: 450,
            '&:hover': { textDecorationColor: 'text.primary' },
          }}
        >
          {EMAIL}
        </Link>
      </Typography>

      <StaggerWrapper
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          gap: '12px',
          alignItems: 'center',
          overflowX: 'auto',
          paddingBottom: '4px',
          scrollbarWidth: 'none',
        }}
      >
        {SOCIAL_LINKS.map((link) => (
          <ConnectCard key={link.label} link={link} />
        ))}
      </StaggerWrapper>
    </Box>
  )
}
