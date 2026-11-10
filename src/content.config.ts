import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Extra frontmatter for tutorials.
// status:  'verified' = checked against the live Site Poster app
//          'in-progress' = structure only, content not yet verified
// publishing (platform pages only):
//          'automated' = Site Poster publishes via the platform API / backend
//          'extension' = publishing runs through the Site Poster browser extension
//          'manual'    = one or more steps must be done by the user
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        status: z.enum(['verified', 'in-progress']).default('in-progress'),
        publishing: z.enum(['automated', 'extension', 'manual']).optional(),
        verifiedAt: z.coerce.date().optional(),
      }),
    }),
  }),
};
