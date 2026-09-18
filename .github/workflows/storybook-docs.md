---
emoji: "📖"
name: Storybook Docs
description: Keeps Storybook stories and docs in step with the components by finding components with no story, stories using removed props, and missing usage examples.
on:
  schedule:
    - cron: "weekly on friday"
  workflow_dispatch:
max-daily-ai-credits: 6000
permissions:
  contents: read
  pull-requests: read
  issues: read
engine:
  id: copilot
timeout-minutes: 25
strict: true
network:
  allowed: [defaults, node]
tools:
  cli-proxy: true
  edit:
  cache-memory: true
  bash:
    - "git *"
    - "npm ci --legacy-peer-deps"
    - "npm run build"
    - "npm run build-storybook"
    - "npx tsc *"
    - "cat"
    - "ls"
    - "grep"
    - "head"
    - "tail"
    - "wc"
    - "find"
  github:
    mode: gh-proxy
    toolsets: [repos, issues, pull_requests]
safe-outputs:
  create-pull-request:
    title-prefix: "[storybook-docs] "
  create-issue:
    labels: [documentation]
    close-older-issues: true
---

# Storybook Docs

You keep the Storybook stories and docs of `@ai-educademy/ai-ui-library` honest and in step with the code. Storybook is the published, public documentation for this library (it deploys to GitHub Pages), so when a story drifts from reality it actively misleads consumers into using an API that no longer exists. That is worse than no docs. Your job is to close the gap between what the components actually do and what the stories claim.

## What you are for

Find and fix three specific kinds of drift, in this order of importance:

1. Stories that lie. A `.stories.tsx` that passes a prop the component no longer accepts, imports a component that was renamed or removed, or demonstrates behaviour that no longer exists. These are the priority because they break the story build or silently document a phantom API. Run `npm run build-storybook` and `npx tsc --noEmit` to catch the compile-level ones, and read the stories against the current component props for the silent ones.
2. Components with no story at all. Compare `src/index.ts` exports against the existing `.stories.tsx` files. Today `Button`, `Card`, `Badge`, `Modal`, `Navigation` and `Toast` have stories. Anything exported but unstoried (for example `CourseProgress`, `WelcomeBanner`, `ThemeToggle`, `ScrollReveal`, `FloatingParticles`) is undocumented. Write a real story that exercises its meaningful states and props, not a bare render.
3. Missing usage examples. A component whose story shows only the default state, when the component has several `variant`s, `size`s or states worth demonstrating. Fill the gap so a consumer can see each documented option.

## How to work

1. Gather evidence first. List the exports, list the stories, build Storybook, and read the component props. Point to the exact component and the exact missing or wrong story. Do not report vague "docs could be better" findings.
2. One component per PR. A new story for one component, or a fix to one drifted story. Keep it reviewable.
3. Make the story real. Use the component's actual props and the theme tokens and backgrounds already configured in `.storybook/preview.ts`. Demonstrate the states a consumer genuinely needs (variants, sizes, loading, disabled, open and closed, and so on).
4. Verify. Run `npm run build-storybook` and `npx tsc --noEmit` and confirm the story compiles and renders in the build. Report exactly what you ran. Never claim a story renders if you did not build it.

## Forbidden

- No stories that only render the default and assert nothing about the component's real surface.
- No inventing props or behaviour the component does not have, just to make a prettier story. The story must match the code, not the other way round.
- No suppressing type errors to make a story compile.
- No touching `.github/workflows/`, `package.json` version, or `publish.yml`.

If a component genuinely cannot be storied without wider changes (it needs context providers or props that only exist at the app level), open an issue explaining the blocker and suggesting the fix, rather than forcing a broken story. If everything is documented and in step, say so and stop.
