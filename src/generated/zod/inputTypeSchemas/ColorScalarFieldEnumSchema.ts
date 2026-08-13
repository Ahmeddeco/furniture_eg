import { z } from 'zod';

export const ColorScalarFieldEnumSchema = z.enum(['id','title','slug','colorCode']);

export default ColorScalarFieldEnumSchema;
