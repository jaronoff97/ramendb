import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const DishWhereUniqueInputObjectSchema: z.ZodType<Prisma.DishWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DishWhereUniqueInput>;
export const DishWhereUniqueInputObjectZodSchema = makeSchema();
