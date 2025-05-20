import { defineCollection } from 'astro:content';
import { productSchema } from './schemas';

const mochilas = defineCollection({
  type: 'content',
  schema: productSchema
});

const sabanas = defineCollection({
  type: 'content',
  schema: productSchema
});

export const collections = {
  mochilas: mochilas,
  sabanas: sabanas
};
