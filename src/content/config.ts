// src/content/config.ts (Versi Sederhana)
import { defineCollection, z } from 'astro:content';

const rencanaCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.string(), 
  }),
});

export const collections = {
  'rencana': rencanaCollection,
};