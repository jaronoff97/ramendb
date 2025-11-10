import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingTagOrderByWithRelationInputObjectSchema as RatingTagOrderByWithRelationInputObjectSchema } from './objects/RatingTagOrderByWithRelationInput.schema';
import { RatingTagWhereInputObjectSchema as RatingTagWhereInputObjectSchema } from './objects/RatingTagWhereInput.schema';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './objects/RatingTagWhereUniqueInput.schema';
import { RatingTagCountAggregateInputObjectSchema as RatingTagCountAggregateInputObjectSchema } from './objects/RatingTagCountAggregateInput.schema';

export const RatingTagCountSchema: z.ZodType<Prisma.RatingTagCountArgs> = z.object({ orderBy: z.union([RatingTagOrderByWithRelationInputObjectSchema, RatingTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingTagWhereInputObjectSchema.optional(), cursor: RatingTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RatingTagCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RatingTagCountArgs>;

export const RatingTagCountZodSchema = z.object({ orderBy: z.union([RatingTagOrderByWithRelationInputObjectSchema, RatingTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingTagWhereInputObjectSchema.optional(), cursor: RatingTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RatingTagCountAggregateInputObjectSchema ]).optional() }).strict();