import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagDishIdTagIdCompoundUniqueInputObjectSchema as DishTagDishIdTagIdCompoundUniqueInputObjectSchema } from './DishTagDishIdTagIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  dishId_tagId: z.lazy(() => DishTagDishIdTagIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const DishTagWhereUniqueInputObjectSchema: z.ZodType<Prisma.DishTagWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagWhereUniqueInput>;
export const DishTagWhereUniqueInputObjectZodSchema = makeSchema();
