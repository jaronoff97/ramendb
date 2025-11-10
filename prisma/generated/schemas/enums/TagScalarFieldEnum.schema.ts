import * as z from 'zod';

export const TagScalarFieldEnumSchema = z.enum(['id', 'name', 'category', 'createdAt', 'updatedAt'])

export type TagScalarFieldEnum = z.infer<typeof TagScalarFieldEnumSchema>;