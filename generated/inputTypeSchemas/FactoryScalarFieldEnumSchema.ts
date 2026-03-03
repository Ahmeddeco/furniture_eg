import { z } from 'zod';

export const FactoryScalarFieldEnumSchema = z.enum(['id','name','logo','info','country','state','city','mobile','hotLine']);

export default FactoryScalarFieldEnumSchema;
