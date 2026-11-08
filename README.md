# Site Poster Pro Tutorials

Source for **https://tutorials.siteposterpro.com**: the tutorials and help center for Site Poster Pro.
Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build), deployed as a static site on Cloudflare Pages.

This repository is fully separate from the Site Poster Pro application (Base44). It contains no API keys, OAuth secrets or user data.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview
```

## Structure

```
src/content/docs/
  index.mdx                 home page
  getting-started/          account, dashboard, first post
  platforms/                one page per publishing platform
  content/                  TXT format, H1, HTML, bulk import, clients
  scheduling/               publish now, schedule, intervals, calendar
  results/                  published URLs, status, export
  troubleshooting/          connection, OAuth, failed posts, limits
src/assets/screenshots/<platform>/   screenshots per platform
src/components/PageTitle.astro       status + publishing-mode badges
src/styles/brand.css                 Site Poster Pro colors
```

The sidebar is generated from the folders. Order is set with `sidebar.order` in each page's frontmatter.

## Page frontmatter

```yaml
status: in-progress        # in-progress | verified
publishing: automated      # platform pages only: automated | extension | manual
verifiedAt: 2026-11-08     # date the steps were checked against the live app
```

Only set `status: verified` and `publishing` after every step has been checked in the live app. Never document features that are not implemented.

## Adding a new platform

1. Create `src/content/docs/platforms/<platform-slug>.mdx` (copy an existing platform page).
2. Create `src/assets/screenshots/<platform-slug>/` and add screenshots (PNG or WebP).
3. Reference screenshots with a relative path: `![Connections page](../../../assets/screenshots/<platform-slug>/connect-1.png)`.
4. Run `npm run build` to check.

## Indexing

The site sends `noindex, nofollow` until real tutorials are live.
To allow indexing, set the environment variable `INDEXING=on` in Cloudflare Pages (Production) and redeploy.

## Deployment (Cloudflare Pages)

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 22 (`.nvmrc`)
- Custom domain: `tutorials.siteposterpro.com`
