import * as z from 'zod';

export const ReviewTagScalarFieldEnumSchema = z.enum(['reviewId', 'tagId'])

export type ReviewTagScalarFieldEnum = z.infer<typeof ReviewTagScalarFieldEnumSchema>;