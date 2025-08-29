// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const rencanaCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.enum(['Tersedia', 'Beta', 'Rencana', 'Visi ke Depan']),
  }),
});

export const collections = {
  rencana: rencanaCollection,
};
