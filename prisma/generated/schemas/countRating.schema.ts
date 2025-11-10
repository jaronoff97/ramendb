import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingOrderByWithRelationInputObjectSchema as RatingOrderByWithRelationInputObjectSchema } from './objects/RatingOrderByWithRelationInput.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './objects/RatingWhereInput.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './objects/RatingWhereUniqueInput.schema';
import { RatingCountAggregateInputObjectSchema as RatingCountAggregateInputObjectSchema } from './objects/RatingCountAggregateInput.schema';

export const RatingCountSchema: z.ZodType<Prisma.RatingCountArgs> = z.object({ orderBy: z.union([RatingOrderByWithRelationInputObjectSchema, RatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingWhereInputObjectSchema.optional(), cursor: RatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RatingCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.RatingCountArgs>;

export const RatingCountZodSchema = z.object({ orderBy: z.union([RatingOrderByWithRelationInputObjectSchema, RatingOrderByWithRelationInputObjectSchema.array()]).optional(), where: RatingWhereInputObjectSchema.optional(), cursor: RatingWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RatingCountAggregateInputObjectSchema ]).optional() }).strict();