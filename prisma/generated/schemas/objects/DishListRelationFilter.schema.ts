import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './DishWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DishWhereInputObjectSchema).optional(),
  some: z.lazy(() => DishWhereInputObjectSchema).optional(),
  none: z.lazy(() => DishWhereInputObjectSchema).optional()
}).strict();
export const DishListRelationFilterObjectSchema: z.ZodType<Prisma.DishListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DishListRelationFilter>;
export const DishListRelationFilterObjectZodSchema = makeSchema();
