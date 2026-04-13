import { createTheme } from '@mui/material/styles'

/**
 * Shared design tokens used both inside the MUI theme and exported for use in
 * sx props / globals where direct theme access isn't available (e.g. in CSS
 * strings that must be resolved at build time).
 *
 * Keep all raw color/shadow values here so a single edit propagates everywhere.
 */
export const tokens = {
  shadow: {
    card: '0 2px 12px rgba(0,0,0,0.06)',
    cardHover: '0 6px 24px rgba(0,0,0,0.07)',
    socialHover: '0 2px 8px rgba(0,0,0,0.06)',
  },
  border: {
    subtle: 'rgba(0,0,0,0.08)',
    medium: 'rgba(0,0,0,0.14)',
  },
  backdrop: {
    header: 'rgba(248, 248, 248, 0.85)',
  },
} as const

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#09090b',
    },
    background: {
      default: '#f8f8f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f0f11',
      secondary: '#5c5c6e',
      disabled: '#9898a6',
    },
    divider: tokens.border.subtle,
  },
  typography: {
    fontFamily: 'var(--font-inter), "Inter", "Helvetica", "Arial", sans-serif',
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

export default theme
