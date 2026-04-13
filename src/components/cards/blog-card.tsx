'use client'
import type { MediumPost } from '@/lib/types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { StaggerItem } from '@/components/ui/stagger'

interface BlogCardProps {
  post: MediumPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <StaggerItem>
      <Link
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          py: 1.75,
          px: 0,
          textDecoration: 'none',
          color: 'inherit',
          transition: 'padding-left 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': { pl: 1.5 },
          '&:hover .blog-title': {
            color: 'text.primary',
          },
        }}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              component="h3"
              className="blog-title"
              sx={{
                fontWeight: 450,
                fontSize: '0.875rem',
                color: 'text.primary',
                letterSpacing: '-0.01em',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: 1.4,
                mb: 0.75,
                transition: 'color 0.15s ease',
              }}
            >
              {post.title}
            </Typography>

            {!!post.categories.length && (
              <Stack
                sx={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 0.75,
                }}
              >
                {post.categories.slice(0, 3).map((cat, i) => (
                  <Typography
                    key={`${post.link}-cat-${i}`}
                    component="span"
                    sx={{
                      fontSize: '0.7rem',
                      color: 'text.disabled',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {cat}
                    {i < Math.min(post.categories.length, 3) - 1 && (
                      <Box component="span" sx={{ mx: 0.5, opacity: 0.4 }}>
                        ·
                      </Box>
                    )}
                  </Typography>
                ))}
              </Stack>
            )}
          </Box>

          {post.pubDate && !isNaN(new Date(post.pubDate).getTime()) && (
            <Typography
              sx={{
                fontSize: '0.72rem',
                color: 'text.disabled',
                letterSpacing: '0.02em',
                flexShrink: 0,
              }}
            >
              {new Date(post.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
              })}
            </Typography>
          )}
        </Stack>
      </Link>
    </StaggerItem>
  )
}
