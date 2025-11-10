import * as z from 'zod';

export const DishTagScalarFieldEnumSchema = z.enum(['dishId', 'tagId'])

export type DishTagScalarFieldEnum = z.infer<typeof DishTagScalarFieldEnumSchema>;