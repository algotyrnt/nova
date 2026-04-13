'use client'
import Link from '@mui/material/Link'
import { StaggerItem } from '@/components/ui/stagger'
import { tokens } from '@/components/theme/theme'

interface ConnectCardProps {
  link: {
    label: string
    link: string
  }
}

export function ConnectCard({ link }: ConnectCardProps) {
  return (
    <StaggerItem>
      <Link
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.5,
          px: 1.25,
          py: 0.5,
          fontSize: '0.72rem',
          color: 'text.secondary',
          textDecoration: 'none',
          letterSpacing: '0.01em',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '8px',
          bgcolor: 'background.paper',
          transition: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            color: 'text.primary',
            borderColor: tokens.border.medium,
            boxShadow: tokens.shadow.socialHover,
            transform: 'translateY(-1px)',
          },
        }}
      >
        {link.label}
      </Link>
    </StaggerItem>
  )
}
