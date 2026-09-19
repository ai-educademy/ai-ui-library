<div align="center">

# AI UI Library

The shared React design system for [AI Educademy](https://aieducademy.org).

[![npm version](https://img.shields.io/npm/v/@ai-educademy/ai-ui-library?color=6366f1&label=npm)](https://www.npmjs.com/package/@ai-educademy/ai-ui-library)
[![Licence: MIT](https://img.shields.io/badge/Licence-MIT-green.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://ai-educademy.github.io/ai-ui-library/)
[![CI](https://github.com/ai-educademy/ai-ui-library/actions/workflows/ci.yml/badge.svg)](https://github.com/ai-educademy/ai-ui-library/actions/workflows/ci.yml)

[Live Storybook](https://ai-educademy.github.io/ai-ui-library/) | [npm](https://www.npmjs.com/package/@ai-educademy/ai-ui-library) | [AI Educademy](https://aieducademy.org)

</div>

## What it is

`@ai-educademy/ai-ui-library` is the shared component library used across AI Educademy products. It provides accessible React primitives, course-aware components, animation helpers, and design tokens so the platform, content pages, and marketing surfaces feel consistent.

## Features

- React 19 and strict TypeScript
- Tailwind compatible CSS custom properties
- Accessible Button, Card, Badge, Modal, Navigation, Toast, ThemeToggle, and layout primitives
- Course specific components such as CourseProgress and WelcomeBanner
- Framer Motion powered transitions and scroll reveal helpers
- Storybook documentation for development and review
- Dual ESM and CJS package output through tsup
- OIDC Trusted Publishing to npm, with no long lived npm token in CI

## Installation

```bash
npm install @ai-educademy/ai-ui-library
```

Peer dependencies:

```bash
npm install react react-dom next
```

Import the CSS once in your app shell:

```tsx
import "@ai-educademy/ai-ui-library/styles.css";
```

## Quick start

```tsx
import { Badge, Button, Card, ThemeProvider, ThemeToggle } from "@ai-educademy/ai-ui-library";

export default function Example() {
  return (
    <ThemeProvider>
      <Card variant="glass" hover>
        <ThemeToggle />
        <Badge variant="success">Pro</Badge>
        <h2>Welcome to AI Educademy</h2>
        <Button variant="primary" size="lg">Start learning</Button>
      </Card>
    </ThemeProvider>
  );
}
```

## Development

```bash
npm install
npm run storybook
npm run build
npm run lint
```

## Project structure

```text
ai-ui-library/
├── src/
│   ├── components/     # Public React components and stories
│   ├── hooks/          # Shared hooks
│   ├── theme/          # Design tokens
│   ├── utils/          # Shared helpers
│   └── index.ts        # Public API
├── .storybook/         # Storybook configuration
├── tsup.config.ts      # Build configuration
└── package.json
```

## Used by

- [`ai-platform`](https://github.com/ai-educademy/ai-platform), the production app at [aieducademy.org](https://aieducademy.org)
- AI Educademy course and marketing pages
- Storybook component documentation on GitHub Pages

## Contributing

Please keep components accessible, typed, and documented with a Storybook story. Run `npm run build` and `npm run lint` before raising a PR.

## Licence

MIT © [AI Educademy](https://github.com/ai-educademy)
