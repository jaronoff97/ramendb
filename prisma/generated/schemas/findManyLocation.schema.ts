import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocationIncludeObjectSchema as LocationIncludeObjectSchema } from './objects/LocationInclude.schema';
import { LocationOrderByWithRelationInputObjectSchema as LocationOrderByWithRelationInputObjectSchema } from './objects/LocationOrderByWithRelationInput.schema';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './objects/LocationWhereInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './objects/LocationWhereUniqueInput.schema';
import { LocationScalarFieldEnumSchema } from './enums/LocationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LocationFindManySelectSchema: z.ZodType<Prisma.LocationSelect> = z.object({
    id: z.boolean().optional(),
    slug: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    address: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    country: z.boolean().optional(),
    latitude: z.boolean().optional(),
    longitude: z.boolean().optional(),
    website: z.boolean().optional(),
    hours: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    dishes: z.boolean().optional(),
    ratings: z.boolean().optional(),
    reviews: z.boolean().optional(),
    tags: z.boolean().optional(),
    pictures: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.LocationSelect>;

export const LocationFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    slug: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    address: z.boolean().optional(),
    city: z.boolean().optional(),
    state: z.boolean().optional(),
    country: z.boolean().optional(),
    latitude: z.boolean().optional(),
    longitude: z.boolean().optional(),
    website: z.boolean().optional(),
    hours: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    dishes: z.boolean().optional(),
    ratings: z.boolean().optional(),
    reviews: z.boolean().optional(),
    tags: z.boolean().optional(),
    pictures: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const LocationFindManySchema: z.ZodType<Prisma.LocationFindManyArgs> = z.object({ select: LocationFindManySelectSchema.optional(), include: z.lazy(() => LocationIncludeObjectSchema.optional()), orderBy: z.union([LocationOrderByWithRelationInputObjectSchema, LocationOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationWhereInputObjectSchema.optional(), cursor: LocationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LocationScalarFieldEnumSchema, LocationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.LocationFindManyArgs>;

export const LocationFindManyZodSchema = z.object({ select: LocationFindManySelectSchema.optional(), include: z.lazy(() => LocationIncludeObjectSchema.optional()), orderBy: z.union([LocationOrderByWithRelationInputObjectSchema, LocationOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocationWhereInputObjectSchema.optional(), cursor: LocationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([LocationScalarFieldEnumSchema, LocationScalarFieldEnumSchema.array()]).optional() }).strict();