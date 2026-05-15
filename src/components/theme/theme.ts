import { createTheme, PaletteMode } from '@mui/material/styles'

export const getTheme = (mode: PaletteMode) => {
  const isLight = mode === 'light'

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isLight ? '#09090b' : '#ffffff',
      },
      background: {
        default: isLight ? '#fcfcfc' : '#09090b',
        paper: isLight ? '#ffffff' : '#111113',
      },
      text: {
        primary: isLight ? '#0f0f11' : '#f8f8f8',
        secondary: isLight ? '#5c5c6e' : '#a1a1aa',
        disabled: isLight ? '#9898a6' : '#52525b',
      },
      divider: isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255, 255, 255, 0.08)',
    },
    typography: {
      fontFamily:
        'var(--font-inter), "Inter", "Helvetica", "Arial", sans-serif',
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            boxShadow: isLight ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
            border: `1px solid ${
              isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255, 255, 255, 0.08)'
            }`,
            borderRadius: 16,
          },
        },
        defaultProps: {
          elevation: 0,
        },
      },
    },
  })
}
