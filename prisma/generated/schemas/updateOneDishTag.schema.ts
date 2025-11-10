import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagSelectObjectSchema as DishTagSelectObjectSchema } from './objects/DishTagSelect.schema';
import { DishTagIncludeObjectSchema as DishTagIncludeObjectSchema } from './objects/DishTagInclude.schema';
import { DishTagUpdateInputObjectSchema as DishTagUpdateInputObjectSchema } from './objects/DishTagUpdateInput.schema';
import { DishTagUncheckedUpdateInputObjectSchema as DishTagUncheckedUpdateInputObjectSchema } from './objects/DishTagUncheckedUpdateInput.schema';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './objects/DishTagWhereUniqueInput.schema';

export const DishTagUpdateOneSchema: z.ZodType<Prisma.DishTagUpdateArgs> = z.object({ select: DishTagSelectObjectSchema.optional(), include: DishTagIncludeObjectSchema.optional(), data: z.union([DishTagUpdateInputObjectSchema, DishTagUncheckedUpdateInputObjectSchema]), where: DishTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DishTagUpdateArgs>;

export const DishTagUpdateOneZodSchema = z.object({ select: DishTagSelectObjectSchema.optional(), include: DishTagIncludeObjectSchema.optional(), data: z.union([DishTagUpdateInputObjectSchema, DishTagUncheckedUpdateInputObjectSchema]), where: DishTagWhereUniqueInputObjectSchema }).strict();