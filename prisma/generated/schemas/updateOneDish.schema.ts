import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishSelectObjectSchema as DishSelectObjectSchema } from './objects/DishSelect.schema';
import { DishIncludeObjectSchema as DishIncludeObjectSchema } from './objects/DishInclude.schema';
import { DishUpdateInputObjectSchema as DishUpdateInputObjectSchema } from './objects/DishUpdateInput.schema';
import { DishUncheckedUpdateInputObjectSchema as DishUncheckedUpdateInputObjectSchema } from './objects/DishUncheckedUpdateInput.schema';
import { DishWhereUniqueInputObjectSchema as DishWhereUniqueInputObjectSchema } from './objects/DishWhereUniqueInput.schema';

export const DishUpdateOneSchema: z.ZodType<Prisma.DishUpdateArgs> = z.object({ select: DishSelectObjectSchema.optional(), include: DishIncludeObjectSchema.optional(), data: z.union([DishUpdateInputObjectSchema, DishUncheckedUpdateInputObjectSchema]), where: DishWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DishUpdateArgs>;

export const DishUpdateOneZodSchema = z.object({ select: DishSelectObjectSchema.optional(), include: DishIncludeObjectSchema.optional(), data: z.union([DishUpdateInputObjectSchema, DishUncheckedUpdateInputObjectSchema]), where: DishWhereUniqueInputObjectSchema }).strict();