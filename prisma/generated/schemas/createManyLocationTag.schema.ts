import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagCreateManyInputObjectSchema as LocationTagCreateManyInputObjectSchema } from './objects/LocationTagCreateManyInput.schema';

export const LocationTagCreateManySchema: z.ZodType<Prisma.LocationTagCreateManyArgs> = z.object({ data: z.union([ LocationTagCreateManyInputObjectSchema, z.array(LocationTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.LocationTagCreateManyArgs>;

export const LocationTagCreateManyZodSchema = z.object({ data: z.union([ LocationTagCreateManyInputObjectSchema, z.array(LocationTagCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();