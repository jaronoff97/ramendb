import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagSelectObjectSchema as DishTagSelectObjectSchema } from './DishTagSelect.schema';
import { DishTagIncludeObjectSchema as DishTagIncludeObjectSchema } from './DishTagInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DishTagSelectObjectSchema).optional(),
  include: z.lazy(() => DishTagIncludeObjectSchema).optional()
}).strict();
export const DishTagArgsObjectSchema = makeSchema();
export const DishTagArgsObjectZodSchema = makeSchema();
