import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishArgsObjectSchema as DishArgsObjectSchema } from './DishArgs.schema';
import { TagArgsObjectSchema as TagArgsObjectSchema } from './TagArgs.schema'

const makeSchema = () => z.object({
  dishId: z.boolean().optional(),
  tagId: z.boolean().optional(),
  dish: z.union([z.boolean(), z.lazy(() => DishArgsObjectSchema)]).optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional()
}).strict();
export const DishTagSelectObjectSchema: z.ZodType<Prisma.DishTagSelect> = makeSchema() as unknown as z.ZodType<Prisma.DishTagSelect>;
export const DishTagSelectObjectZodSchema = makeSchema();
