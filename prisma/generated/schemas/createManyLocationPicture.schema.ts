import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationPictureCreateManyInputObjectSchema as LocationPictureCreateManyInputObjectSchema } from './objects/LocationPictureCreateManyInput.schema';

export const LocationPictureCreateManySchema: z.ZodType<Prisma.LocationPictureCreateManyArgs> = z.object({ data: z.union([ LocationPictureCreateManyInputObjectSchema, z.array(LocationPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LocationPictureCreateManyArgs>;

export const LocationPictureCreateManyZodSchema = z.object({ data: z.union([ LocationPictureCreateManyInputObjectSchema, z.array(LocationPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();