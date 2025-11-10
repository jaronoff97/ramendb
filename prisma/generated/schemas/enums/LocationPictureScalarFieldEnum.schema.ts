import * as z from 'zod';

export const LocationPictureScalarFieldEnumSchema = z.enum(['id', 'locationId', 'url', 'caption', 'createdAt'])

export type LocationPictureScalarFieldEnum = z.infer<typeof LocationPictureScalarFieldEnumSchema>;