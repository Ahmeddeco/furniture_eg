import { z } from 'zod';

export const StyleScalarFieldEnumSchema = z.enum(['id','title','slug','description']);

export default StyleScalarFieldEnumSchema;
