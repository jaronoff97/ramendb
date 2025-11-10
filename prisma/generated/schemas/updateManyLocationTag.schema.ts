import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagUpdateManyMutationInputObjectSchema as LocationTagUpdateManyMutationInputObjectSchema } from './objects/LocationTagUpdateManyMutationInput.schema';
import { LocationTagWhereInputObjectSchema as LocationTagWhereInputObjectSchema } from './objects/LocationTagWhereInput.schema';

export const LocationTagUpdateManySchema: z.ZodType<Prisma.LocationTagUpdateManyArgs> = z.object({ data: LocationTagUpdateManyMutationInputObjectSchema, where: LocationTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LocationTagUpdateManyArgs>;

export const LocationTagUpdateManyZodSchema = z.object({ data: LocationTagUpdateManyMutationInputObjectSchema, where: LocationTagWhereInputObjectSchema.optional() }).strict();