import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationArgsObjectSchema as LocationArgsObjectSchema } from './LocationArgs.schema';
import { DishTagFindManySchema as DishTagFindManySchema } from '../findManyDishTag.schema';
import { DishCountOutputTypeArgsObjectSchema as DishCountOutputTypeArgsObjectSchema } from './DishCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  locationId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  location: z.union([z.boolean(), z.lazy(() => LocationArgsObjectSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => DishTagFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DishCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DishSelectObjectSchema: z.ZodType<Prisma.DishSelect> = makeSchema() as unknown as z.ZodType<Prisma.DishSelect>;
export const DishSelectObjectZodSchema = makeSchema();
