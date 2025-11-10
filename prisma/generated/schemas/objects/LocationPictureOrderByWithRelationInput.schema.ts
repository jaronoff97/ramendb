import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LocationOrderByWithRelationInputObjectSchema as LocationOrderByWithRelationInputObjectSchema } from './LocationOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  locationId: SortOrderSchema.optional(),
  url: SortOrderSchema.optional(),
  caption: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  location: z.lazy(() => LocationOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const LocationPictureOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.LocationPictureOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureOrderByWithRelationInput>;
export const LocationPictureOrderByWithRelationInputObjectZodSchema = makeSchema();
