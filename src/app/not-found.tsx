import type { Metadata } from 'next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 10,
        gap: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 700 }}>
        404
      </Typography>
      <Typography color="text.secondary">
        Could not find the requested resource.
      </Typography>
      <Link href="/" passHref>
        <Button variant="outlined" sx={{ mt: 2 }}>
          Return Home
        </Button>
      </Link>
    </Box>
  )
}
