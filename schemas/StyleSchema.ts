import { z } from 'zod'

export const StyleSchema = z.object({
  id: z.string().nullish(),
  title: z.string(),
  description: z.string().nullish(),
})

export type Style = z.infer<typeof StyleSchema>

export default StyleSchema
