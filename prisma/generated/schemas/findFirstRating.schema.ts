import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingIncludeObjectSchema as RatingIncludeObjectSchema } from './objects/RatingInclude.schema';
import { RatingOrderByWithRelationInputObjectSchema as RatingOrderByWithRelationInputObjectSchema } from './objects/RatingOrderByWithRelationInput.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './objects/RatingWhereInput.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './objects/RatingWhereUniqueInput.schema';
import { RatingScalarFieldEnumSchema } from './enums/RatingScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RatingFindFirstSelectSchema: z.ZodType<Prisma.RatingSelect> = z.object({
    id: z.boolean().optional(),
    locationId: z.boolean().optional(),
    userId: z.boolean().optional(),
    value: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    location: z.boolean().optional(),
    user: z.boolean().optional(),
    reviews: z.boolean().optional(),
    tags: z.boolean().optional(),
    ratingPictures: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RatingSelect>;

export const RatingFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    locationId: z.boolean().optional(),
    userId: z.boolean().optional(),
    value: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    location: z.boolean().optional(),
    user: z.boolean().optional(),
    reviews: z.boolean().optional(),
    tags: z.boolean().optional(),
    ratingPictures: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const RatingFindFirstSchema: z.ZodType<Prisma.RatingFindFirstArgs> = z.object({ select: RatingFindFirstSelectSchema.optional(), include: z.lazy(() => RatingIncludeObjectSchema.optional()), orderBy: z.union([RatingOrderByWithRelationInputObjectSchema, RatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingWhereInputObjectSchema.optional(), cursor: RatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RatingScalarFieldEnumSchema, RatingScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RatingFindFirstArgs>;

export const RatingFindFirstZodSchema = z.object({ select: RatingFindFirstSelectSchema.optional(), include: z.lazy(() => RatingIncludeObjectSchema.optional()), orderBy: z.union([RatingOrderByWithRelationInputObjectSchema, RatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingWhereInputObjectSchema.optional(), cursor: RatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RatingScalarFieldEnumSchema, RatingScalarFieldEnumSchema.array()]).optional() }).strict();