import { z } from 'zod';

/////////////////////////////////////////
// CLASS SCHEMA
/////////////////////////////////////////

export const ClassSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  image: z.string().nullish(),
  description: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Class = z.infer<typeof ClassSchema>

export default ClassSchema;
