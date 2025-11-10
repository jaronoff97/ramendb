import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './objects/ReviewWhereInput.schema';
import { ReviewOrderByWithAggregationInputObjectSchema as ReviewOrderByWithAggregationInputObjectSchema } from './objects/ReviewOrderByWithAggregationInput.schema';
import { ReviewScalarWhereWithAggregatesInputObjectSchema as ReviewScalarWhereWithAggregatesInputObjectSchema } from './objects/ReviewScalarWhereWithAggregatesInput.schema';
import { ReviewScalarFieldEnumSchema } from './enums/ReviewScalarFieldEnum.schema';
import { ReviewCountAggregateInputObjectSchema as ReviewCountAggregateInputObjectSchema } from './objects/ReviewCountAggregateInput.schema';
import { ReviewMinAggregateInputObjectSchema as ReviewMinAggregateInputObjectSchema } from './objects/ReviewMinAggregateInput.schema';
import { ReviewMaxAggregateInputObjectSchema as ReviewMaxAggregateInputObjectSchema } from './objects/ReviewMaxAggregateInput.schema';

export const ReviewGroupBySchema: z.ZodType<Prisma.ReviewGroupByArgs> = z.object({ where: ReviewWhereInputObjectSchema.optional(), orderBy: z.union([ReviewOrderByWithAggregationInputObjectSchema, ReviewOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReviewScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReviewScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReviewCountAggregateInputObjectSchema ]).optional(), _min: ReviewMinAggregateInputObjectSchema.optional(), _max: ReviewMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ReviewGroupByArgs>;

export const ReviewGroupByZodSchema = z.object({ where: ReviewWhereInputObjectSchema.optional(), orderBy: z.union([ReviewOrderByWithAggregationInputObjectSchema, ReviewOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ReviewScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ReviewScalarFieldEnumSchema), _count: z.union([ z.literal(true), ReviewCountAggregateInputObjectSchema ]).optional(), _min: ReviewMinAggregateInputObjectSchema.optional(), _max: ReviewMaxAggregateInputObjectSchema.optional() }).strict();