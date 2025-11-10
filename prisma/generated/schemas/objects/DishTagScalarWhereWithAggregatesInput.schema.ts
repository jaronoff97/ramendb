import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const dishtagscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DishTagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DishTagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DishTagScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DishTagScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DishTagScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  dishId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const DishTagScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DishTagScalarWhereWithAggregatesInput> = dishtagscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DishTagScalarWhereWithAggregatesInput>;
export const DishTagScalarWhereWithAggregatesInputObjectZodSchema = dishtagscalarwherewithaggregatesinputSchema;
