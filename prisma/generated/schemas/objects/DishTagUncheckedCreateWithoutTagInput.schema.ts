import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dishId: z.string()
}).strict();
export const DishTagUncheckedCreateWithoutTagInputObjectSchema: z.ZodType<Prisma.DishTagUncheckedCreateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUncheckedCreateWithoutTagInput>;
export const DishTagUncheckedCreateWithoutTagInputObjectZodSchema = makeSchema();
