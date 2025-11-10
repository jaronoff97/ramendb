import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagIncludeObjectSchema as RatingTagIncludeObjectSchema } from './objects/RatingTagInclude.schema';
import { RatingTagOrderByWithRelationInputObjectSchema as RatingTagOrderByWithRelationInputObjectSchema } from './objects/RatingTagOrderByWithRelationInput.schema';
import { RatingTagWhereInputObjectSchema as RatingTagWhereInputObjectSchema } from './objects/RatingTagWhereInput.schema';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './objects/RatingTagWhereUniqueInput.schema';
import { RatingTagScalarFieldEnumSchema } from './enums/RatingTagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RatingTagFindManySelectSchema: z.ZodType<Prisma.RatingTagSelect> = z.object({
    ratingId: z.boolean().optional(),
    tagId: z.boolean().optional(),
    rating: z.boolean().optional(),
    tag: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RatingTagSelect>;

export const RatingTagFindManySelectZodSchema = z.object({
    ratingId: z.boolean().optional(),
    tagId: z.boolean().optional(),
    rating: z.boolean().optional(),
    tag: z.boolean().optional()
  }).strict();

export const RatingTagFindManySchema: z.ZodType<Prisma.RatingTagFindManyArgs> = z.object({ select: RatingTagFindManySelectSchema.optional(), include: z.lazy(() => RatingTagIncludeObjectSchema.optional()), orderBy: z.union([RatingTagOrderByWithRelationInputObjectSchema, RatingTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingTagWhereInputObjectSchema.optional(), cursor: RatingTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RatingTagScalarFieldEnumSchema, RatingTagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RatingTagFindManyArgs>;

export const RatingTagFindManyZodSchema = z.object({ select: RatingTagFindManySelectSchema.optional(), include: z.lazy(() => RatingTagIncludeObjectSchema.optional()), orderBy: z.union([RatingTagOrderByWithRelationInputObjectSchema, RatingTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingTagWhereInputObjectSchema.optional(), cursor: RatingTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RatingTagScalarFieldEnumSchema, RatingTagScalarFieldEnumSchema.array()]).optional() }).strict();