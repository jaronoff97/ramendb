import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagIncludeObjectSchema as LocationTagIncludeObjectSchema } from './objects/LocationTagInclude.schema';
import { LocationTagOrderByWithRelationInputObjectSchema as LocationTagOrderByWithRelationInputObjectSchema } from './objects/LocationTagOrderByWithRelationInput.schema';
import { LocationTagWhereInputObjectSchema as LocationTagWhereInputObjectSchema } from './objects/LocationTagWhereInput.schema';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './objects/LocationTagWhereUniqueInput.schema';
import { LocationTagScalarFieldEnumSchema } from './enums/LocationTagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LocationTagFindFirstSelectSchema: z.ZodType<Prisma.LocationTagSelect> = z.object({
    locationId: z.boolean().optional(),
    tagId: z.boolean().optional(),
    location: z.boolean().optional(),
    tag: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LocationTagSelect>;

export const LocationTagFindFirstSelectZodSchema = z.object({
    locationId: z.boolean().optional(),
    tagId: z.boolean().optional(),
    location: z.boolean().optional(),
    tag: z.boolean().optional()
  }).strict();

export const LocationTagFindFirstSchema: z.ZodType<Prisma.LocationTagFindFirstArgs> = z.object({ select: LocationTagFindFirstSelectSchema.optional(), include: z.lazy(() => LocationTagIncludeObjectSchema.optional()), orderBy: z.union([LocationTagOrderByWithRelationInputObjectSchema, LocationTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationTagWhereInputObjectSchema.optional(), cursor: LocationTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LocationTagScalarFieldEnumSchema, LocationTagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LocationTagFindFirstArgs>;

export const LocationTagFindFirstZodSchema = z.object({ select: LocationTagFindFirstSelectSchema.optional(), include: z.lazy(() => LocationTagIncludeObjectSchema.optional()), orderBy: z.union([LocationTagOrderByWithRelationInputObjectSchema, LocationTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationTagWhereInputObjectSchema.optional(), cursor: LocationTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LocationTagScalarFieldEnumSchema, LocationTagScalarFieldEnumSchema.array()]).optional() }).strict();