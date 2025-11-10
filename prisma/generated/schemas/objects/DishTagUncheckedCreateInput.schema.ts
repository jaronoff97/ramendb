import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dishId: z.string(),
  tagId: z.string()
}).strict();
export const DishTagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DishTagUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUncheckedCreateInput>;
export const DishTagUncheckedCreateInputObjectZodSchema = makeSchema();
