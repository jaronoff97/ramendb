import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagOrderByWithRelationInputObjectSchema as DishTagOrderByWithRelationInputObjectSchema } from './objects/DishTagOrderByWithRelationInput.schema';
import { DishTagWhereInputObjectSchema as DishTagWhereInputObjectSchema } from './objects/DishTagWhereInput.schema';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './objects/DishTagWhereUniqueInput.schema';
import { DishTagCountAggregateInputObjectSchema as DishTagCountAggregateInputObjectSchema } from './objects/DishTagCountAggregateInput.schema';
import { DishTagMinAggregateInputObjectSchema as DishTagMinAggregateInputObjectSchema } from './objects/DishTagMinAggregateInput.schema';
import { DishTagMaxAggregateInputObjectSchema as DishTagMaxAggregateInputObjectSchema } from './objects/DishTagMaxAggregateInput.schema';

export const DishTagAggregateSchema: z.ZodType<Prisma.DishTagAggregateArgs> = z.object({ orderBy: z.union([DishTagOrderByWithRelationInputObjectSchema, DishTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishTagWhereInputObjectSchema.optional(), cursor: DishTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DishTagCountAggregateInputObjectSchema ]).optional(), _min: DishTagMinAggregateInputObjectSchema.optional(), _max: DishTagMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DishTagAggregateArgs>;

export const DishTagAggregateZodSchema = z.object({ orderBy: z.union([DishTagOrderByWithRelationInputObjectSchema, DishTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishTagWhereInputObjectSchema.optional(), cursor: DishTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DishTagCountAggregateInputObjectSchema ]).optional(), _min: DishTagMinAggregateInputObjectSchema.optional(), _max: DishTagMaxAggregateInputObjectSchema.optional() }).strict();