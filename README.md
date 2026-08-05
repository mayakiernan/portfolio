# Maya Kiernan — Portfolio

Next.js portfolio site with an animated hero homepage and project case-study pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/page.tsx` — hero landing with project links
- `app/onk/page.tsx` — ONK ceramics collection gallery
- `lib/projects.ts` — project registry (add new projects here)
- `components/home/` — homepage hero and canvas animation
- `components/onk/` — ONK gallery and lightbox
- `components/shared/` — nav, footer, project cards
- `public/onk/` — web-ready ONK images (WebP + JPG)

## Adding images

Keep originals on your Mac in `Documents/Portfolio/[ProjectName]/`, then copy optimized assets into `public/` using kebab-case filenames.

To convert PNGs to WebP before committing:

```bash
npm run optimize-images
```

This runs `scripts/optimize-images.mjs` on everything in `public/onk/`.

## Adding a new project

1. Add assets to `public/[project-slug]/`
2. Register the project in `lib/projects.ts`
3. Create `app/[project-slug]/page.tsx` (follow the ONK page pattern)

## Deploy

The site auto-deploys to [Vercel](https://vercel.com) on push to `main` via the GitHub integration.

If the site is not publicly accessible after deploy:

1. Open the Vercel project dashboard → **Settings → Deployment Protection** and disable protection for production (or allow public access).
2. Under **Settings → Domains**, attach your custom domain (e.g. `mayakiernan.com`) to this project.
3. Confirm the production URL loads `/` and `/onk`.

Production deployment status is visible on GitHub under **Deployments** for [mayakiernan/portfolio](https://github.com/mayakiernan/portfolio).
