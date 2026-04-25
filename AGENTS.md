# AGENTS.md

This file defines the working rules for agents and contributors in this repository.
It applies to the whole repository unless a more specific `AGENTS.md` is added in a subdirectory.

## Project Overview

Candle Lens is a React 19 + TypeScript + Vite application for interactive candlestick chart learning.

Main technologies:

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- TradingView Lightweight Charts 5
- Zustand
- i18next
- React Router 7

## Common Commands

Use npm for this project.

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

Before opening a pull request or pushing a completed change, run:

```bash
npm run typecheck
npm run build
```

For CI-compatible installs, prefer:

```bash
npm ci --registry=https://registry.npmjs.org --no-audit
```

## Repository Guidelines

- Keep changes focused on the requested task.
- Do not commit generated dependency folders such as `node_modules/`.
- Do not commit build output such as `dist/` unless the project explicitly changes to require it.
- Prefer existing project patterns over introducing new abstractions.
- Keep UI changes consistent with the current React, TypeScript, Vite, and Tailwind setup.
- Preserve bilingual content patterns when changing user-facing copy.
- Do not rewrite unrelated files or revert user changes.

## Branch Rules

The default branch is `main`.

Do not commit directly to `main` for normal feature work. Create a short-lived branch from the latest `main`, make the change there, then merge by pull request.

Branch names must follow this format:

```text
<type>/<short-kebab-description>
```

Allowed branch types:

- `feat` for new features
- `fix` for bug fixes
- `refactor` for behavior-preserving code restructuring
- `docs` for documentation-only changes
- `test` for test-only changes
- `chore` for maintenance changes
- `ci` for GitHub Actions or deployment workflow changes
- `perf` for performance improvements

Examples:

```text
feat/chapter-progress-filter
fix/github-pages-npm-install
refactor/chart-annotations
docs/add-agent-guidelines
ci/stabilize-pages-deploy
```

Branch name requirements:

- Use lowercase ASCII letters, numbers, and hyphens only after the slash.
- Use hyphen-separated words.
- Do not use spaces, underscores, Chinese characters, or punctuation other than `/` and `-`.
- Keep the description concise and task-specific.
- One branch should represent one logical change.
- Update the branch from `main` before opening or merging a pull request.
- Delete merged remote branches after the pull request is merged.

Emergency production fixes may use:

```text
hotfix/<short-kebab-description>
```

Use `hotfix/*` only for urgent fixes that need expedited review.

## Commit Rules

Use Conventional Commits:

```text
<type>: <short summary>
```

Examples:

```text
feat: add chapter completion filter
fix: stabilize GitHub Pages npm install
refactor: simplify annotation rendering
docs: add branch rules for contributors
ci: use official npm registry in deploy workflow
```

Allowed commit types match the branch types:

- `feat`
- `fix`
- `refactor`
- `docs`
- `test`
- `chore`
- `ci`
- `perf`

Keep commit messages in English unless the change is documentation intended only for Chinese readers.

## Pull Request Checklist

Before requesting review:

- Confirm the branch name follows the branch rules above.
- Confirm commit messages follow Conventional Commits.
- Run `npm run typecheck`.
- Run `npm run build`.
- Mention any skipped checks and why.

