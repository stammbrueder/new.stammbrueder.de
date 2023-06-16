import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import relativeLinks from 'astro-relative-links';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://stammbrueder.de',
	integrations: [mdx(), sitemap(), relativeLinks()],
});