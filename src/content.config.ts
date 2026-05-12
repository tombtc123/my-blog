import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			lang: z.enum(['en', 'zh']).default('zh'),
			routeSlug: z.string().optional(),
			translationKey: z.string().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
			category: z.string().optional(),
		}),
});

const apps = defineCollection({
	loader: glob({ base: './src/content/apps', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			lang: z.enum(['en', 'zh']).default('en'),
			routeSlug: z.string().optional(),
			translationKey: z.string().optional(),
			seoTitle: z.string().optional(),
			seoDescription: z.string().optional(),
			seoImage: z.string().optional(),
			appName: z.string(),
			platforms: z.array(z.string()).default([]),
			status: z.string().default('In development'),
			heroImage: image().optional(),
			icon: image().optional(),
			website: z.string().url().optional(),
			appStore: z.string().url().optional(),
			supportUrl: z.string().url().optional(),
			screenshots: z.array(z.string()).default([]),
			supportEmail: z.string().email().optional(),
			tags: z.array(z.string()).optional(),
			draft: z.boolean().default(false),
		}),
});

const privacy = defineCollection({
	loader: glob({ base: './src/content/privacy', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		lang: z.enum(['en', 'zh']).default('en'),
		routeSlug: z.string().optional(),
		translationKey: z.string().optional(),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
		seoImage: z.string().optional(),
		appName: z.string(),
		effectiveDate: z.coerce.date(),
		version: z.string().default('1.0'),
		platforms: z.array(z.string()).default([]),
		supportUrl: z.string().url().optional(),
		supportEmail: z.string().email().optional(),
		appSlug: z.string(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog, apps, privacy };
