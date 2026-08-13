# AGENTS.md

## Stack

- Next.js 16.4.6 App Router, React 19, TypeScript strict mode, pnpm.
- Tailwind CSS v4 is CSS-first: there is no `tailwind.config.*`. Theme lives in `src/app/global.css` (`@plugin "./hero.ts"`) and `src/app/hero.ts` (HeroUI theme).
- UI stack: HeroUI 2.8, lucide-react, motion/framer-motion, Zustand.
- `@/*` resolves to `src/*`.

## Commands

- Install: `pnpm install`
- Dev server (Turbopack): `pnpm dev`
- Production build: `pnpm build`
- Serve build: `pnpm start`
- Typecheck: `pnpm exec tsc --noEmit`
- `pnpm build` is the full verification step; it runs TypeScript and prerenders routes.

### Lint is currently broken

`pnpm lint` runs `next lint`, which Next.js 16 removed. It fails with:

```
Invalid project directory provided, no such directory: .../lint
```

`pnpm exec eslint src` also fails because `eslint.config.js` imports `@typescript-eslint/*`, `eslint-plugin-prettier`, and other plugins that are not declared in `package.json`. Do not block work on lint; follow the style of existing files.

There is no test runner, test file, or CI workflow. Do not invent test commands.

## Content model

- All content is static JSON under `src/data/`, aggregated in `src/config/constants.tsx`. There is no API, database, or CMS.
- Add a movie or series by adding one object to the relevant JSON file and a poster under `public/movies/` or `public/series/`.
- Follow the `Media` schema in `src/types/index.ts`. `image` must match the slug: `/movies/<slug>.webp` or `/series/<slug>.webp`.
- Poster sizes: 165x256 for movies, 182x256 for series.
- Aggregates: `ALL_MOVIES` (6 JSON files), `ALL_SERIES` (2 files), `ALL_TV_CHANNELS` (`tv/channels.json`), `ALL_DISKS` (9 disk files), `ALL_MEDIA` (movies + series).
- Data files reach ~920 KB and `public/` holds thousands of posters. Edit data with a script for bulk changes and do not reformat whole JSON files.
- `script.py` is a Windows-only PIL helper that crops `.ico` files to `.webp`. It is not part of the app or build.

## Routes and behavior

- Routes: `/`, `/movies`, `/movies/[slug]`, `/movies/genres/[genre]`, `/series`, `/series/[slug]`, `/tv`, `/dashboard`.
- Detail routes read the JSON at request time. There is no `generateStaticParams`; an unknown slug renders a "not found" message instead of calling `notFound()`.
- `/movies/genres/[genre]` compares the URL value lowercase against `media.genre`; it only supports movie genres.
- The root layout (`src/app/layout.tsx`) renders `Toolbar`, `TabToolbar`, and `BackToTop` on every page. It hardcodes the `dark` class and loads local Bricolage Grotesque fonts from `public/fonts/`.
- Movie and series lists are client components with infinite scroll, 28 items per page, backed by Zustand stores in `src/store/`. `LoadMovies` resets its store only when `isGenre` is set; check this when changing route or pagination behavior.

## Conventions

- Components use named exports (`export { Component }`), not default exports. Add `"use client"` only to interactive components; route pages stay server components.
- Prettier settings: 100 columns, double quotes, semicolons, 2 spaces, ES5 trailing commas. ESLint also enforces import order with blank lines between groups. Match existing files.
- `NEXT_PUBLIC_DOMAIN` is optional; it sets the metadata base URL and defaults to `http://localhost:3000`. `.env` is gitignored.
- `package.json` pins transitive dependencies via pnpm overrides for security. `deepmerge` resolves to the local `vendor/deepmerge`; do not delete that directory or the override casually.
