import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LocationOrderByWithRelationInputObjectSchema as LocationOrderByWithRelationInputObjectSchema } from './LocationOrderByWithRelationInput.schema';
import { TagOrderByWithRelationInputObjectSchema as TagOrderByWithRelationInputObjectSchema } from './TagOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  locationId: SortOrderSchema.optional(),
  tagId: SortOrderSchema.optional(),
  location: z.lazy(() => LocationOrderByWithRelationInputObjectSchema).optional(),
  tag: z.lazy(() => TagOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const LocationTagOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LocationTagOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagOrderByWithRelationInput>;
export const LocationTagOrderByWithRelationInputObjectZodSchema = makeSchema();
