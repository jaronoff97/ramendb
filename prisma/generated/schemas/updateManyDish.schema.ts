import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishUpdateManyMutationInputObjectSchema as DishUpdateManyMutationInputObjectSchema } from './objects/DishUpdateManyMutationInput.schema';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './objects/DishWhereInput.schema';

export const DishUpdateManySchema: z.ZodType<Prisma.DishUpdateManyArgs> = z.object({ data: DishUpdateManyMutationInputObjectSchema, where: DishWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DishUpdateManyArgs>;

export const DishUpdateManyZodSchema = z.object({ data: DishUpdateManyMutationInputObjectSchema, where: DishWhereInputObjectSchema.optional() }).strict();