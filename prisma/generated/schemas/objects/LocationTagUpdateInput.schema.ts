import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationUpdateOneRequiredWithoutTagsNestedInputObjectSchema as LocationUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutTagsNestedInput.schema';
import { TagUpdateOneRequiredWithoutLocationsNestedInputObjectSchema as TagUpdateOneRequiredWithoutLocationsNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutLocationsNestedInput.schema'

const makeSchema = () => z.object({
  location: z.lazy(() => LocationUpdateOneRequiredWithoutTagsNestedInputObjectSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutLocationsNestedInputObjectSchema).optional()
}).strict();
export const LocationTagUpdateInputObjectSchema: z.ZodType<Prisma.LocationTagUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUpdateInput>;
export const LocationTagUpdateInputObjectZodSchema = makeSchema();
