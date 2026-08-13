import { z } from 'zod';

export const RoleSchema = z.enum(['owner','admin','user','client']);

export type RoleType = `${z.infer<typeof RoleSchema>}`

export default RoleSchema;
