import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewOrderByWithRelationInputObjectSchema as ReviewOrderByWithRelationInputObjectSchema } from './objects/ReviewOrderByWithRelationInput.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './objects/ReviewWhereUniqueInput.schema';
import { ReviewCountAggregateInputObjectSchema as ReviewCountAggregateInputObjectSchema } from './objects/ReviewCountAggregateInput.schema';
import { ReviewMinAggregateInputObjectSchema as ReviewMinAggregateInputObjectSchema } from './objects/ReviewMinAggregateInput.schema';
import { ReviewMaxAggregateInputObjectSchema as ReviewMaxAggregateInputObjectSchema } from './objects/ReviewMaxAggregateInput.schema';

export const ReviewAggregateSchema: z.ZodType<Prisma.ReviewAggregateArgs> = z.object({ orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReviewCountAggregateInputObjectSchema ]).optional(), _min: ReviewMinAggregateInputObjectSchema.optional(), _max: ReviewMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewAggregateArgs>;

export const ReviewAggregateZodSchema = z.object({ orderBy: z.union([ReviewOrderByWithRelationInputObjectSchema, ReviewOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewWhereInputObjectSchema.optional(), cursor: ReviewWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReviewCountAggregateInputObjectSchema ]).optional(), _min: ReviewMinAggregateInputObjectSchema.optional(), _max: ReviewMaxAggregateInputObjectSchema.optional() }).strict();