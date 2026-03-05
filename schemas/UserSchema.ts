import RoleSchema from '@/generated/inputTypeSchemas/RoleSchema'
import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string().nullish(),
  name: z.string().min(3).max(64),
  email: z.string().email(),
  mobile: z.string().nullish(),
  role: RoleSchema.nullish(),
  country: z.string().nullish(),
  state: z.string().nullish(),
  city: z.string().nullish(),
  image: z.string().nullish(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema
