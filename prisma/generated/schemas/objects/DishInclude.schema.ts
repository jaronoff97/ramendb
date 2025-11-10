import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationArgsObjectSchema as LocationArgsObjectSchema } from './LocationArgs.schema';
import { DishTagFindManySchema as DishTagFindManySchema } from '../findManyDishTag.schema';
import { DishCountOutputTypeArgsObjectSchema as DishCountOutputTypeArgsObjectSchema } from './DishCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  location: z.union([z.boolean(), z.lazy(() => LocationArgsObjectSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => DishTagFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DishCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DishIncludeObjectSchema: z.ZodType<Prisma.DishInclude> = makeSchema() as unknown as z.ZodType<Prisma.DishInclude>;
export const DishIncludeObjectZodSchema = makeSchema();
