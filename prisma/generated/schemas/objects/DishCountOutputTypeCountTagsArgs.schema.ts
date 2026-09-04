import * as z from 'zod';
import { DishTagWhereInputObjectSchema as DishTagWhereInputObjectSchema } from './DishTagWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishTagWhereInputObjectSchema).optional()
}).strict();
export const DishCountOutputTypeCountTagsArgsObjectSchema = makeSchema();
export const DishCountOutputTypeCountTagsArgsObjectZodSchema = makeSchema();
