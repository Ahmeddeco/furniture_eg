import { z } from 'zod';

export const StyleScalarFieldEnumSchema = z.enum(['id','title','slug','description','image']);

export default StyleScalarFieldEnumSchema;
