# algotyrnt — Personal Site

A minimal, fast, and fully customizable personal portfolio site. Built with Next.js, React 19, Tailwind CSS v4, and Motion. Pulls live data from GitHub (pinned repos) and Medium (latest posts).

**Live:** [algotyrnt.com](https://algotyrnt.com)

---

## Tech Stack

|                 |                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| Framework       | [Next.js](https://nextjs.org/) (App Router)                                                                 |
| Language        | TypeScript                                                                                                  |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com/)                                                                 |
| Animations      | [Motion](https://motion.dev/) + [Motion Primitives](https://motion-primitives.com)                          |
| Theme switching | [next-themes](https://github.com/pacocoursey/next-themes)                                                   |
| Analytics       | [Vercel Analytics](https://vercel.com/analytics) + [Speed Insights](https://vercel.com/docs/speed-insights) |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router (pages, layout, metadata)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/             # Header and Footer
│   ├── sections/           # Page sections (About, Experience, Projects, Blogs, Connect)
│   └── ui/                 # Reusable primitives (animations, magnetic, etc.)
├── lib/
│   ├── config.ts           # ← All personal data lives here (edit this to customize)
│   ├── constants.ts        # Shared runtime constants (transitions, etc.)
│   ├── utils.ts            # cn() utility
│   └── api/
│       ├── github.ts       # GitHub GraphQL — fetches pinned repos
│       └── medium.ts       # Medium RSS — fetches latest posts
└── types/
    └── index.ts            # Shared TypeScript types
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- A GitHub personal access token (for fetching pinned repos)

### 1. Clone the repo

```bash
git clone https://github.com/algotyrnt/personal-site.git
cd personal-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set environment variables

Create a `.env.local` file at the root:

```env
GITHUB_TOKEN=your_github_personal_access_token
```

> The token only needs `public_repo` (read-only) scope. Without it the Projects section will be hidden gracefully.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customizing for Your Own Use

All personal content is in a single file — **`src/lib/config.ts`**. Update these fields:

```ts
export const EMAIL = 'you@example.com'
export const WEBSITE_URL = 'https://yoursite.com'
export const SITE_NAME = 'Your Name'
export const SITE_DESCRIPTION = 'One-line bio.'

export const ABOUT_TEXT = `Your longer about paragraph.`

export const WORK_EXPERIENCE = [
  {
    company: 'Company',
    title: 'Role',
    start: '2024 Jan',
    end: 'present',
    link: 'https://company.com',
    id: 'work1',
  },
]

export const GITHUB_USERNAME = 'your-github-username'
export const MEDIUM_USERNAME = 'your-medium-username' // or remove the BlogsSection

export const SOCIAL_LINKS = [
  { label: 'Github', link: 'https://github.com/you' },
  { label: 'LinkedIn', link: 'https://linkedin.com/in/you' },
  // add or remove any links
]
```

**To remove a section**, simply delete its import from `src/app/page.tsx`.

---

## Deployment

The project is optimized for [Vercel](https://vercel.com/). Click below to deploy instantly:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/algotyrnt/personal-site)

Add the `GITHUB_TOKEN` environment variable in the Vercel project settings under **Settings → Environment Variables**.

---

## Scripts

```bash
npm run dev     # Start development server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## License

MIT — feel free to use this as a template for your own personal site.
