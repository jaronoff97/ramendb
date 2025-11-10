import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagIncludeObjectSchema as ReviewTagIncludeObjectSchema } from './objects/ReviewTagInclude.schema';
import { ReviewTagOrderByWithRelationInputObjectSchema as ReviewTagOrderByWithRelationInputObjectSchema } from './objects/ReviewTagOrderByWithRelationInput.schema';
import { ReviewTagWhereInputObjectSchema as ReviewTagWhereInputObjectSchema } from './objects/ReviewTagWhereInput.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './objects/ReviewTagWhereUniqueInput.schema';
import { ReviewTagScalarFieldEnumSchema } from './enums/ReviewTagScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ReviewTagFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ReviewTagSelect> = z.object({
    reviewId: z.boolean().optional(),
    tagId: z.boolean().optional(),
    review: z.boolean().optional(),
    tag: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ReviewTagSelect>;

export const ReviewTagFindFirstOrThrowSelectZodSchema = z.object({
    reviewId: z.boolean().optional(),
    tagId: z.boolean().optional(),
    review: z.boolean().optional(),
    tag: z.boolean().optional()
  }).strict();

export const ReviewTagFindFirstOrThrowSchema: z.ZodType<Prisma.ReviewTagFindFirstOrThrowArgs> = z.object({ select: ReviewTagFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReviewTagIncludeObjectSchema.optional()), orderBy: z.union([ReviewTagOrderByWithRelationInputObjectSchema, ReviewTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewTagWhereInputObjectSchema.optional(), cursor: ReviewTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReviewTagScalarFieldEnumSchema, ReviewTagScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ReviewTagFindFirstOrThrowArgs>;

export const ReviewTagFindFirstOrThrowZodSchema = z.object({ select: ReviewTagFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ReviewTagIncludeObjectSchema.optional()), orderBy: z.union([ReviewTagOrderByWithRelationInputObjectSchema, ReviewTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewTagWhereInputObjectSchema.optional(), cursor: ReviewTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ReviewTagScalarFieldEnumSchema, ReviewTagScalarFieldEnumSchema.array()]).optional() }).strict();