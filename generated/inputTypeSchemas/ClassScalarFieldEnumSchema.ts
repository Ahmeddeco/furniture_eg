import { z } from 'zod';

export const ClassScalarFieldEnumSchema = z.enum(['id','title','slug','description','createdAt','updatedAt']);

export default ClassScalarFieldEnumSchema;
