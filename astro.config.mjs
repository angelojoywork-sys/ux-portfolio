import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://example.com', // TODO: set custom domain at launch
  integrations: [mdx()],
});
