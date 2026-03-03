import RoleSchema from '@/generated/inputTypeSchemas/RoleSchema'
import { z } from 'zod'

export const UserSchema = z.object({
  role: RoleSchema.nullish(),
  id: z.string().nullish(),
  name: z.string().nullish(),
  email: z.string(),
  emailVerified: z.boolean(),
  mobile: z.string().nullish(),
  country: z.string().nullish(),
  state: z.string().nullish(),
  city: z.string().nullish(),
  image: z.string().nullish(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema
