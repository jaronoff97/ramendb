import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateNestedOneWithoutTagsInputObjectSchema as LocationCreateNestedOneWithoutTagsInputObjectSchema } from './LocationCreateNestedOneWithoutTagsInput.schema'

const makeSchema = () => z.object({
  location: z.lazy(() => LocationCreateNestedOneWithoutTagsInputObjectSchema)
}).strict();
export const LocationTagCreateWithoutTagInputObjectSchema: z.ZodType<Prisma.LocationTagCreateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCreateWithoutTagInput>;
export const LocationTagCreateWithoutTagInputObjectZodSchema = makeSchema();
