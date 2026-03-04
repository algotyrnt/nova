import { EMAIL, SOCIAL_LINKS } from '@/lib/config'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { StaggerWrapper, StaggerItem } from '@/components/ui/Stagger'

export function ConnectSection() {
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

      <StaggerWrapper>
        <Stack
          direction="row"
          flexWrap="nowrap"
          gap={1.5}
          alignItems="center"
          sx={{
            overflowX: 'auto',
            pb: 0.5,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {SOCIAL_LINKS.map((link) => (
            <StaggerItem key={link.label}>
              <Link
                href={link.link}
                target="_blank"
                rel="noopener"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  px: 1.25,
                  py: 0.5,
                  fontSize: '0.72rem',
                  color: 'text.secondary',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '8px',
                  bgcolor: 'background.paper',
                  transition: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    color: 'text.primary',
                    borderColor: 'rgba(0,0,0,0.14)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                {link.label}
              </Link>
            </StaggerItem>
          ))}
        </Stack>
      </StaggerWrapper>
    </Box>
  )
}
