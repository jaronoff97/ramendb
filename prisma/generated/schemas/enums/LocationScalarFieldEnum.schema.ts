import * as z from 'zod';

export const LocationScalarFieldEnumSchema = z.enum(['id', 'slug', 'osmId', 'name', 'type', 'address', 'city', 'state', 'country', 'latitude', 'longitude', 'website', 'hours', 'createdAt', 'updatedAt'])

export type LocationScalarFieldEnum = z.infer<typeof LocationScalarFieldEnumSchema>;