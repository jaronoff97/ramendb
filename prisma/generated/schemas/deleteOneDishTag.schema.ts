import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagSelectObjectSchema as DishTagSelectObjectSchema } from './objects/DishTagSelect.schema';
import { DishTagIncludeObjectSchema as DishTagIncludeObjectSchema } from './objects/DishTagInclude.schema';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './objects/DishTagWhereUniqueInput.schema';

export const DishTagDeleteOneSchema: z.ZodType<Prisma.DishTagDeleteArgs> = z.object({ select: DishTagSelectObjectSchema.optional(), include: DishTagIncludeObjectSchema.optional(), where: DishTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DishTagDeleteArgs>;

export const DishTagDeleteOneZodSchema = z.object({ select: DishTagSelectObjectSchema.optional(), include: DishTagIncludeObjectSchema.optional(), where: DishTagWhereUniqueInputObjectSchema }).strict();