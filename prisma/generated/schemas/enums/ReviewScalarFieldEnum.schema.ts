import * as z from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum(['id', 'locationId', 'userId', 'ratingId', 'title', 'text', 'createdAt', 'updatedAt'])

export type ReviewScalarFieldEnum = z.infer<typeof ReviewScalarFieldEnumSchema>;