import * as z from 'zod';
import { DishSelectObjectSchema as DishSelectObjectSchema } from './DishSelect.schema';
import { DishIncludeObjectSchema as DishIncludeObjectSchema } from './DishInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DishSelectObjectSchema).optional(),
  include: z.lazy(() => DishIncludeObjectSchema).optional()
}).strict();
export const DishArgsObjectSchema = makeSchema();
export const DishArgsObjectZodSchema = makeSchema();
