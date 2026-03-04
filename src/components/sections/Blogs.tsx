import { MEDIUM_USERNAME } from '@/lib/config'
import { getBlogs } from '@/lib/api/medium'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { StaggerWrapper, StaggerItem } from '@/components/ui/Stagger'

export async function BlogsSection() {
  const blogs = await getBlogs()

  if (!blogs.length) return null

  return (
    <Box component="section" id="blog" sx={{ scrollMarginTop: '80px' }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={2.5}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: '0.68rem',
            fontWeight: 700,
            color: 'text.disabled',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
          }}
        >
          Latest Blogs
        </Typography>
        <Link
          href={`https://${MEDIUM_USERNAME}.medium.com`}
          target="_blank"
          rel="noopener"
          sx={{
            fontSize: '0.75rem',
            color: 'text.disabled',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.25,
            transition: 'color 0.15s ease',
            '&:hover': { color: 'text.secondary' },
          }}
        >
          see more
        </Link>
      </Stack>

      <StaggerWrapper style={{ width: '100%' }}>
        <Stack spacing={0}>
          {blogs.map((post) => (
            <StaggerItem key={post.link}>
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
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={3}
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
                      <Stack direction="row" flexWrap="wrap" gap={0.75}>
                        {post.categories.slice(0, 3).map((cat, i) => (
                          <Typography
                            key={`${cat}-${i}`}
                            component="span"
                            sx={{
                              fontSize: '0.7rem',
                              color: 'text.disabled',
                              letterSpacing: '0.02em',
                            }}
                          >
                            {cat}
                            {i < Math.min(post.categories.length, 3) - 1 && (
                              <Box
                                component="span"
                                sx={{ mx: 0.5, opacity: 0.4 }}
                              >
                                ·
                              </Box>
                            )}
                          </Typography>
                        ))}
                      </Stack>
                    )}
                  </Box>

                  {post.pubDate && (
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
          ))}
        </Stack>
      </StaggerWrapper>
    </Box>
  )
}
