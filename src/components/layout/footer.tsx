'use client'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Privacy, usePrivacyModal } from '@/components/sections/Privacy'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { open, openModal, closeModal } = usePrivacyModal()

  return (
    <>
      <Box
        component="footer"
        sx={{
          mt: 3,
          pt: 2.5,
          pb: 2.5,
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 1, sm: 0 }}
        >
          <Typography
            sx={{
              fontSize: '0.72rem',
              color: 'text.disabled',
              letterSpacing: '0.02em',
            }}
          >
            © {currentYear}{' '}
            <Link
              href="https://github.com/algotyrnt/nova"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.primary',
                fontWeight: 400,
                textDecoration: 'none',
                '&:hover': {
                  color: 'primary.main',
                },
                transition: 'color 0.2s ease',
              }}
            >
              algotyrnt
            </Link>
            .
          </Typography>

          <Typography
            sx={{
              fontSize: '0.72rem',
              color: 'text.disabled',
              letterSpacing: '0.02em',
            }}
          >
            Released under the{' '}
            <Link
              href="https://github.com/algotyrnt/nova/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.primary',
                textDecoration: 'none',
                '&:hover': {
                  color: 'text.secondary',
                },
                transition: 'color 0.2s ease',
              }}
            >
              MIT License
            </Link>
            {' | '}
            <Box
              component="button"
              onClick={() => {
                import('react').then((React) => {
                  React.startTransition(() => {
                    openModal()
                  })
                })
              }}
              sx={{
                fontSize: 'inherit',
                fontFamily: 'inherit',
                color: 'text.primary',
                textDecoration: 'none',
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                '&:hover': {
                  color: 'text.secondary',
                },
                transition: 'color 0.2s ease',
              }}
            >
              Privacy Policy
            </Box>
          </Typography>
        </Stack>
      </Box>

      <Privacy open={open} onClose={closeModal} />
    </>
  )
}
