import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagUpdateManyMutationInputObjectSchema as DishTagUpdateManyMutationInputObjectSchema } from './objects/DishTagUpdateManyMutationInput.schema';
import { DishTagWhereInputObjectSchema as DishTagWhereInputObjectSchema } from './objects/DishTagWhereInput.schema';

export const DishTagUpdateManySchema: z.ZodType<Prisma.DishTagUpdateManyArgs> = z.object({ data: DishTagUpdateManyMutationInputObjectSchema, where: DishTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DishTagUpdateManyArgs>;

export const DishTagUpdateManyZodSchema = z.object({ data: DishTagUpdateManyMutationInputObjectSchema, where: DishTagWhereInputObjectSchema.optional() }).strict();