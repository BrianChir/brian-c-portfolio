import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    number: z.string(),
    slug: z.string(),
    phase: z.string(),
    category: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    problem: z.string(),
    user: z.string(),
    constraints: z.array(z.string()).min(3).max(4),
    decisions: z.array(
      z.object({
        title: z.string(),
        detail: z.string(),
      })
    ).min(2).max(3),
    role: z.string(),
    outcomes: z.array(z.string()).min(2).max(4),
    reflection: z.string(),
    sortOrder: z.number(),
    featured: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    slug: z.string(),
    category: z.enum(['Product Teardown', 'Use Case', 'Framework', 'Lessons']),
    title: z.string(),
    abstract: z.string(),
    status: z.enum(['coming-soon', 'published']),
    publishedDate: z.coerce.date().optional(),
    readingTime: z.string().optional(),
    linkedCaseStudies: z.array(z.string()).default([]),
    sortOrder: z.number(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: z.object({
    number: z.string(),
    slug: z.string(),
    name: z.string(),
    category: z.string(),
    status: z.string(),
    artifact: z.string(),
    url: z.url().nullable(),
    urlLabel: z.string().optional(),
    product: z.string(),
    problem: z.string(),
    solution: z.string(),
    outcome: z.string(),
    sortOrder: z.number(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  articles,
  products,
};
