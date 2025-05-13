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
    paragraph1: 'Codeon is a code analyser that leverages AI to analyze code, offer intelligent recommendations, and help developers improve their programming skills.',
    paragraph2: 'With features like code analytics, error detection, and performance insights, Codeon empowers developers to write better code faster.',
    link: 'https://codeon.site/',
    id: 'pro5',
  },
  {
    src: 'https://i.postimg.cc/0QLKg79t/shiftsl.png',
    title: 'ShiftSL',
    description: 'A smart roster management system for hospitals.',
    paragraph1: 'ShiftSL is a simplifies hospital roster management system that provide an intuitive, efficiency and reliabile platform to manage workforce effortlessly.',
    paragraph2: 'With integrated WhatsApp notifications, real-time shift updates, and secure authentication, ShiftSL ensures seamless coordination between hospital staff.',
    link: 'https://shiftsl.com/',
    id: 'pro4',
  },
  {
    src: 'https://i.postimg.cc/FKHL09Px/adventurerunner.png',
    title: 'Adventure Runner - 3D',
    description: 'Endless runner mobile game',
    paragraph1: 'Adventure Runner - 3D is a free endless runner game. It has two maps and four players. At the start of the game, only one map and one player will be available, and you can unlock one map and three players from in-game money.',
    paragraph2: 'Project is open source and available on GitHub.',
    link: 'https://github.com/algotyrnt/Endless-Runner-3D-UnityMobileGame',
    id: 'pro3',
  },
  {
    src: 'https://i.postimg.cc/y3PWJnnp/csr.png',
    title: 'Colombo Street Race',
    description: 'Mobile game',
    paragraph1: 'The game "Colombo Street Race" is a 3D car race based in the city of Colombo in Sri Lanka. This game has four game mods, Four cars, and Three maps.',
    paragraph2: '',
    link: 'https://youtu.be/JnfKdvAaXt4?si=ke5wRvnnEdhD-SDJ',
    id: 'pro2',
  },
  {
    src: 'https://i.postimg.cc/DmKgXZB1/movecubic.png',
    title: 'Move Cubic - 3D',
    description: 'Mobile game',
    paragraph1: '',
    paragraph2: '',
    link: '#',
    id: 'pro1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'WSO2',
    title: 'intern',
    start: '2025 Jun',
    end: 'Present',
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
    label: 'Instagram',
    link: 'https://www.instagram.com/algotyrnt',
  },
]

export const EMAIL = 'x@tyrnt.co'
