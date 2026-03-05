# algotyrnt — Personal Site

A minimal, fast, and fully customizable personal portfolio site. Built with Next.js (App Router), MUI, and Framer Motion. Pulls live data from GitHub (pinned repos) and Medium (latest posts).

**Live:** [algotyrnt.com](https://algotyrnt.com)

---

## Tech Stack

|               |                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| Framework     | [Next.js](https://nextjs.org/) (App Router, React Server Components)                                        |
| Language      | TypeScript                                                                                                  |
| UI Components | [Material UI (MUI)](https://mui.com/)                                                                       |
| Animations    | [Framer Motion](https://www.framer.com/motion/)                                                             |
| Analytics     | [Vercel Analytics](https://vercel.com/analytics) + [Speed Insights](https://vercel.com/docs/speed-insights) |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (fonts, metadata, theme provider)
│   ├── page.tsx            # Home page — composes all sections
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── layout/             # Header and Footer
│   ├── sections/           # Page sections: About, Work, Projects, Blogs, Connect
│   ├── ThemeRegistry/      # MUI theme + Emotion SSR cache setup
│   └── ui/                 # Animation primitives: FadeIn, Stagger
├── lib/
│   ├── config.ts           # Configuration (loads from environment variables)
│   └── api/
│       ├── github.ts       # GitHub GraphQL API — fetches pinned repos
│       └── medium.ts       # Medium RSS feed — fetches latest posts
└── types/
    └── index.ts            # Shared TypeScript types
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- A GitHub personal access token (for the Projects section)

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

```bash
cp .env.example .env.local
```

Then open `.env.local` and configure your variables:

```env
# Required for GitHub integration
GITHUB_TOKEN=your_github_personal_access_token

# Site configuration
EMAIL=your-email@example.com
WEBSITE_URL=https://yourwebsite.com
SITE_NAME=Your Name - Your Title
SITE_DESCRIPTION=Your professional description here.
ABOUT_TEXT=Your about text describing your background and interests.

# JSON arrays (all must be valid JSON)
SITE_KEYWORDS=["keyword1","keyword2","Software Engineer"]
WORK_EXPERIENCE=[{"company":"Company Name","title":"Job Title","start":"YYYY MMM","end":"present","link":"https://company.com/","id":"work1"}]
SOCIAL_LINKS=[{"label":"Github","link":"https://github.com/yourusername"},{"label":"LinkedIn","link":"https://www.linkedin.com/in/yourusername"}]

# External integrations
GITHUB_USERNAME=yourgithubusername
MEDIUM_USERNAME=yourmediumusername
```

> The GitHub token only needs `read:user` scope. Without it, the Projects section will be gracefully hidden.

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Configuration

All configuration is managed through environment variables (see `.env.example`). For statically generated pages, Next.js reads these from `process.env` at build time, so changing them requires a rebuild (or restarting the dev server) for changes to take effect.

**Configuration variables:**

- `EMAIL` — Contact email
- `WEBSITE_URL` — Site URL
- `SITE_NAME` — Site title
- `SITE_DESCRIPTION` — Meta description
- `SITE_KEYWORDS` — JSON array of keywords
- `ABOUT_TEXT` — About section text
- `WORK_EXPERIENCE` — JSON array of work history
- `SOCIAL_LINKS` — JSON array of social links
- `GITHUB_USERNAME` — GitHub username (for Projects section)
- `MEDIUM_USERNAME` — Medium username (for Blogs section)

**To remove a section**, delete its import from `src/app/page.tsx`.

---

## Deployment

The site is a standard Next.js application and can be deployed to any platform that supports Next.js:

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Set environment variables** on your hosting platform (all variables from `.env.example`)

3. **Deploy** the built application

**Requirements:**

- Node.js 20+
- All environment variables must be set
- `GITHUB_TOKEN` is required for the Projects section to work

### Deploying to Vercel

This project includes Vercel Analytics and Speed Insights. To deploy to Vercel:

1. **One-click deploy:**

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/algotyrnt/personal-site)

2. **Or using Vercel CLI:**

   ```bash
   npm i -g vercel
   vercel
   ```

3. **Set environment variables** in Vercel dashboard:
   - Go to **Project Settings → Environment Variables**
   - Add all variables from `.env.example`
   - Redeploy for changes to take effect

> Vercel Analytics and Speed Insights are automatically enabled when deployed to Vercel.

---

## Scripts

```bash
npm run dev     # Start development server  (http://localhost:3000)
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## License

MIT — free to use as a template for your own personal site.
