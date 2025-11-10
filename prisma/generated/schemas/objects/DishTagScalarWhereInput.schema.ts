import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const dishtagscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DishTagScalarWhereInputObjectSchema), z.lazy(() => DishTagScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DishTagScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DishTagScalarWhereInputObjectSchema), z.lazy(() => DishTagScalarWhereInputObjectSchema).array()]).optional(),
  dishId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tagId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const DishTagScalarWhereInputObjectSchema: z.ZodType<Prisma.DishTagScalarWhereInput> = dishtagscalarwhereinputSchema as unknown as z.ZodType<Prisma.DishTagScalarWhereInput>;
export const DishTagScalarWhereInputObjectZodSchema = dishtagscalarwhereinputSchema;
