import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationUpdateOneRequiredWithoutTagsNestedInputObjectSchema as LocationUpdateOneRequiredWithoutTagsNestedInputObjectSchema } from './LocationUpdateOneRequiredWithoutTagsNestedInput.schema'

const makeSchema = () => z.object({
  location: z.lazy(() => LocationUpdateOneRequiredWithoutTagsNestedInputObjectSchema).optional()
}).strict();
export const LocationTagUpdateWithoutTagInputObjectSchema: z.ZodType<Prisma.LocationTagUpdateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUpdateWithoutTagInput>;
export const LocationTagUpdateWithoutTagInputObjectZodSchema = makeSchema();
