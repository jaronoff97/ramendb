import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './objects/DishWhereInput.schema';

export const DishDeleteManySchema: z.ZodType<Prisma.DishDeleteManyArgs> = z.object({ where: DishWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DishDeleteManyArgs>;

export const DishDeleteManyZodSchema = z.object({ where: DishWhereInputObjectSchema.optional() }).strict();