'use client'
import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

interface PrivacyProps {
  open: boolean
  onClose: () => void
}

const PRIVACY_POLICY_LAST_UPDATED = 'March 9, 2026'

export function Privacy({ open, onClose }: PrivacyProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      sx={{
        '& .MuiDialog-paper': {
          maxHeight: '85vh',
        },
      }}
    >
      <DialogTitle
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 650,
              color: 'text.primary',
            }}
          >
            Privacy Policy
          </Typography>

          <Typography
            sx={{
              fontSize: '0.8125rem',
              color: 'text.disabled',
            }}
          >
            Last updated: {PRIVACY_POLICY_LAST_UPDATED}
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent
        dividers
        sx={{
          px: 3,
          py: 3,
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <Box
          sx={{
            '& > *:not(:last-child)': { mb: 3 },
            '& h2': {
              fontSize: '1.125rem',
              fontWeight: 600,
              mt: 3,
              mb: 2,
              color: 'text.primary',
            },
            '& p': {
              fontSize: '0.9rem',
              lineHeight: 1.7,
              letterSpacing: '0.005em',
              color: 'text.secondary',
              textAlign: 'justify',
              hyphens: 'auto',
            },
            '& ul': {
              pl: 3,
              '& li': {
                fontSize: '0.9rem',
                lineHeight: 1.6,
                letterSpacing: '0.005em',
                color: 'text.secondary',
                mb: 1,
              },
            },
            '& a': {
              color: 'text.primary',
              textDecorationColor: 'rgba(0,0,0,0.25)',
              textUnderlineOffset: 3,
              fontWeight: 450,
              '&:hover': { textDecorationColor: 'text.primary' },
            },
          }}
        >
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
              mt: 3,
              pt: 2,
              borderTop: '1px solid',
              borderColor: 'divider',
              fontSize: '0.8125rem !important',
              color: 'text.disabled !important',
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
        </Box>
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
