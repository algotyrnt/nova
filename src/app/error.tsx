'use client'

import { useEffect } from 'react'
import { StatusPage } from '@/components/ui/status-page'

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
    <StatusPage
      title="Something went wrong!"
      message="An unexpected error occurred while loading this page."
      action={{ type: 'button', label: 'Try again', onClick: reset }}
    />
  )
}
