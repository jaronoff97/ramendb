import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'workosId', 'email', 'name', 'pictureUrl', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;