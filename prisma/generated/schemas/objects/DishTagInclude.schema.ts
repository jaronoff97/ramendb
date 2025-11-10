import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishArgsObjectSchema as DishArgsObjectSchema } from './DishArgs.schema';
import { TagArgsObjectSchema as TagArgsObjectSchema } from './TagArgs.schema'

const makeSchema = () => z.object({
  dish: z.union([z.boolean(), z.lazy(() => DishArgsObjectSchema)]).optional(),
  tag: z.union([z.boolean(), z.lazy(() => TagArgsObjectSchema)]).optional()
}).strict();
export const DishTagIncludeObjectSchema: z.ZodType<Prisma.DishTagInclude> = makeSchema() as unknown as z.ZodType<Prisma.DishTagInclude>;
export const DishTagIncludeObjectZodSchema = makeSchema();
