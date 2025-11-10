import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './DishWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => DishWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => DishWhereInputObjectSchema).optional()
}).strict();
export const DishScalarRelationFilterObjectSchema: z.ZodType<Prisma.DishScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DishScalarRelationFilter>;
export const DishScalarRelationFilterObjectZodSchema = makeSchema();
