import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagSelectObjectSchema as LocationTagSelectObjectSchema } from './objects/LocationTagSelect.schema';
import { LocationTagIncludeObjectSchema as LocationTagIncludeObjectSchema } from './objects/LocationTagInclude.schema';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './objects/LocationTagWhereUniqueInput.schema';
import { LocationTagCreateInputObjectSchema as LocationTagCreateInputObjectSchema } from './objects/LocationTagCreateInput.schema';
import { LocationTagUncheckedCreateInputObjectSchema as LocationTagUncheckedCreateInputObjectSchema } from './objects/LocationTagUncheckedCreateInput.schema';
import { LocationTagUpdateInputObjectSchema as LocationTagUpdateInputObjectSchema } from './objects/LocationTagUpdateInput.schema';
import { LocationTagUncheckedUpdateInputObjectSchema as LocationTagUncheckedUpdateInputObjectSchema } from './objects/LocationTagUncheckedUpdateInput.schema';

export const LocationTagUpsertOneSchema: z.ZodType<Prisma.LocationTagUpsertArgs> = z.object({ select: LocationTagSelectObjectSchema.optional(), include: LocationTagIncludeObjectSchema.optional(), where: LocationTagWhereUniqueInputObjectSchema, create: z.union([ LocationTagCreateInputObjectSchema, LocationTagUncheckedCreateInputObjectSchema ]), update: z.union([ LocationTagUpdateInputObjectSchema, LocationTagUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.LocationTagUpsertArgs>;

export const LocationTagUpsertOneZodSchema = z.object({ select: LocationTagSelectObjectSchema.optional(), include: LocationTagIncludeObjectSchema.optional(), where: LocationTagWhereUniqueInputObjectSchema, create: z.union([ LocationTagCreateInputObjectSchema, LocationTagUncheckedCreateInputObjectSchema ]), update: z.union([ LocationTagUpdateInputObjectSchema, LocationTagUncheckedUpdateInputObjectSchema ]) }).strict();