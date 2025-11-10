import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationTagIncludeObjectSchema as LocationTagIncludeObjectSchema } from './objects/LocationTagInclude.schema';
import { LocationTagOrderByWithRelationInputObjectSchema as LocationTagOrderByWithRelationInputObjectSchema } from './objects/LocationTagOrderByWithRelationInput.schema';
import { LocationTagWhereInputObjectSchema as LocationTagWhereInputObjectSchema } from './objects/LocationTagWhereInput.schema';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './objects/LocationTagWhereUniqueInput.schema';
import { LocationTagScalarFieldEnumSchema } from './enums/LocationTagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LocationTagFindManySelectSchema: z.ZodType<Prisma.LocationTagSelect> = z.object({
    locationId: z.boolean().optional(),
    tagId: z.boolean().optional(),
    location: z.boolean().optional(),
    tag: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LocationTagSelect>;

export const LocationTagFindManySelectZodSchema = z.object({
    locationId: z.boolean().optional(),
    tagId: z.boolean().optional(),
    location: z.boolean().optional(),
    tag: z.boolean().optional()
  }).strict();

export const LocationTagFindManySchema: z.ZodType<Prisma.LocationTagFindManyArgs> = z.object({ select: LocationTagFindManySelectSchema.optional(), include: z.lazy(() => LocationTagIncludeObjectSchema.optional()), orderBy: z.union([LocationTagOrderByWithRelationInputObjectSchema, LocationTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationTagWhereInputObjectSchema.optional(), cursor: LocationTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LocationTagScalarFieldEnumSchema, LocationTagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LocationTagFindManyArgs>;

export const LocationTagFindManyZodSchema = z.object({ select: LocationTagFindManySelectSchema.optional(), include: z.lazy(() => LocationTagIncludeObjectSchema.optional()), orderBy: z.union([LocationTagOrderByWithRelationInputObjectSchema, LocationTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationTagWhereInputObjectSchema.optional(), cursor: LocationTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LocationTagScalarFieldEnumSchema, LocationTagScalarFieldEnumSchema.array()]).optional() }).strict();