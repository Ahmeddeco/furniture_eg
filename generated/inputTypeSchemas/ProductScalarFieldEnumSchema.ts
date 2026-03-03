import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','title','model','miniDescription','manual','description','status','quantity','lowStock','price','discount','mainImage','bluePrint','images','createdAt','updatedAt','factoryId','styleId','classId']);

export default ProductScalarFieldEnumSchema;
