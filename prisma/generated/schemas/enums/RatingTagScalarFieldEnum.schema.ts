import * as z from 'zod';

export const RatingTagScalarFieldEnumSchema = z.enum(['ratingId', 'tagId'])

export type RatingTagScalarFieldEnum = z.infer<typeof RatingTagScalarFieldEnumSchema>;