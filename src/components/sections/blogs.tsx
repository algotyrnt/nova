import { MEDIUM_USERNAME, SCROLL_MARGIN_TOP } from '@/lib/config'
import { getBlogs } from '@/lib/api/medium'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import { StaggerWrapper } from '@/components/ui/stagger'
import { BlogCard } from '@/components/cards/blog-card'

export async function Blogs() {
  const blogs = await getBlogs()

  if (!blogs.length) return null

  return (
    <Box
      component="section"
      id="blog"
      sx={{ scrollMarginTop: SCROLL_MARGIN_TOP }}
    >
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2.5,
        }}
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
            <BlogCard key={post.link} post={post} />
          ))}
        </Stack>
      </StaggerWrapper>
    </Box>
  )
}
