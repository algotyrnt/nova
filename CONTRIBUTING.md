# Contributing

## Scope

This repository contains a personal portfolio site built with Next.js, TypeScript, MUI, and Framer Motion. Contributions should stay aligned with the project's goals: keep the site fast, accessible, maintainable, and easy to customize.

## Prerequisites

- Node.js 20+
- npm

## Local Setup

1. Fork the repository and clone your fork.
2. Install dependencies:

```bash
npm install
```

3. Create your local environment file:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

## Before You Submit Changes

Open a GitHub issue before starting work so the change has a clear tracking record and discussion thread.

Run the project checks before opening a pull request:

```bash
npm run check
```

If you make a change that affects production behavior, also verify the production build locally:

```bash
npm run build
```

## Development Guidelines

- Keep changes focused and minimal.
- Preserve the existing project structure unless a clear refactor is necessary.
- Prefer typed, reusable code over ad hoc logic.
- Follow the existing code style and formatting conventions.
- Avoid introducing new dependencies unless they are clearly justified.
- Keep animations and UI enhancements performant and accessible.
- Do not commit secrets or real tokens. Use `.env.local` for local configuration.

## Content and Configuration Changes

Many site values are driven by environment variables in `src/lib/config.ts`. When changing configuration behavior:

- Keep environment parsing type-safe.
- Document any new required variables in `README.md` and `.env.example`.
- Preserve backward compatibility where practical.

## Pull Requests

When opening a pull request:

- Reference the GitHub issue related to the change.
- Explain what changed and why.
- Link related issues if applicable.
- Include screenshots or recordings for visible UI changes.
- Note any new environment variables, dependencies, or migration steps.
- Ensure linting, type checking, and build verification have passed.

## Commit Messages

Clear, descriptive commit messages.
