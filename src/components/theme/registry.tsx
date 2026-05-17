'use client'
import * as React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import NextAppDirEmotionCacheProvider from './emotion-cache'
import { lightTheme, darkTheme } from './theme'

function MuiThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const theme = mounted && resolvedTheme === 'dark' ? darkTheme : lightTheme

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
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
