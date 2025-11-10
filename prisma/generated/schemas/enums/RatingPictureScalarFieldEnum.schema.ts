import * as z from 'zod';

export const RatingPictureScalarFieldEnumSchema = z.enum(['id', 'ratingId', 'url', 'caption', 'createdAt'])

export type RatingPictureScalarFieldEnum = z.infer<typeof RatingPictureScalarFieldEnumSchema>;