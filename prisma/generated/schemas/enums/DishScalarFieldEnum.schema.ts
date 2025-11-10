import * as z from 'zod';

export const DishScalarFieldEnumSchema = z.enum(['id', 'locationId', 'name', 'description', 'price', 'createdAt', 'updatedAt'])

export type DishScalarFieldEnum = z.infer<typeof DishScalarFieldEnumSchema>;