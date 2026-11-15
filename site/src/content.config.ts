import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Articles: one Markdown file per post in src/content/posts/
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().default(false),
  }),
});

// Projects: one Markdown file per project in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    short: z.string().optional(), // label on the book spine in the desk scene
    year: z.number(),
    description: z.string(),
    stack: z.array(z.string()).default([]),
    status: z.enum(['live', 'demo', 'soon']),
    url: z.string().url().optional(), // live deploy
    repo: z.string().url().optional(), // source code
    video: z.string().optional(), // e.g. /videos/airplanes.mp4
    poster: z.string().optional(), // e.g. /videos/airplanes.webp
    note: z.string().optional(),
    order: z.number().default(99),
  }),
});

// Single editable pages: about.md, now.md
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { posts, projects, pages };
