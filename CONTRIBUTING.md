# Contributing

This is a personal portfolio template built with Next.js, TypeScript, MUI, and Framer Motion. Contributions should keep the project fast, minimal, and easy to customize.

## Setup

```bash
git clone https://github.com/algotyrnt/nova.git
cd nova
npm install
cp .env.example .env.local
npm run dev
```

## Before Opening a PR

Open a GitHub issue before starting work so the change has a clear tracking record and discussion thread.

Run the project checks before opening a pull request:

```bash
npm run check
npm run build
```

## Guidelines

- Keep changes focused and minimal.
- Follow existing code style and structure.
- Avoid adding new dependencies without a clear reason.
- Document any new environment variables in `README.md` and `.env.example`.
- No secrets or real tokens in commits — use `.env.local`.

## Pull Requests

- Reference an issue.
- Explain what changed and why.
- Include screenshots for UI changes.
- Confirm `check` and `build` pass.

## Commit Messages

Clear, descriptive commit messages.
