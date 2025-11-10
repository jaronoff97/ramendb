import * as z from 'zod';

export const RatingScalarFieldEnumSchema = z.enum(['id', 'locationId', 'userId', 'value', 'createdAt', 'updatedAt'])

export type RatingScalarFieldEnum = z.infer<typeof RatingScalarFieldEnumSchema>;