import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagSelectObjectSchema as LocationTagSelectObjectSchema } from './objects/LocationTagSelect.schema';
import { LocationTagUpdateManyMutationInputObjectSchema as LocationTagUpdateManyMutationInputObjectSchema } from './objects/LocationTagUpdateManyMutationInput.schema';
import { LocationTagWhereInputObjectSchema as LocationTagWhereInputObjectSchema } from './objects/LocationTagWhereInput.schema';

export const LocationTagUpdateManyAndReturnSchema: z.ZodType<Prisma.LocationTagUpdateManyAndReturnArgs> = z.object({ select: LocationTagSelectObjectSchema.optional(), data: LocationTagUpdateManyMutationInputObjectSchema, where: LocationTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.LocationTagUpdateManyAndReturnArgs>;

export const LocationTagUpdateManyAndReturnZodSchema = z.object({ select: LocationTagSelectObjectSchema.optional(), data: LocationTagUpdateManyMutationInputObjectSchema, where: LocationTagWhereInputObjectSchema.optional() }).strict();