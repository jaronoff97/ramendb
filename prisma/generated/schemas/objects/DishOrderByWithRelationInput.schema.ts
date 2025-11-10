import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LocationOrderByWithRelationInputObjectSchema as LocationOrderByWithRelationInputObjectSchema } from './LocationOrderByWithRelationInput.schema';
import { DishTagOrderByRelationAggregateInputObjectSchema as DishTagOrderByRelationAggregateInputObjectSchema } from './DishTagOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  price: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  location: z.lazy(() => LocationOrderByWithRelationInputObjectSchema).optional(),
  tags: z.lazy(() => DishTagOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DishOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DishOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DishOrderByWithRelationInput>;
export const DishOrderByWithRelationInputObjectZodSchema = makeSchema();
