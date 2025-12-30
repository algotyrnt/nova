import { WEBSITE_URL } from '@/util/data'

export async function GET() {
  const base = WEBSITE_URL.replace(/\/$/, '')
  const lastmod = new Date().toISOString().split('T')[0]

  const urls = [{ loc: `${base}/`, lastmod }]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      (u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`,
    )
    .join('\n')}\n</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
