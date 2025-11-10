import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishSelectObjectSchema as DishSelectObjectSchema } from './objects/DishSelect.schema';
import { DishIncludeObjectSchema as DishIncludeObjectSchema } from './objects/DishInclude.schema';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './objects/DishWhereUniqueInput.schema';

export const DishFindUniqueSchema: z.ZodType<Prisma.DishFindUniqueArgs> = z.object({ select: DishSelectObjectSchema.optional(), include: DishIncludeObjectSchema.optional(), where: DishWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DishFindUniqueArgs>;

export const DishFindUniqueZodSchema = z.object({ select: DishSelectObjectSchema.optional(), include: DishIncludeObjectSchema.optional(), where: DishWhereUniqueInputObjectSchema }).strict();