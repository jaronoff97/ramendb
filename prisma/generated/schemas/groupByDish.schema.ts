import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './objects/DishWhereInput.schema';
import { DishOrderByWithAggregationInputObjectSchema as DishOrderByWithAggregationInputObjectSchema } from './objects/DishOrderByWithAggregationInput.schema';
import { DishScalarWhereWithAggregatesInputObjectSchema as DishScalarWhereWithAggregatesInputObjectSchema } from './objects/DishScalarWhereWithAggregatesInput.schema';
import { DishScalarFieldEnumSchema } from './enums/DishScalarFieldEnum.schema';
import { DishCountAggregateInputObjectSchema as DishCountAggregateInputObjectSchema } from './objects/DishCountAggregateInput.schema';
import { DishMinAggregateInputObjectSchema as DishMinAggregateInputObjectSchema } from './objects/DishMinAggregateInput.schema';
import { DishMaxAggregateInputObjectSchema as DishMaxAggregateInputObjectSchema } from './objects/DishMaxAggregateInput.schema';
import { DishAvgAggregateInputObjectSchema as DishAvgAggregateInputObjectSchema } from './objects/DishAvgAggregateInput.schema';
import { DishSumAggregateInputObjectSchema as DishSumAggregateInputObjectSchema } from './objects/DishSumAggregateInput.schema';

export const DishGroupBySchema: z.ZodType<Prisma.DishGroupByArgs> = z.object({ where: DishWhereInputObjectSchema.optional(), orderBy: z.union([DishOrderByWithAggregationInputObjectSchema, DishOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DishScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DishScalarFieldEnumSchema), _count: z.union([ z.literal(true), DishCountAggregateInputObjectSchema ]).optional(), _min: DishMinAggregateInputObjectSchema.optional(), _max: DishMaxAggregateInputObjectSchema.optional(), _avg: DishAvgAggregateInputObjectSchema.optional(), _sum: DishSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DishGroupByArgs>;

export const DishGroupByZodSchema = z.object({ where: DishWhereInputObjectSchema.optional(), orderBy: z.union([DishOrderByWithAggregationInputObjectSchema, DishOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DishScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DishScalarFieldEnumSchema), _count: z.union([ z.literal(true), DishCountAggregateInputObjectSchema ]).optional(), _min: DishMinAggregateInputObjectSchema.optional(), _max: DishMaxAggregateInputObjectSchema.optional(), _avg: DishAvgAggregateInputObjectSchema.optional(), _sum: DishSumAggregateInputObjectSchema.optional() }).strict();