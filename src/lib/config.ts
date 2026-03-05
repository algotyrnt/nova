import type { WorkExperience, SocialLink } from '@/types'

export const EMAIL = process.env.EMAIL || ''
export const WEBSITE_URL = process.env.WEBSITE_URL || ''
export const SITE_NAME = process.env.SITE_NAME || ''
export const SITE_DESCRIPTION = process.env.SITE_DESCRIPTION || ''
export const SITE_KEYWORDS = process.env.SITE_KEYWORDS
  ? JSON.parse(process.env.SITE_KEYWORDS)
  : []

export const ABOUT_TEXT = process.env.ABOUT_TEXT || ''

export const WORK_EXPERIENCE: WorkExperience[] = process.env.WORK_EXPERIENCE
  ? JSON.parse(process.env.WORK_EXPERIENCE)
  : []

export const GITHUB_USERNAME = process.env.GITHUB_USERNAME || ''
export const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME || ''

export const SOCIAL_LINKS: SocialLink[] = process.env.SOCIAL_LINKS
  ? JSON.parse(process.env.SOCIAL_LINKS)
  : []
