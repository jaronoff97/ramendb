import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateNestedOneWithoutTagsInputObjectSchema as LocationCreateNestedOneWithoutTagsInputObjectSchema } from './LocationCreateNestedOneWithoutTagsInput.schema';
import { TagCreateNestedOneWithoutLocationsInputObjectSchema as TagCreateNestedOneWithoutLocationsInputObjectSchema } from './TagCreateNestedOneWithoutLocationsInput.schema'

const makeSchema = () => z.object({
  location: z.lazy(() => LocationCreateNestedOneWithoutTagsInputObjectSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutLocationsInputObjectSchema)
}).strict();
export const LocationTagCreateInputObjectSchema: z.ZodType<Prisma.LocationTagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCreateInput>;
export const LocationTagCreateInputObjectZodSchema = makeSchema();
