import { z } from 'zod';

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  model: z.string(),
  manufacture: z.string(),
  miniDescription: z.string(),
  manual: z.string().nullish(),
  description: z.string().nullish(),
  quantity: z.number(),
  lowStock: z.number(),
  price: z.number(),
  discount: z.number().nullish(),
  mainImage: z.string(),
  bluePrint: z.string().nullish(),
  images: z.string().array(),
  categoryId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
