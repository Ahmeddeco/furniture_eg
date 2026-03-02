import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','title','model','manufacture','miniDescription','manual','description','quantity','lowStock','price','discount','mainImage','bluePrint','images','categoryId','createdAt','updatedAt']);

export default ProductScalarFieldEnumSchema;
