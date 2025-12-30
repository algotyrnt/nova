import React from 'react'
import {
  EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SOCIAL_LINKS,
  WEBSITE_URL,
} from '@/util/data'

export default function Head() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: WEBSITE_URL,
    email: `mailto:${EMAIL}`,
    sameAs: SOCIAL_LINKS.map((s) => s.link),
    jobTitle: SITE_DESCRIPTION,
  }

  return (
    <>
      <link rel="canonical" href={WEBSITE_URL} />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <script
        key="ld+json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
