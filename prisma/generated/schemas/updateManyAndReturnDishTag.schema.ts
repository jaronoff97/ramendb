import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagSelectObjectSchema as DishTagSelectObjectSchema } from './objects/DishTagSelect.schema';
import { DishTagUpdateManyMutationInputObjectSchema as DishTagUpdateManyMutationInputObjectSchema } from './objects/DishTagUpdateManyMutationInput.schema';
import { DishTagWhereInputObjectSchema as DishTagWhereInputObjectSchema } from './objects/DishTagWhereInput.schema';

export const DishTagUpdateManyAndReturnSchema: z.ZodType<Prisma.DishTagUpdateManyAndReturnArgs> = z.object({ select: DishTagSelectObjectSchema.optional(), data: DishTagUpdateManyMutationInputObjectSchema, where: DishTagWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DishTagUpdateManyAndReturnArgs>;

export const DishTagUpdateManyAndReturnZodSchema = z.object({ select: DishTagSelectObjectSchema.optional(), data: DishTagUpdateManyMutationInputObjectSchema, where: DishTagWhereInputObjectSchema.optional() }).strict();