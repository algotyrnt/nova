import { createTheme } from '@mui/material/styles'
import { tokens } from './tokens'

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
