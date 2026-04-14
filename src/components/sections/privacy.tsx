'use client'
import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

interface PrivacyProps {
  open: boolean
  onClose: () => void
}

const PRIVACY_POLICY_LAST_UPDATED = 'March 9, 2026'

const dialogTitleSx = {
  px: { xs: 2.5, sm: 3 },
  py: { xs: 2, sm: 2.5 },
} as const

const dialogTitleBoxSx = {
  display: 'flex',
  flexDirection: 'column',
  gap: 0.5,
}

const dialogContentSx = {
  px: { xs: 2.5, sm: 3 },
  py: { xs: 2.5, sm: 3 },
  overflowY: 'auto' as const,
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}

const dialogContentBoxSx = {
  '& h2': {
    fontSize: { xs: '1.0625rem', sm: '1.125rem' },
    fontWeight: 600,
    color: 'text.primary',
  },
  '& p': {
    fontSize: { xs: '0.875rem', sm: '0.9rem' },
    lineHeight: { xs: 1.6, sm: 1.7 },
    letterSpacing: '0.005em',
    color: 'text.secondary',
    textAlign: { xs: 'left', sm: 'justify' },
    hyphens: 'auto',
  },
  '& ul': {
    pl: { xs: 2.5, sm: 3 },
    '& li': {
      fontSize: { xs: '0.875rem', sm: '0.9rem' },
      lineHeight: { xs: 1.5, sm: 1.6 },
      letterSpacing: '0.005em',
      color: 'text.secondary',
      mb: { xs: 0.75, sm: 1 },
    },
  },
  '& a': {
    color: 'text.primary',
    textDecorationColor: 'rgba(0,0,0,0.25)',
    textUnderlineOffset: 3,
    fontWeight: 450,
    '&:hover': { textDecorationColor: 'rgba(15,15,17,1)' },
  },
} as const

export function Privacy({ open, onClose }: PrivacyProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      transitionDuration={{ enter: 300, exit: 200 }}
      sx={{
        '& .MuiDialog-paper': {
          maxHeight: { xs: '90vh', sm: '85vh' },
          m: { xs: 2, sm: 3 },
          width: { xs: 'calc(100% - 32px)', sm: 'auto' },
          borderRadius: { xs: 2, sm: 3 },
        },
      }}
    >
      <DialogTitle sx={dialogTitleSx}>
        <Box sx={dialogTitleBoxSx}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                fontWeight: 650,
                color: 'text.primary',
                lineHeight: 1.2,
              }}
            >
              Privacy Policy
            </Typography>

            <IconButton
              aria-label="close"
              onClick={onClose}
              size="small"
              sx={{
                color: 'text.secondary',
                mr: -1, // gentle negative margin to align perfectly with padding
                '&:hover': {
                  color: 'text.primary',
                  bgcolor: 'action.hover',
                },
              }}
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>

          <Typography
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.8125rem' },
              color: 'text.disabled',
            }}
          >
            Last updated: {PRIVACY_POLICY_LAST_UPDATED}
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent sx={dialogContentSx}>
        <Stack spacing={{ xs: 2, sm: 3 }} sx={dialogContentBoxSx}>
          <Typography component="p">
            This privacy policy describes how (&quot;we&quot;, &quot;us&quot;,
            or &quot;our&quot;) collects, uses, and shares your information when
            you visit our website.
          </Typography>

          <Typography variant="h2" component="h2">
            Information We Collect
          </Typography>

          <Typography component="p">
            We collect minimal information about your visit through third-party
            services:
          </Typography>

          <Box component="ul">
            <li>
              <strong>Analytics Data:</strong> We use{' '}
              <Link
                href="https://vercel.com/docs/analytics/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel Analytics
              </Link>{' '}
              to collect anonymous usage statistics including page views,
              referrers, device type, and general location (country/city).
            </li>
            <li>
              <strong>Performance Data:</strong> We use{' '}
              <Link
                href="https://vercel.com/docs/speed-insights"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel Speed Insights
              </Link>{' '}
              to collect performance metrics to improve site loading times.
            </li>
          </Box>

          <Typography component="p">
            We <strong>do not</strong>:
          </Typography>

          <Box component="ul">
            <li>Collect personally identifiable information</li>
            <li>Use advertising trackers or cookies</li>
            <li>Store user accounts or login information</li>
            <li>Share your data with advertisers</li>
            <li>Track you across other websites</li>
          </Box>

          <Typography variant="h2" component="h2">
            How We Use Your Information
          </Typography>

          <Typography component="p">
            The anonymous analytics data we collect is used solely to:
          </Typography>

          <Box component="ul">
            <li>Understand how visitors use our website</li>
            <li>Improve site content and user experience</li>
            <li>Optimize website performance and loading speeds</li>
            <li>Identify and fix technical issues</li>
          </Box>

          <Typography variant="h2" component="h2">
            Third-Party Services
          </Typography>

          <Typography component="p">
            We use the following third-party services that may collect
            information:
          </Typography>

          <Box component="ul">
            <li>
              <strong>Vercel:</strong> Hosts our website and provides analytics
              services. View{' '}
              <Link
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel&apos;s Privacy Policy
              </Link>
              .
            </li>
            <li>
              <strong>GitHub:</strong> We display public repository information
              from GitHub. No personal data is collected through this
              integration.
            </li>
            <li>
              <strong>Medium:</strong> We display public blog posts from Medium.
              No personal data is collected through this integration.
            </li>
          </Box>

          <Typography variant="h2" component="h2">
            Data Retention
          </Typography>

          <Typography component="p">
            Analytics data is retained according to Vercel&apos;s data retention
            policies, typically for a period of up to 90 days. We do not store
            any personal data on our own servers.
          </Typography>

          <Typography variant="h2" component="h2">
            Changes to This Policy
          </Typography>

          <Typography component="p">
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </Typography>

          <Typography
            component="p"
            sx={{
              '&&': {
                mt: 3,
                fontSize: '0.8125rem',
                color: 'text.disabled',
              },
            }}
          >
            This website is open source. View the code at{' '}
            <Link
              href="https://github.com/algotyrnt/nova"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/algotyrnt/nova
            </Link>
            .
          </Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export function usePrivacyModal() {
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const closeModal = () => setOpen(false)

  return { open, openModal, closeModal }
}
