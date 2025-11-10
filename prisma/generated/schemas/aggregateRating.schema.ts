import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingOrderByWithRelationInputObjectSchema as RatingOrderByWithRelationInputObjectSchema } from './objects/RatingOrderByWithRelationInput.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './objects/RatingWhereInput.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './objects/RatingWhereUniqueInput.schema';
import { RatingCountAggregateInputObjectSchema as RatingCountAggregateInputObjectSchema } from './objects/RatingCountAggregateInput.schema';
import { RatingMinAggregateInputObjectSchema as RatingMinAggregateInputObjectSchema } from './objects/RatingMinAggregateInput.schema';
import { RatingMaxAggregateInputObjectSchema as RatingMaxAggregateInputObjectSchema } from './objects/RatingMaxAggregateInput.schema';
import { RatingAvgAggregateInputObjectSchema as RatingAvgAggregateInputObjectSchema } from './objects/RatingAvgAggregateInput.schema';
import { RatingSumAggregateInputObjectSchema as RatingSumAggregateInputObjectSchema } from './objects/RatingSumAggregateInput.schema';

export const RatingAggregateSchema: z.ZodType<Prisma.RatingAggregateArgs> = z.object({ orderBy: z.union([RatingOrderByWithRelationInputObjectSchema, RatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingWhereInputObjectSchema.optional(), cursor: RatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RatingCountAggregateInputObjectSchema ]).optional(), _min: RatingMinAggregateInputObjectSchema.optional(), _max: RatingMaxAggregateInputObjectSchema.optional(), _avg: RatingAvgAggregateInputObjectSchema.optional(), _sum: RatingSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.RatingAggregateArgs>;

export const RatingAggregateZodSchema = z.object({ orderBy: z.union([RatingOrderByWithRelationInputObjectSchema, RatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingWhereInputObjectSchema.optional(), cursor: RatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), RatingCountAggregateInputObjectSchema ]).optional(), _min: RatingMinAggregateInputObjectSchema.optional(), _max: RatingMaxAggregateInputObjectSchema.optional(), _avg: RatingAvgAggregateInputObjectSchema.optional(), _sum: RatingSumAggregateInputObjectSchema.optional() }).strict();