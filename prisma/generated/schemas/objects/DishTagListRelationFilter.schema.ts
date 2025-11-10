import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagWhereInputObjectSchema as DishTagWhereInputObjectSchema } from './DishTagWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DishTagWhereInputObjectSchema).optional(),
  some: z.lazy(() => DishTagWhereInputObjectSchema).optional(),
  none: z.lazy(() => DishTagWhereInputObjectSchema).optional()
}).strict();
export const DishTagListRelationFilterObjectSchema: z.ZodType<Prisma.DishTagListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DishTagListRelationFilter>;
export const DishTagListRelationFilterObjectZodSchema = makeSchema();
