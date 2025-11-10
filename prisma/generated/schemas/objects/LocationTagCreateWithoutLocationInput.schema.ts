import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateNestedOneWithoutLocationsInputObjectSchema as TagCreateNestedOneWithoutLocationsInputObjectSchema } from './TagCreateNestedOneWithoutLocationsInput.schema'

const makeSchema = () => z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutLocationsInputObjectSchema)
}).strict();
export const LocationTagCreateWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationTagCreateWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCreateWithoutLocationInput>;
export const LocationTagCreateWithoutLocationInputObjectZodSchema = makeSchema();
