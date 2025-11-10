import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  dishId: z.string(),
  tagId: z.string()
}).strict();
export const DishTagCreateManyInputObjectSchema: z.ZodType<Prisma.DishTagCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagCreateManyInput>;
export const DishTagCreateManyInputObjectZodSchema = makeSchema();
