import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewTagOrderByWithRelationInputObjectSchema as ReviewTagOrderByWithRelationInputObjectSchema } from './objects/ReviewTagOrderByWithRelationInput.schema';
import { ReviewTagWhereInputObjectSchema as ReviewTagWhereInputObjectSchema } from './objects/ReviewTagWhereInput.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './objects/ReviewTagWhereUniqueInput.schema';
import { ReviewTagCountAggregateInputObjectSchema as ReviewTagCountAggregateInputObjectSchema } from './objects/ReviewTagCountAggregateInput.schema';

export const ReviewTagCountSchema: z.ZodType<Prisma.ReviewTagCountArgs> = z.object({ orderBy: z.union([ReviewTagOrderByWithRelationInputObjectSchema, ReviewTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewTagWhereInputObjectSchema.optional(), cursor: ReviewTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReviewTagCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ReviewTagCountArgs>;

export const ReviewTagCountZodSchema = z.object({ orderBy: z.union([ReviewTagOrderByWithRelationInputObjectSchema, ReviewTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: ReviewTagWhereInputObjectSchema.optional(), cursor: ReviewTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ReviewTagCountAggregateInputObjectSchema ]).optional() }).strict();