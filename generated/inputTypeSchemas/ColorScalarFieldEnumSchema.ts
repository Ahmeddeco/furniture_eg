import { z } from 'zod';

export const ColorScalarFieldEnumSchema = z.enum(['id','title','colorCode']);

export default ColorScalarFieldEnumSchema;
