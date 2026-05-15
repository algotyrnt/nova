'use client'
import * as React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import NextAppDirEmotionCacheProvider from './emotion-cache'
import { getTheme } from './theme'

function MuiThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = React.useMemo(() => {
    const mode = (resolvedTheme ?? 'light') as 'light' | 'dark'
    return getTheme(mode)
  }, [resolvedTheme])

  if (!mounted) {
    return null
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
      <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
        <MuiThemeWrapper>{children}</MuiThemeWrapper>
      </NextThemesProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
