type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

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

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Ensuring thread safety with Optimistic and Pessimistic Locking',
    description: 'Ensuring thread safety in Spring Boot multi-user applications is crucial.',
    link: 'https://tyrnt.medium.com/ensuring-thread-safety-with-optimistic-and-pessimistic-locking-6bacb9b53de6',
    uid: 'blog3',
  },
  {
    title: 'Understanding DevOps',
    description: 'The approach that revolutionized the software development and IT operations landscape.',
    link: 'https://medium.com/@tyrnt/understanding-devops-b17bad763ff7',
    uid: 'blog2',
  },
  {
    title: 'Travel Sri Lanka',
    description: 'One of my older blogs. I started this after my O/L exams. But it is not active now.',
    link: 'https://travelsinsrilanka.blogspot.com/',
    uid: 'blog1',
  },
]

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
    link: 'https://medium.com/@tyrnt',
  },
  {
    label: 'YouTube',
    link: 'https://youtube.com/@algotyrnt',
  },
]

export const EMAIL = 'x@tyrnt.co'
