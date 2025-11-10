import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagSelectObjectSchema as LocationTagSelectObjectSchema } from './objects/LocationTagSelect.schema';
import { LocationTagCreateManyInputObjectSchema as LocationTagCreateManyInputObjectSchema } from './objects/LocationTagCreateManyInput.schema';

export const LocationTagCreateManyAndReturnSchema: z.ZodType<Prisma.LocationTagCreateManyAndReturnArgs> = z.object({ select: LocationTagSelectObjectSchema.optional(), data: z.union([ LocationTagCreateManyInputObjectSchema, z.array(LocationTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LocationTagCreateManyAndReturnArgs>;

export const LocationTagCreateManyAndReturnZodSchema = z.object({ select: LocationTagSelectObjectSchema.optional(), data: z.union([ LocationTagCreateManyInputObjectSchema, z.array(LocationTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();