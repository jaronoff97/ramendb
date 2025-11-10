import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationSelectObjectSchema as LocationSelectObjectSchema } from './objects/LocationSelect.schema';
import { LocationIncludeObjectSchema as LocationIncludeObjectSchema } from './objects/LocationInclude.schema';
import { LocationUpdateInputObjectSchema as LocationUpdateInputObjectSchema } from './objects/LocationUpdateInput.schema';
import { LocationUncheckedUpdateInputObjectSchema as LocationUncheckedUpdateInputObjectSchema } from './objects/LocationUncheckedUpdateInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';

export const LocationUpdateOneSchema: z.ZodType<Prisma.LocationUpdateArgs> = z.object({ select: LocationSelectObjectSchema.optional(), include: LocationIncludeObjectSchema.optional(), data: z.union([LocationUpdateInputObjectSchema, LocationUncheckedUpdateInputObjectSchema]), where: LocationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.LocationUpdateArgs>;

export const LocationUpdateOneZodSchema = z.object({ select: LocationSelectObjectSchema.optional(), include: LocationIncludeObjectSchema.optional(), data: z.union([LocationUpdateInputObjectSchema, LocationUncheckedUpdateInputObjectSchema]), where: LocationWhereUniqueInputObjectSchema }).strict();