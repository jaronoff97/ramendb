import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishOrderByWithRelationInputObjectSchema as DishOrderByWithRelationInputObjectSchema } from './objects/DishOrderByWithRelationInput.schema';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './objects/DishWhereInput.schema';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './objects/DishWhereUniqueInput.schema';
import { DishCountAggregateInputObjectSchema as DishCountAggregateInputObjectSchema } from './objects/DishCountAggregateInput.schema';
import { DishMinAggregateInputObjectSchema as DishMinAggregateInputObjectSchema } from './objects/DishMinAggregateInput.schema';
import { DishMaxAggregateInputObjectSchema as DishMaxAggregateInputObjectSchema } from './objects/DishMaxAggregateInput.schema';
import { DishAvgAggregateInputObjectSchema as DishAvgAggregateInputObjectSchema } from './objects/DishAvgAggregateInput.schema';
import { DishSumAggregateInputObjectSchema as DishSumAggregateInputObjectSchema } from './objects/DishSumAggregateInput.schema';

export const DishAggregateSchema: z.ZodType<Prisma.DishAggregateArgs> = z.object({ orderBy: z.union([DishOrderByWithRelationInputObjectSchema, DishOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishWhereInputObjectSchema.optional(), cursor: DishWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DishCountAggregateInputObjectSchema ]).optional(), _min: DishMinAggregateInputObjectSchema.optional(), _max: DishMaxAggregateInputObjectSchema.optional(), _avg: DishAvgAggregateInputObjectSchema.optional(), _sum: DishSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DishAggregateArgs>;

export const DishAggregateZodSchema = z.object({ orderBy: z.union([DishOrderByWithRelationInputObjectSchema, DishOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishWhereInputObjectSchema.optional(), cursor: DishWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), DishCountAggregateInputObjectSchema ]).optional(), _min: DishMinAggregateInputObjectSchema.optional(), _max: DishMaxAggregateInputObjectSchema.optional(), _avg: DishAvgAggregateInputObjectSchema.optional(), _sum: DishSumAggregateInputObjectSchema.optional() }).strict();