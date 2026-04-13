# Nova

[![Release](https://img.shields.io/github/v/release/algotyrnt/nova?display_name=tag)](https://github.com/algotyrnt/nova/releases)
[![CI Check](https://github.com/algotyrnt/nova/actions/workflows/check.yml/badge.svg)](https://github.com/algotyrnt/nova/actions/workflows/check.yml)
[![CodeQL](https://github.com/algotyrnt/nova/actions/workflows/codeql.yml/badge.svg)](https://github.com/algotyrnt/nova/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/github/license/algotyrnt/nova)](https://github.com/algotyrnt/nova/blob/main/LICENSE)

A minimal, fast, and fully customizable personal portfolio built with Next.js App Router. Renders pinned GitHub repositories and latest Medium posts at runtime with ISR.

**Live:** [algotyrnt.com](https://algotyrnt.com)

## Stack

| Area      | Tooling                                         |
| --------- | ----------------------------------------------- |
| Framework | [Next.js](https://nextjs.org/) 16 (App Router)  |
| Language  | TypeScript                                      |
| UI        | [MUI](https://mui.com/) + Emotion               |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Analytics | Vercel Analytics + Speed Insights               |

## Structure

```text
src/
├── app/                # Routes, metadata, robots, sitemap
├── components/
│   ├── cards/          # Reusable card components
│   ├── layout/         # header.tsx, footer.tsx
│   ├── sections/       # about, work, projects, blogs, connect, privacy
│   ├── theme/          # MUI + Emotion setup
│   └── ui/             # fade-in, stagger animation primitives
├── lib/
│   ├── api/            # GitHub GraphQL + Medium RSS fetchers
│   ├── config.ts       # Typed env exports
│   └── types.ts        # Shared TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 22+
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

## Environment Variables

All content is driven by environment variables — no CMS required. See [`.env.example`](.env.example) for the full list.

| Variable           | Purpose                                  |
| ------------------ | ---------------------------------------- |
| `AUTHOR_NAME`      | Full name used in page metadata          |
| `TWITTER_HANDLE`   | Twitter/X username (without `@`) for SEO |
| `EMAIL`            | Contact email in Connect and footer      |
| `WEBSITE_URL`      | Canonical site URL                       |
| `SITE_NAME`        | Site title                               |
| `SITE_DESCRIPTION` | Meta description                         |
| `ABOUT_TEXT`       | About section body text                  |
| `SITE_KEYWORDS`    | JSON array of SEO keywords               |
| `WORK_EXPERIENCE`  | JSON array of work entries               |
| `SOCIAL_LINKS`     | JSON array of social links               |
| `GITHUB_USERNAME`  | GitHub username for pinned repos         |
| `GITHUB_TOKEN`     | GitHub token for GraphQL API (optional)  |
| `MEDIUM_USERNAME`  | Medium username for RSS feed             |

`SITE_KEYWORDS`, `WORK_EXPERIENCE`, and `SOCIAL_LINKS` must be valid JSON. If `GITHUB_TOKEN` is unset, the Projects section is hidden automatically.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/algotyrnt/nova)

Set the environment variables from `.env.example` in your Vercel project settings.

### Generic deployment flow

```bash
npm run dev      # Development server
npm run build    # Production build
npm run check    # Lint + type check
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
