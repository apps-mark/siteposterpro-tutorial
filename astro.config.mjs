// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const SITE = 'https://tutorials.siteposterpro.com';

// Keep the site out of search engines until real, verified tutorials are live.
// Cloudflare Pages: set INDEXING=on in the production environment variables to allow indexing.
const allowIndexing = process.env.INDEXING === 'on';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Site Poster Pro Tutorials',
      description:
        'Step-by-step tutorials and help for Site Poster Pro: connect publishing accounts, import TXT articles, schedule posts and track published URLs.',
      logo: { src: './src/assets/logo.svg', alt: 'Site Poster Pro' },
      favicon: '/favicon.svg',
      customCss: ['./src/styles/brand.css'],
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      social: [
        { icon: 'external', label: 'Site Poster Pro', href: 'https://siteposterpro.com/' },
      ],
      components: {
        PageTitle: './src/components/PageTitle.astro',
      },
      head: [
        { tag: 'meta', attrs: { property: 'og:site_name', content: 'Site Poster Pro Tutorials' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        ...(allowIndexing
          ? []
          : [{ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' } }]),
      ],
      sidebar: [
        { label: 'Getting Started', items: [{ autogenerate: { directory: 'getting-started' } }] },
        { label: 'Publishing Platforms', items: [{ autogenerate: { directory: 'platforms' } }] },
        { label: 'Content Management', items: [{ autogenerate: { directory: 'content' } }] },
        { label: 'Scheduling', items: [{ autogenerate: { directory: 'scheduling' } }] },
        { label: 'Results', items: [{ autogenerate: { directory: 'results' } }] },
        { label: 'Troubleshooting', items: [{ autogenerate: { directory: 'troubleshooting' } }] },
      ],
    }),
  ],
});
