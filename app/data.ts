type Project = {
  src: string
  title: string
  description: string
  paragraph1: string
  paragraph2: string
  link: string
  id: string
}

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

export const PROJECTS: Project[] = [
  {
    src: 'https://i.postimg.cc/zf2Rj96Y/codeon.png',
    title: 'Codeon',
    description: 'AI-powered code analyser that provide personalized feedback.',
    paragraph1: 'Codeon is a code analyser that leverages AI to analyze code, offer intelligent recommendations, and help developers improve their programming skills. Whether you are a beginner or an experienced coder, Codeon provides tailored feedback to optimize your code quality and efficiency.',
    paragraph2: 'Codeon supports multiple programming languages, real-time collaboration, and an intuitive user interface. With features like code analytics, error detection, and performance insights, Codeon empowers developers to write better code faster.',
    link: 'https://codeon.site/',
    id: 'pro1',
  },
  {
    src: 'https://i.postimg.cc/0QLKg79t/shiftsl.png',
    title: 'ShiftSL',
    description: 'A smart roster management system for hospitals.',
    paragraph1: 'ShiftSL simplifies hospital workforce management by providing an intuitive platform for HR admins, ward admins, and doctors. HR admins can create wards, manage user accounts, and assign ward admins, while ward admins handle shift scheduling and doctor assignments. Doctors can request leave, and unfilled shifts are automatically moved to a shift pool for others to claim.',
    paragraph2: 'With integrated WhatsApp notifications via Twilio, real-time shift updates, and secure authentication using Spring Security, ShiftSL ensures seamless coordination between hospital staff. Designed for efficiency and reliability, ShiftSL helps hospitals manage their workforce effortlessly.',
    link: 'https://shiftsl.com/',
    id: 'pro2',
  },
  {
    src: 'https://i.postimg.cc/FKHL09Px/adventurerunner.png',
    title: 'Adventure Runner - 3D',
    description: 'Endlis runner mobile game',
    paragraph1: 'Adventure Runner - 3D is a free endless runner game. It has two maps and four players. At the start of the game, only one map and one player will be available, and you can unlock one map and three players from in-game money.',
    paragraph2: 'Project is open source and available on GitHub.',
    link: 'https://github.com/algotyrnt/Endless-Runner-3D-UnityMobileGame',
    id: 'pro3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'intern',
    start: '2025',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Understanding DevOps',
    description: 'In today’s fast-paced technological landscape, businesses must adapt quickly to remain competitive. One approach that has revolutionized software development and IT operations is DevOps.',
    link: 'https://medium.com/@tyrnt/understanding-devops-b17bad763ff7',
    uid: 'blog-1',
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
    label: 'Instagram',
    link: 'https://www.instagram.com/algotyrnt',
  },
  {
    label: 'Facebook',
    link: 'https://facebook.com/algotyrnt',
  },
]

export const EMAIL = 'x@tyrnt.co'
