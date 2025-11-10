import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tagId: z.string()
}).strict();
export const DishTagCreateManyDishInputObjectSchema: z.ZodType<Prisma.DishTagCreateManyDishInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateManyDishInput>;
export const DishTagCreateManyDishInputObjectZodSchema = makeSchema();
