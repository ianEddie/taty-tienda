import { z } from 'astro:content';

export const productSchema = z.object({
  name: z.string(),
  image: z.string(),
  category: z.string(),
  material: z.string(),
  sizes: z.array(
    z.object({
      label: z.string(),
      value: z.number()
    })
  ),
  price: z.number(),
  description: z.string()
});

