import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationPictureCreateManyLocationInputObjectSchema as LocationPictureCreateManyLocationInputObjectSchema } from './LocationPictureCreateManyLocationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => LocationPictureCreateManyLocationInputObjectSchema), z.lazy(() => LocationPictureCreateManyLocationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const LocationPictureCreateManyLocationInputEnvelopeObjectSchema: z.ZodType<Prisma.LocationPictureCreateManyLocationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureCreateManyLocationInputEnvelope>;
export const LocationPictureCreateManyLocationInputEnvelopeObjectZodSchema = makeSchema();
