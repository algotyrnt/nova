'use client'
import * as React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import NextAppDirEmotionCacheProvider from './emotion-cache'
import { getTheme } from './theme'

function MuiThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = React.useMemo(() => {
    const mode = (resolvedTheme || theme || 'light') as 'light' | 'dark'
    return getTheme(mode)
  }, [theme, resolvedTheme])

  if (!mounted) {
    return (
      <MuiThemeProvider theme={getTheme('light')}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    )
  }

  return (
    <MuiThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <MuiThemeWrapper>{children}</MuiThemeWrapper>
      </NextThemesProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
