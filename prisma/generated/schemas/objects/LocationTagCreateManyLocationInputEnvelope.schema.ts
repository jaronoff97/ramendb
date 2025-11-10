import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagCreateManyLocationInputObjectSchema as LocationTagCreateManyLocationInputObjectSchema } from './LocationTagCreateManyLocationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => LocationTagCreateManyLocationInputObjectSchema), z.lazy(() => LocationTagCreateManyLocationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const LocationTagCreateManyLocationInputEnvelopeObjectSchema: z.ZodType<Prisma.LocationTagCreateManyLocationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCreateManyLocationInputEnvelope>;
export const LocationTagCreateManyLocationInputEnvelopeObjectZodSchema = makeSchema();
