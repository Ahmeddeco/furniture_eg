import { z } from 'zod';

export const ClassScalarFieldEnumSchema = z.enum(['id','title','slug','image','description','createdAt','updatedAt']);

export default ClassScalarFieldEnumSchema;
