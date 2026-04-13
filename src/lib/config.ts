import type { WorkExperience, SocialLink } from '@/lib/types'

const safeJsonParse = <T>(
  envVarName: string,
  value: string | undefined,
  fallback: T,
): T => {
  if (!value) return fallback
  try {
    return JSON.parse(value) as T
  } catch {
    console.warn(`[config] Failed to parse env var: ${envVarName}`)
    return fallback
  }
}

export const EMAIL = process.env.EMAIL || ''
export const WEBSITE_URL = process.env.WEBSITE_URL || 'http://localhost:3000'
export const SITE_NAME = process.env.SITE_NAME || ''
export const SITE_DESCRIPTION = process.env.SITE_DESCRIPTION || ''
export const SITE_KEYWORDS = safeJsonParse('SITE_KEYWORDS', process.env.SITE_KEYWORDS, [])

export const ABOUT_TEXT = process.env.ABOUT_TEXT || ''

export const WORK_EXPERIENCE: WorkExperience[] = safeJsonParse<
  WorkExperience[]
>('WORK_EXPERIENCE', process.env.WORK_EXPERIENCE, [])

export const AUTHOR_NAME = process.env.AUTHOR_NAME || ''
export const TWITTER_HANDLE = process.env.TWITTER_HANDLE || ''

export const GITHUB_USERNAME = process.env.GITHUB_USERNAME || ''
export const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME || ''

export const SOCIAL_LINKS: SocialLink[] = safeJsonParse<SocialLink[]>(
  'SOCIAL_LINKS',
  process.env.SOCIAL_LINKS,
  [],
)

/** Shared layout constants used across section components. */

/**
 * The offset from the top of the viewport used for scroll-linked section
 * anchors. This matches the sticky header height so that anchor navigation
 * lands with the heading fully visible.
 */
export const SCROLL_MARGIN_TOP = '80px'
