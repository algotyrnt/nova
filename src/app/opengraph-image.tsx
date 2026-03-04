import { ImageResponse } from 'next/og'
import { SITE_DESCRIPTION, SITE_NAME, WEBSITE_URL } from '@/lib/config'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        background: '#fcfcfc',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px 90px',
        fontFamily: 'sans-serif',
      }}
    >
      <p
        style={{
          fontSize: 18,
          color: '#aaa',
          margin: 0,
          marginBottom: 20,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        {new URL(WEBSITE_URL).hostname}
      </p>
      <h1
        style={{
          fontSize: 64,
          fontWeight: 700,
          color: '#111',
          margin: 0,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}
      >
        {SITE_NAME}
      </h1>
      <p
        style={{
          fontSize: 26,
          color: '#555',
          marginTop: 24,
          marginBottom: 0,
          maxWidth: 700,
          lineHeight: 1.5,
        }}
      >
        {SITE_DESCRIPTION}
      </p>
    </div>,
    { ...size },
  )
}
