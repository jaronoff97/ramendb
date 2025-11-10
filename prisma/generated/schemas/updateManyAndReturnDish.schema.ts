import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishSelectObjectSchema as DishSelectObjectSchema } from './objects/DishSelect.schema';
import { DishUpdateManyMutationInputObjectSchema as DishUpdateManyMutationInputObjectSchema } from './objects/DishUpdateManyMutationInput.schema';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './objects/DishWhereInput.schema';

export const DishUpdateManyAndReturnSchema: z.ZodType<Prisma.DishUpdateManyAndReturnArgs> = z.object({ select: DishSelectObjectSchema.optional(), data: DishUpdateManyMutationInputObjectSchema, where: DishWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DishUpdateManyAndReturnArgs>;

export const DishUpdateManyAndReturnZodSchema = z.object({ select: DishSelectObjectSchema.optional(), data: DishUpdateManyMutationInputObjectSchema, where: DishWhereInputObjectSchema.optional() }).strict();