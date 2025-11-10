import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const DishTagUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.DishTagUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagUpdateManyMutationInput>;
export const DishTagUpdateManyMutationInputObjectZodSchema = makeSchema();
