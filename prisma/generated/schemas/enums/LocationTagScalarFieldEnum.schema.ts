import * as z from 'zod';

export const LocationTagScalarFieldEnumSchema = z.enum(['locationId', 'tagId'])

export type LocationTagScalarFieldEnum = z.infer<typeof LocationTagScalarFieldEnumSchema>;