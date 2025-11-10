import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewPictureOrderByWithRelationInputObjectSchema as ReviewPictureOrderByWithRelationInputObjectSchema } from './objects/ReviewPictureOrderByWithRelationInput.schema';
import { ReviewPictureWhereInputObjectSchema as ReviewPictureWhereInputObjectSchema } from './objects/ReviewPictureWhereInput.schema';
import { ReviewPictureWhereUniqueInputObjectSchema as ReviewPictureWhereUniqueInputObjectSchema } from './objects/ReviewPictureWhereUniqueInput.schema';
import { ReviewPictureCountAggregateInputObjectSchema as ReviewPictureCountAggregateInputObjectSchema } from './objects/ReviewPictureCountAggregateInput.schema';

export const ReviewPictureCountSchema: z.ZodType<Prisma.ReviewPictureCountArgs> = z.object({ orderBy: z.union([ReviewPictureOrderByWithRelationInputObjectSchema, ReviewPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewPictureWhereInputObjectSchema.optional(), cursor: ReviewPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReviewPictureCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReviewPictureCountArgs>;

export const ReviewPictureCountZodSchema = z.object({ orderBy: z.union([ReviewPictureOrderByWithRelationInputObjectSchema, ReviewPictureOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewPictureWhereInputObjectSchema.optional(), cursor: ReviewPictureWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReviewPictureCountAggregateInputObjectSchema ]).optional() }).strict();