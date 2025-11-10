import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagSelectObjectSchema as LocationTagSelectObjectSchema } from './objects/LocationTagSelect.schema';
import { LocationTagIncludeObjectSchema as LocationTagIncludeObjectSchema } from './objects/LocationTagInclude.schema';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './objects/LocationTagWhereUniqueInput.schema';

export const LocationTagDeleteOneSchema: z.ZodType<Prisma.LocationTagDeleteArgs> = z.object({ select: LocationTagSelectObjectSchema.optional(), include: LocationTagIncludeObjectSchema.optional(), where: LocationTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LocationTagDeleteArgs>;

export const LocationTagDeleteOneZodSchema = z.object({ select: LocationTagSelectObjectSchema.optional(), include: LocationTagIncludeObjectSchema.optional(), where: LocationTagWhereUniqueInputObjectSchema }).strict();