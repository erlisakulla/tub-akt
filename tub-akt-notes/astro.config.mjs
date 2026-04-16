// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		starlight({
			title: 'Audio Communication and Technology',
			favicon: '/favicon.png',
			sidebar: [
				{
					label: 'Courses',
					autogenerate: { directory: 'notes' },
				},
			],
			head: [
			{
				tag: 'link',
				attrs: {
					rel: 'stylesheet',
					href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
				},
			},
		],
		}),
	],
});
