import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagSelectObjectSchema as LocationTagSelectObjectSchema } from './objects/LocationTagSelect.schema';
import { LocationTagIncludeObjectSchema as LocationTagIncludeObjectSchema } from './objects/LocationTagInclude.schema';
import { LocationTagCreateInputObjectSchema as LocationTagCreateInputObjectSchema } from './objects/LocationTagCreateInput.schema';
import { LocationTagUncheckedCreateInputObjectSchema as LocationTagUncheckedCreateInputObjectSchema } from './objects/LocationTagUncheckedCreateInput.schema';

export const LocationTagCreateOneSchema: z.ZodType<Prisma.LocationTagCreateArgs> = z.object({ select: LocationTagSelectObjectSchema.optional(), include: LocationTagIncludeObjectSchema.optional(), data: z.union([LocationTagCreateInputObjectSchema, LocationTagUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.LocationTagCreateArgs>;

export const LocationTagCreateOneZodSchema = z.object({ select: LocationTagSelectObjectSchema.optional(), include: LocationTagIncludeObjectSchema.optional(), data: z.union([LocationTagCreateInputObjectSchema, LocationTagUncheckedCreateInputObjectSchema]) }).strict();