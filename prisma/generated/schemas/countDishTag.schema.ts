import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagOrderByWithRelationInputObjectSchema as DishTagOrderByWithRelationInputObjectSchema } from './objects/DishTagOrderByWithRelationInput.schema';
import { DishTagWhereInputObjectSchema as DishTagWhereInputObjectSchema } from './objects/DishTagWhereInput.schema';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './objects/DishTagWhereUniqueInput.schema';
import { DishTagCountAggregateInputObjectSchema as DishTagCountAggregateInputObjectSchema } from './objects/DishTagCountAggregateInput.schema';

export const DishTagCountSchema: z.ZodType<Prisma.DishTagCountArgs> = z.object({ orderBy: z.union([DishTagOrderByWithRelationInputObjectSchema, DishTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishTagWhereInputObjectSchema.optional(), cursor: DishTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DishTagCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DishTagCountArgs>;

export const DishTagCountZodSchema = z.object({ orderBy: z.union([DishTagOrderByWithRelationInputObjectSchema, DishTagOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishTagWhereInputObjectSchema.optional(), cursor: DishTagWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DishTagCountAggregateInputObjectSchema ]).optional() }).strict();