'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
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
