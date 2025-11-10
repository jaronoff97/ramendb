import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DishScalarRelationFilterObjectSchema as DishScalarRelationFilterObjectSchema } from './DishScalarRelationFilter.schema';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './DishWhereInput.schema';
import { TagScalarRelationFilterObjectSchema as TagScalarRelationFilterObjectSchema } from './TagScalarRelationFilter.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const dishtagwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DishTagWhereInputObjectSchema), z.lazy(() => DishTagWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DishTagWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DishTagWhereInputObjectSchema), z.lazy(() => DishTagWhereInputObjectSchema).array()]).optional(),
  dishId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dish: z.union([z.lazy(() => DishScalarRelationFilterObjectSchema), z.lazy(() => DishWhereInputObjectSchema)]).optional(),
  tag: z.union([z.lazy(() => TagScalarRelationFilterObjectSchema), z.lazy(() => TagWhereInputObjectSchema)]).optional()
}).strict();
export const DishTagWhereInputObjectSchema: z.ZodType<Prisma.DishTagWhereInput> = dishtagwhereinputSchema as unknown as z.ZodType<Prisma.DishTagWhereInput>;
export const DishTagWhereInputObjectZodSchema = dishtagwhereinputSchema;
