import { z } from 'zod';
import { ProductStatusSchema } from '../inputTypeSchemas/ProductStatusSchema'

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  status: ProductStatusSchema,
  id: z.string(),
  title: z.string(),
  model: z.string(),
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
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  factoryId: z.string(),
  styleId: z.string().nullish(),
  classId: z.string().nullish(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
