import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagWhereInputObjectSchema as LocationTagWhereInputObjectSchema } from './objects/LocationTagWhereInput.schema';

export const LocationTagDeleteManySchema: z.ZodType<Prisma.LocationTagDeleteManyArgs> = z.object({ where: LocationTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LocationTagDeleteManyArgs>;

export const LocationTagDeleteManyZodSchema = z.object({ where: LocationTagWhereInputObjectSchema.optional() }).strict();