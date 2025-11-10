import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagOrderByWithRelationInputObjectSchema as RatingTagOrderByWithRelationInputObjectSchema } from './objects/RatingTagOrderByWithRelationInput.schema';
import { RatingTagWhereInputObjectSchema as RatingTagWhereInputObjectSchema } from './objects/RatingTagWhereInput.schema';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './objects/RatingTagWhereUniqueInput.schema';
import { RatingTagCountAggregateInputObjectSchema as RatingTagCountAggregateInputObjectSchema } from './objects/RatingTagCountAggregateInput.schema';
import { RatingTagMinAggregateInputObjectSchema as RatingTagMinAggregateInputObjectSchema } from './objects/RatingTagMinAggregateInput.schema';
import { RatingTagMaxAggregateInputObjectSchema as RatingTagMaxAggregateInputObjectSchema } from './objects/RatingTagMaxAggregateInput.schema';

export const RatingTagAggregateSchema: z.ZodType<Prisma.RatingTagAggregateArgs> = z.object({ orderBy: z.union([RatingTagOrderByWithRelationInputObjectSchema, RatingTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingTagWhereInputObjectSchema.optional(), cursor: RatingTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RatingTagCountAggregateInputObjectSchema ]).optional(), _min: RatingTagMinAggregateInputObjectSchema.optional(), _max: RatingTagMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RatingTagAggregateArgs>;

export const RatingTagAggregateZodSchema = z.object({ orderBy: z.union([RatingTagOrderByWithRelationInputObjectSchema, RatingTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingTagWhereInputObjectSchema.optional(), cursor: RatingTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RatingTagCountAggregateInputObjectSchema ]).optional(), _min: RatingTagMinAggregateInputObjectSchema.optional(), _max: RatingTagMaxAggregateInputObjectSchema.optional() }).strict();