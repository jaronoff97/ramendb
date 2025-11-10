import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationPictureSelectObjectSchema as LocationPictureSelectObjectSchema } from './objects/LocationPictureSelect.schema';
import { LocationPictureCreateManyInputObjectSchema as LocationPictureCreateManyInputObjectSchema } from './objects/LocationPictureCreateManyInput.schema';

export const LocationPictureCreateManyAndReturnSchema: z.ZodType<Prisma.LocationPictureCreateManyAndReturnArgs> = z.object({ select: LocationPictureSelectObjectSchema.optional(), data: z.union([ LocationPictureCreateManyInputObjectSchema, z.array(LocationPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LocationPictureCreateManyAndReturnArgs>;

export const LocationPictureCreateManyAndReturnZodSchema = z.object({ select: LocationPictureSelectObjectSchema.optional(), data: z.union([ LocationPictureCreateManyInputObjectSchema, z.array(LocationPictureCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();