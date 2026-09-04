import * as z from 'zod';
import { DishCountOutputTypeSelectObjectSchema as DishCountOutputTypeSelectObjectSchema } from './DishCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DishCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const DishCountOutputTypeArgsObjectSchema = makeSchema();
export const DishCountOutputTypeArgsObjectZodSchema = makeSchema();
