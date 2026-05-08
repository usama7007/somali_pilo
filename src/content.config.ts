import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Somali Philosophy Editors"),
    topic: z.string(),
    language: z.enum(["Somali", "English"]).default("English"),
    readingTime: z.string()
  })
});

export const collections = { articles };
