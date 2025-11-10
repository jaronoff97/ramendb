import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagUpdateOneRequiredWithoutLocationsNestedInputObjectSchema as TagUpdateOneRequiredWithoutLocationsNestedInputObjectSchema } from './TagUpdateOneRequiredWithoutLocationsNestedInput.schema'

const makeSchema = () => z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutLocationsNestedInputObjectSchema).optional()
}).strict();
export const LocationTagUpdateWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationTagUpdateWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUpdateWithoutLocationInput>;
export const LocationTagUpdateWithoutLocationInputObjectZodSchema = makeSchema();
