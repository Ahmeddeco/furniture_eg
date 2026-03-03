import { z } from 'zod'

export const CategorySchema = z.object({
  id: z.string().nullish(),
  title: z.string(),
  image: z.string(),
})

export type Category = z.infer<typeof CategorySchema>

export default CategorySchema
