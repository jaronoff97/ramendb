import * as z from 'zod';
import { DishWhereInputObjectSchema as DishWhereInputObjectSchema } from './DishWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DishWhereInputObjectSchema).optional()
}).strict();
export const LocationCountOutputTypeCountDishesArgsObjectSchema = makeSchema();
export const LocationCountOutputTypeCountDishesArgsObjectZodSchema = makeSchema();
