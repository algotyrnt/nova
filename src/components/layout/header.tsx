'use client'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
]

export function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        py: 2.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 50,
        bgcolor: 'rgba(248, 248, 248, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Box>
          <Typography
            component="span"
            sx={{
              display: 'block',
              fontWeight: 600,
              color: 'text.primary',
              fontSize: '0.875rem',
              letterSpacing: '-0.02em',
              '& a': { textDecoration: 'none', color: 'inherit' },
            }}
          >
            <Link href="/">algotyrnt</Link>
          </Typography>
          <Typography
            component="span"
            sx={{
              display: 'block',
              fontSize: '0.75rem',
              color: 'text.disabled',
              letterSpacing: '-0.01em',
              mt: 0.15,
            }}
          >
            Punjitha Bandara
          </Typography>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <Stack direction="row" spacing={0} alignItems="center">
          {NAV_LINKS.map((item, i) => (
            <Typography
              key={item.label}
              component="a"
              href={item.href}
              sx={{
                display: 'inline-block',
                px: 1.5,
                py: 0.5,
                fontSize: '0.8rem',
                color: 'text.disabled',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                borderRadius: '6px',
                transition: 'color 0.15s ease, background-color 0.15s ease',
                '&:hover': {
                  color: 'text.primary',
                  bgcolor: 'rgba(0,0,0,0.04)',
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>
      </motion.div>
    </Box>
  )
}
