import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['id','title','model','miniDescription','manual','description','status','quantity','lowStock','price','discount','mainImage','bluePrint','images','createdAt','updatedAt','categoryId','factoryId']);

export default ProductScalarFieldEnumSchema;
