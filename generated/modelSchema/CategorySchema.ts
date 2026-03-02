import { z } from 'zod';

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export type Category = z.infer<typeof CategorySchema>

export default CategorySchema;
