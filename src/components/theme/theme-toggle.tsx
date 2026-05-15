'use client'
import * as React from 'react'
import { useTheme } from 'next-themes'
import IconButton from '@mui/material/IconButton'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { tokens } from './tokens'

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <IconButton
        size="small"
        sx={{
          color: 'text.disabled',
          p: 0.75,
          borderRadius: '8px',
          border: '1px solid',
          borderColor: 'transparent',
        }}
      >
        <div style={{ width: 18, height: 18 }} />
      </IconButton>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <IconButton
      size="small"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      sx={{
        color: 'text.disabled',
        p: 0.75,
        borderRadius: '8px',
        border: '1px solid',
        borderColor: tokens.border.subtle,
        transition: 'all 0.15s ease',
        '&:hover': {
          color: 'text.primary',
          bgcolor: 'rgba(0,0,0,0.04)',
          borderColor: tokens.border.medium,
        },
        '& svg': {
          fontSize: 18,
        },
      }}
    >
      {isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
    </IconButton>
  )
}
