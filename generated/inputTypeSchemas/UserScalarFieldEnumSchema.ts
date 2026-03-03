import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','role','mobile','country','state','city','image','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
