import { z } from 'zod';

export const StyleScalarFieldEnumSchema = z.enum(['id','title','description']);

export default StyleScalarFieldEnumSchema;
