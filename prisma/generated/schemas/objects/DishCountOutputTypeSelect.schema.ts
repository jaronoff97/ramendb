import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishCountOutputTypeCountTagsArgsObjectSchema as DishCountOutputTypeCountTagsArgsObjectSchema } from './DishCountOutputTypeCountTagsArgs.schema'

const makeSchema = () => z.object({
  tags: z.union([z.boolean(), z.lazy(() => DishCountOutputTypeCountTagsArgsObjectSchema)]).optional()
}).strict();
export const DishCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DishCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DishCountOutputTypeSelect>;
export const DishCountOutputTypeSelectObjectZodSchema = makeSchema();
