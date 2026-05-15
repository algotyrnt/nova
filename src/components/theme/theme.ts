import { createTheme, PaletteMode } from '@mui/material/styles'
import { tokens } from './tokens'

export const getTheme = (mode: PaletteMode) => {
  const isLight = mode === 'light'

  return createTheme({
    palette: {
      mode,
      primary: {
        main: tokens.palette.primaryMainHex,
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
      divider: tokens.border.subtle,
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
            boxShadow: tokens.shadow.card,
            border: `1px solid ${tokens.border.subtle}`,
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
