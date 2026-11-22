import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    role: z.string(),
    timeframe: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    summary: z.string(),
    label: z.string().optional(), // e.g. "Product, 2024-2026"
    draft: z.boolean().default(false),
  }),
});

const archives = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/archives' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, archives };
