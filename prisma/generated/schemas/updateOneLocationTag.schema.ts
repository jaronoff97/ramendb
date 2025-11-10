import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagSelectObjectSchema as LocationTagSelectObjectSchema } from './objects/LocationTagSelect.schema';
import { LocationTagIncludeObjectSchema as LocationTagIncludeObjectSchema } from './objects/LocationTagInclude.schema';
import { LocationTagUpdateInputObjectSchema as LocationTagUpdateInputObjectSchema } from './objects/LocationTagUpdateInput.schema';
import { LocationTagUncheckedUpdateInputObjectSchema as LocationTagUncheckedUpdateInputObjectSchema } from './objects/LocationTagUncheckedUpdateInput.schema';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './objects/LocationTagWhereUniqueInput.schema';

export const LocationTagUpdateOneSchema: z.ZodType<Prisma.LocationTagUpdateArgs> = z.object({ select: LocationTagSelectObjectSchema.optional(), include: LocationTagIncludeObjectSchema.optional(), data: z.union([LocationTagUpdateInputObjectSchema, LocationTagUncheckedUpdateInputObjectSchema]), where: LocationTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LocationTagUpdateArgs>;

export const LocationTagUpdateOneZodSchema = z.object({ select: LocationTagSelectObjectSchema.optional(), include: LocationTagIncludeObjectSchema.optional(), data: z.union([LocationTagUpdateInputObjectSchema, LocationTagUncheckedUpdateInputObjectSchema]), where: LocationTagWhereUniqueInputObjectSchema }).strict();