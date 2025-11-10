import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagCreateManyTagInputObjectSchema as LocationTagCreateManyTagInputObjectSchema } from './LocationTagCreateManyTagInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => LocationTagCreateManyTagInputObjectSchema), z.lazy(() => LocationTagCreateManyTagInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const LocationTagCreateManyTagInputEnvelopeObjectSchema: z.ZodType<Prisma.LocationTagCreateManyTagInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCreateManyTagInputEnvelope>;
export const LocationTagCreateManyTagInputEnvelopeObjectZodSchema = makeSchema();
