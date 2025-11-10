import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dishId: z.string(),
  tagId: z.string()
}).strict();
export const DishTagDishIdTagIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.DishTagDishIdTagIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagDishIdTagIdCompoundUniqueInput>;
export const DishTagDishIdTagIdCompoundUniqueInputObjectZodSchema = makeSchema();
