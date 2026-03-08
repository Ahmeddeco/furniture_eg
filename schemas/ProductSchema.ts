import ProductStatusSchema from '@/generated/inputTypeSchemas/ProductStatusSchema'
import { z } from 'zod'

export const ProductSchema = z.object({
  status: ProductStatusSchema,
  id: z.string().nullish(),
  title: z.string(),
  model: z.string(),
  miniDescription: z.string(),
  description: z.string().nullish(),
  quantity: z.number().min(0),
  lowStock: z.number().min(0),
  price: z.number().min(0),
  discount: z.number().min(0).max(99).nullish(),
  mainImage: z.string(),
  bluePrint: z.string().nullish(),
  images: z.string().array(),
  colors: z.string().array(),
  factoryId: z.string(),
  styleId: z.string().nullish(),
  classId: z.string().nullish(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema
