# Personal Website for Gergely Sipos

This repository contains the source code for Gergely Sipos's personal website, built with modern web technologies.

## Tech Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon set
- [Shadcn/UI](https://ui.shadcn.com/) - Re-usable UI components

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/gsipos/gsipos.github.io.git
   cd gsipos.github.io
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:4321`

## Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # UI components
│   ├── layouts/      # Page layouts
│   ├── pages/        # Page routes
│   └── styles/       # Global styles
└── astro.config.mjs  # Astro configuration
```

## Available Commands

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `npm run dev`          | Start local dev server at `localhost:4321`  |
| `npm run build`        | Build your production site to `./dist/`     |
| `npm run preview`      | Preview your build locally before deploying |
| `npm run astro`        | Run CLI commands like `astro add`           |
| `npm run format`       | Format code with Prettier                   |
| `npm run format:check` | Check code formatting with Prettier         |

## Deployment

This site is configured to deploy to GitHub Pages. When pushing to the main branch, the site will automatically build and deploy through GitHub Actions.
