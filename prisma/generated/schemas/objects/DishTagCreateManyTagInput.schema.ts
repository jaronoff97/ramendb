import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dishId: z.string()
}).strict();
export const DishTagCreateManyTagInputObjectSchema: z.ZodType<Prisma.DishTagCreateManyTagInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateManyTagInput>;
export const DishTagCreateManyTagInputObjectZodSchema = makeSchema();
