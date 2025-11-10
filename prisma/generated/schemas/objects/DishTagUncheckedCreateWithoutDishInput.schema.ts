import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tagId: z.string()
}).strict();
export const DishTagUncheckedCreateWithoutDishInputObjectSchema: z.ZodType<Prisma.DishTagUncheckedCreateWithoutDishInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUncheckedCreateWithoutDishInput>;
export const DishTagUncheckedCreateWithoutDishInputObjectZodSchema = makeSchema();
