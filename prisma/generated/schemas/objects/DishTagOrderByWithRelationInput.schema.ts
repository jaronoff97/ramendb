import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DishOrderByWithRelationInputObjectSchema as DishOrderByWithRelationInputObjectSchema } from './DishOrderByWithRelationInput.schema';
import { TagOrderByWithRelationInputObjectSchema as TagOrderByWithRelationInputObjectSchema } from './TagOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  dishId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  dish: z.lazy(() => DishOrderByWithRelationInputObjectSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DishTagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DishTagOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DishTagOrderByWithRelationInput>;
export const DishTagOrderByWithRelationInputObjectZodSchema = makeSchema();
