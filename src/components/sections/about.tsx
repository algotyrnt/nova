import { ABOUT_TEXT } from '@/lib/config'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export function About() {
  return (
    <Box component="section">
      <Typography
        component="p"
        sx={{
          whiteSpace: 'pre-line',
          color: 'text.secondary',
          fontSize: '0.9rem',
          lineHeight: 1.8,
          letterSpacing: '0.005em',
          textAlign: 'justify',
          hyphens: 'auto',
        }}
      >
        {ABOUT_TEXT}
      </Typography>
    </Box>
  )
}
