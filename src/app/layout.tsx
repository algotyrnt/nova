import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SOCIAL_LINKS,
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
  authors: [{ name: 'Punjitha Bandara', url: WEBSITE_URL }],
  creator: 'Punjitha Bandara',
  publisher: 'Punjitha Bandara',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: WEBSITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    images: [
      {
        url: `${WEBSITE_URL}/opengraph-image`,
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
    site: '@algotyrnt',
    creator: '@algotyrnt',
    images: [`${WEBSITE_URL}/opengraph-image`],
  },
  alternates: {
    canonical: WEBSITE_URL,
  },
  category: 'personal',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  name: SITE_NAME,
                  url: WEBSITE_URL,
                  jobTitle: 'Software Engineer',
                  description: SITE_DESCRIPTION,
                  sameAs: SOCIAL_LINKS.map((s) => s.link),
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable}`}>
        <ThemeRegistry>
          <div
            style={{
              display: 'flex',
              minHeight: '100vh',
              width: '100%',
              flexDirection: 'column',
              fontFamily: 'var(--font-inter)',
            }}
          >
            <div
              style={{
                position: 'relative',
                margin: '0 auto',
                width: '100%',
                maxWidth: '600px',
                flex: 1,
                padding: '0 20px',
              }}
            >
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
