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

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'

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
          bgcolor: 'action.hover',
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
