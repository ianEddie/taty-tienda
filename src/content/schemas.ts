import { z } from 'astro:content';

export const productSchema = z.object({
  name: z.string(),
  image: z.string(),
  category: z.string(),
  material: z.string(),
  sizes: z.string(),
  price: z.number(),
  description: z.string()
});
