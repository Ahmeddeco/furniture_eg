import { z } from 'zod';

export const RoleSchema = z.enum(['admin','user','client','buyer']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
