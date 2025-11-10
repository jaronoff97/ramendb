import * as z from 'zod';

export const ReviewPictureScalarFieldEnumSchema = z.enum(['id', 'reviewId', 'url', 'caption', 'createdAt'])

export type ReviewPictureScalarFieldEnum = z.infer<typeof ReviewPictureScalarFieldEnumSchema>;