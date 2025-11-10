import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagOrderByWithRelationInputObjectSchema as ReviewTagOrderByWithRelationInputObjectSchema } from './objects/ReviewTagOrderByWithRelationInput.schema';
import { ReviewTagWhereInputObjectSchema as ReviewTagWhereInputObjectSchema } from './objects/ReviewTagWhereInput.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './objects/ReviewTagWhereUniqueInput.schema';
import { ReviewTagCountAggregateInputObjectSchema as ReviewTagCountAggregateInputObjectSchema } from './objects/ReviewTagCountAggregateInput.schema';
import { ReviewTagMinAggregateInputObjectSchema as ReviewTagMinAggregateInputObjectSchema } from './objects/ReviewTagMinAggregateInput.schema';
import { ReviewTagMaxAggregateInputObjectSchema as ReviewTagMaxAggregateInputObjectSchema } from './objects/ReviewTagMaxAggregateInput.schema';

export const ReviewTagAggregateSchema: z.ZodType<Prisma.ReviewTagAggregateArgs> = z.object({ orderBy: z.union([ReviewTagOrderByWithRelationInputObjectSchema, ReviewTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewTagWhereInputObjectSchema.optional(), cursor: ReviewTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReviewTagCountAggregateInputObjectSchema ]).optional(), _min: ReviewTagMinAggregateInputObjectSchema.optional(), _max: ReviewTagMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewTagAggregateArgs>;

export const ReviewTagAggregateZodSchema = z.object({ orderBy: z.union([ReviewTagOrderByWithRelationInputObjectSchema, ReviewTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewTagWhereInputObjectSchema.optional(), cursor: ReviewTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ReviewTagCountAggregateInputObjectSchema ]).optional(), _min: ReviewTagMinAggregateInputObjectSchema.optional(), _max: ReviewTagMaxAggregateInputObjectSchema.optional() }).strict();