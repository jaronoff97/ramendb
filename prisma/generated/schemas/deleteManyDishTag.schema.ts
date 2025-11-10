import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagWhereInputObjectSchema as DishTagWhereInputObjectSchema } from './objects/DishTagWhereInput.schema';

export const DishTagDeleteManySchema: z.ZodType<Prisma.DishTagDeleteManyArgs> = z.object({ where: DishTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DishTagDeleteManyArgs>;

export const DishTagDeleteManyZodSchema = z.object({ where: DishTagWhereInputObjectSchema.optional() }).strict();