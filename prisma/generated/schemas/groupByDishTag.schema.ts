import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagWhereInputObjectSchema as DishTagWhereInputObjectSchema } from './objects/DishTagWhereInput.schema';
import { DishTagOrderByWithAggregationInputObjectSchema as DishTagOrderByWithAggregationInputObjectSchema } from './objects/DishTagOrderByWithAggregationInput.schema';
import { DishTagScalarWhereWithAggregatesInputObjectSchema as DishTagScalarWhereWithAggregatesInputObjectSchema } from './objects/DishTagScalarWhereWithAggregatesInput.schema';
import { DishTagScalarFieldEnumSchema } from './enums/DishTagScalarFieldEnum.schema';
import { DishTagCountAggregateInputObjectSchema as DishTagCountAggregateInputObjectSchema } from './objects/DishTagCountAggregateInput.schema';
import { DishTagMinAggregateInputObjectSchema as DishTagMinAggregateInputObjectSchema } from './objects/DishTagMinAggregateInput.schema';
import { DishTagMaxAggregateInputObjectSchema as DishTagMaxAggregateInputObjectSchema } from './objects/DishTagMaxAggregateInput.schema';

export const DishTagGroupBySchema: z.ZodType<Prisma.DishTagGroupByArgs> = z.object({ where: DishTagWhereInputObjectSchema.optional(), orderBy: z.union([DishTagOrderByWithAggregationInputObjectSchema, DishTagOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DishTagScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DishTagScalarFieldEnumSchema), _count: z.union([ z.literal(true), DishTagCountAggregateInputObjectSchema ]).optional(), _min: DishTagMinAggregateInputObjectSchema.optional(), _max: DishTagMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DishTagGroupByArgs>;

export const DishTagGroupByZodSchema = z.object({ where: DishTagWhereInputObjectSchema.optional(), orderBy: z.union([DishTagOrderByWithAggregationInputObjectSchema, DishTagOrderByWithAggregationInputObjectSchema.array()]).optional(), having: DishTagScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(DishTagScalarFieldEnumSchema), _count: z.union([ z.literal(true), DishTagCountAggregateInputObjectSchema ]).optional(), _min: DishTagMinAggregateInputObjectSchema.optional(), _max: DishTagMaxAggregateInputObjectSchema.optional() }).strict();