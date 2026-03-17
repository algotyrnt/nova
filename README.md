# Nova

[![Release](https://img.shields.io/github/v/release/algotyrnt/nova?display_name=tag)](https://github.com/algotyrnt/nova/releases)
[![CodeQL](https://github.com/algotyrnt/nova/actions/workflows/codeql.yml/badge.svg)](https://github.com/algotyrnt/nova/actions/workflows/codeql.yml)
[![Lint and Type Check](https://github.com/algotyrnt/nova/actions/workflows/check.yml/badge.svg)](https://github.com/algotyrnt/nova/actions/workflows/check.yml)
[![License: MIT](https://img.shields.io/github/license/algotyrnt/nova)](https://github.com/algotyrnt/nova/blob/main/LICENSE)

A minimal, fast, and fully customizable personal portfolio site built with `Next.js` (App Router), `TypeScript`, `MUI`, and `Framer Motion`.
It can render your pinned GitHub repositories and latest Medium posts at build/runtime with ISR.

Live site: [algotyrnt.com](https://algotyrnt.com)

## Features

- App Router + React Server Components
- Structured, env-driven content (no CMS required)
- GitHub pinned projects via GraphQL API
- Medium posts via RSS feed
- SEO basics included (`sitemap.xml`, `robots.txt`, Open Graph image)
- Vercel Analytics + Speed Insights integration

## Tech Stack

| Area      | Tooling                                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| Framework | [Next.js](https://nextjs.org/) 16                                                                          |
| Language  | TypeScript                                                                                                 |
| UI        | [Material UI (MUI)](https://mui.com/) + Emotion                                                            |
| Animation | [Framer Motion](https://www.framer.com/motion/)                                                            |
| Analytics | [Vercel Analytics](https://vercel.com/analytics), [Speed Insights](https://vercel.com/docs/speed-insights) |

## Project Structure

```text
src/
├── app/                # Next.js routes, metadata, robots, sitemap
├── components/
│   ├── layout/         # Header, footer
│   ├── sections/       # About, Work, Projects, Blogs, Connect, Privacy
│   ├── ThemeRegistry/  # MUI + Emotion integration
│   └── ui/             # Animation primitives
├── lib/
│   ├── api/            # GitHub + Medium fetchers
│   └── config.ts       # Env parsing and typed config exports
└── types/              # Shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- Optional: GitHub personal access token for Projects section

### 1. Clone

```bash
git clone https://github.com/algotyrnt/nova.git
cd nova
```

### 2. Install

```bash
npm install
```

### 3. Configure environment

```bash
cp .env.example .env.local
```

Update `.env.local` with your content.

Important notes:

- `SITE_KEYWORDS`, `WORK_EXPERIENCE`, and `SOCIAL_LINKS` must be valid JSON.
- `GITHUB_TOKEN` is optional in code. If not set (or invalid), the Projects section simply returns no items.
- `MEDIUM_USERNAME` controls the Medium feed endpoint.

### 4. Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Configuration Reference

All values come from environment variables in `src/lib/config.ts`.

| Variable           | Purpose                                    |
| ------------------ | ------------------------------------------ |
| `EMAIL`            | Contact email used in Connect/footer areas |
| `WEBSITE_URL`      | Canonical site URL for metadata/sitemap    |
| `SITE_NAME`        | Site title and branding                    |
| `SITE_DESCRIPTION` | Meta description                           |
| `ABOUT_TEXT`       | About section body text                    |
| `SITE_KEYWORDS`    | JSON array for SEO keywords                |
| `WORK_EXPERIENCE`  | JSON array of work entries                 |
| `SOCIAL_LINKS`     | JSON array of social links                 |
| `GITHUB_USERNAME`  | Username used for pinned repos query       |
| `GITHUB_TOKEN`     | Token used to call GitHub GraphQL API      |
| `MEDIUM_USERNAME`  | Username used for Medium RSS feed          |

Example JSON values:

```json
{
  "SITE_KEYWORDS": ["portfolio", "software engineer", "nextjs"],
  "WORK_EXPERIENCE": [
    {
      "company": "Example Inc",
      "title": "Software Engineer",
      "start": "2023 Jan",
      "end": "present",
      "link": "https://example.com",
      "id": "exp-1"
    }
  ],
  "SOCIAL_LINKS": [
    { "label": "GitHub", "link": "https://github.com/yourname" },
    { "label": "LinkedIn", "link": "https://linkedin.com/in/yourname" }
  ]
}
```

## Customizing Sections

The homepage section order is defined in `src/app/page.tsx`.
Add, remove, or reorder section components there.

## Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Deployment

This is a standard Next.js app and can be deployed on Vercel or any Node-capable platform.

### Vercel (recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/algotyrnt/nova)

Set the same environment variables from `.env.example` in the Vercel project settings.

### Generic deployment flow

```bash
npm run build
npm run start
```
