import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import ThemeRegistry from '@/components/theme/registry'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import {
  AUTHOR_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SOCIAL_LINKS,
  TWITTER_HANDLE,
  WEBSITE_URL,
} from '@/lib/config'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fcfcfc',
}

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: '%s | ' + SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(WEBSITE_URL),
  keywords: SITE_KEYWORDS,
  authors: [{ name: AUTHOR_NAME, url: '/' }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: TWITTER_HANDLE ? `@${TWITTER_HANDLE}` : undefined,
    creator: TWITTER_HANDLE ? `@${TWITTER_HANDLE}` : undefined,
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/',
  },
  category: 'personal',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${WEBSITE_URL}/#website`,
      name: SITE_NAME,
      url: WEBSITE_URL,
      description: SITE_DESCRIPTION,
    },
    {
      '@type': 'Person',
      '@id': `${WEBSITE_URL}/#person`,
      name: AUTHOR_NAME,
      url: WEBSITE_URL,
      jobTitle: 'Software Engineer',
      description: SITE_DESCRIPTION,
      sameAs: SOCIAL_LINKS.map((s) => s.link),
    },
  ],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON_LD }}
        />
      </head>
      <body className={inter.variable} suppressHydrationWarning>
        <ThemeRegistry>
          <div className="site-shell">
            <div className="site-shell__inner">
              <Header />
              {children}
              <SpeedInsights />
              <Analytics />
              <Footer />
            </div>
          </div>
        </ThemeRegistry>
      </body>
    </html>
  )
}
