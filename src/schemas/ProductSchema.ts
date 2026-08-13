import ProductStatusSchema from "@/generated/zod/inputTypeSchemas/ProductStatusSchema"
import { z } from 'zod'

export const ProductSchema = z.object({
  status: ProductStatusSchema,
  id: z.string().nullish(),
  title: z.string(),
  model: z.string(),
  miniDescription: z.string(),
  description: z.string().nullish(),
  quantity: z.number().positive().default(0),
  lowStock: z.number().positive().default(0),
  price: z.number().positive().default(0),
  discount: z.number().positive().max(99).default(0).nullish(),
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
