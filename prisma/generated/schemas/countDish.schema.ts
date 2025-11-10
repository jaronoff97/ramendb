import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishOrderByWithRelationInputObjectSchema as DishOrderByWithRelationInputObjectSchema } from './objects/DishOrderByWithRelationInput.schema';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './objects/DishWhereInput.schema';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './objects/DishWhereUniqueInput.schema';
import { DishCountAggregateInputObjectSchema as DishCountAggregateInputObjectSchema } from './objects/DishCountAggregateInput.schema';

export const DishCountSchema: z.ZodType<Prisma.DishCountArgs> = z.object({ orderBy: z.union([DishOrderByWithRelationInputObjectSchema, DishOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishWhereInputObjectSchema.optional(), cursor: DishWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DishCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DishCountArgs>;

export const DishCountZodSchema = z.object({ orderBy: z.union([DishOrderByWithRelationInputObjectSchema, DishOrderByWithRelationInputObjectSchema.array()]).optional(), where: DishWhereInputObjectSchema.optional(), cursor: DishWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DishCountAggregateInputObjectSchema ]).optional() }).strict();