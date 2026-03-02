import { z } from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id','title','image','createdAt','updatedAt']);

export default CategoryScalarFieldEnumSchema;
