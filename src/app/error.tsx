'use client'

import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to an error reporting service here if needed
    console.error(error)
  }, [error])

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
      <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 500 }}>
        Something went wrong!
      </Typography>
      <Typography color="text.secondary">
        An unexpected error occurred while loading this page.
      </Typography>
      <Button variant="outlined" sx={{ mt: 2 }} onClick={reset}>
        Try again
      </Button>
    </Box>
  )
}
