// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkFixBoldSpacing from './src/plugins/remark-fix-bold-spacing.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://blocktom.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkFixBoldSpacing],
		shikiConfig: {
			theme: 'github-dark',
		},
	},
});
