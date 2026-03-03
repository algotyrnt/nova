import type { WorkExperience, SocialLink } from '@/types'

// ─── Site Identity ────────────────────────────────────────────────────────────

export const EMAIL = 'x@algotyrnt.com'
export const WEBSITE_URL = 'https://algotyrnt.com'
export const SITE_NAME = 'algotyrnt - Punjitha Bandara'
export const SITE_DESCRIPTION =
  'Software Engineer specializing in scalable architectures, systems engineering, and cloud computing.'

export const SITE_KEYWORDS = [
  'algotyrnt',
  'Punjitha',
  'Punjitha Bandara',
  'Software Engineer',
  'Backend Development',
  'Systems Engineering',
  'Cloud Computing',
  'Cloud-native Platforms',
  'Distributed Systems',
  'Microservices',
  'Portfolio',
]

// ─── About ────────────────────────────────────────────────────────────────────

export const ABOUT_TEXT = `Software Engineer specializing in scalable architectures, systems engineering, and cloud computing.
I enjoy building robust systems and solving complex problems with code. My experience ranges from crafting backend microservices to designing reliable cloud-native platforms.`

// ─── Work Experience ──────────────────────────────────────────────────────────

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'WSO2',
    title: 'intern',
    start: '2025 Jun',
    end: 'present',
    link: 'https://wso2.com/',
    id: 'work1',
  },
]

// ─── External Integrations ───────────────────────────────────────────────────

export const GITHUB_USERNAME = 'algotyrnt'
export const MEDIUM_USERNAME = 'tyrnt'

// ─── Social Links ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/algotyrnt',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/punjitha',
  },
  {
    label: 'Medium',
    link: 'https://tyrnt.medium.com/',
  },
  {
    label: 'YouTube',
    link: 'https://youtube.com/@algotyrnt',
  },
]
