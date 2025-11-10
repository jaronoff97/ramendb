import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DishTagSelectObjectSchema as DishTagSelectObjectSchema } from './objects/DishTagSelect.schema';
import { DishTagIncludeObjectSchema as DishTagIncludeObjectSchema } from './objects/DishTagInclude.schema';
import { DishTagWhereUniqueInputObjectSchema as DishTagWhereUniqueInputObjectSchema } from './objects/DishTagWhereUniqueInput.schema';

export const DishTagFindUniqueSchema: z.ZodType<Prisma.DishTagFindUniqueArgs> = z.object({ select: DishTagSelectObjectSchema.optional(), include: DishTagIncludeObjectSchema.optional(), where: DishTagWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DishTagFindUniqueArgs>;

export const DishTagFindUniqueZodSchema = z.object({ select: DishTagSelectObjectSchema.optional(), include: DishTagIncludeObjectSchema.optional(), where: DishTagWhereUniqueInputObjectSchema }).strict();