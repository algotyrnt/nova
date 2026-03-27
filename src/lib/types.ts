export type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

export type SocialLink = {
  label: string
  link: string
}

export type Repo = {
  author: string
  name: string
  description: string
  language: string
  url: string
}

export type MediumPost = {
  title: string
  pubDate: string
  link: string
  categories: string[]
}
