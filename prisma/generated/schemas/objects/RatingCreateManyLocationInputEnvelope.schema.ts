import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateManyLocationInputObjectSchema as RatingCreateManyLocationInputObjectSchema } from './RatingCreateManyLocationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RatingCreateManyLocationInputObjectSchema), z.lazy(() => RatingCreateManyLocationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RatingCreateManyLocationInputEnvelopeObjectSchema: z.ZodType<Prisma.RatingCreateManyLocationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateManyLocationInputEnvelope>;
export const RatingCreateManyLocationInputEnvelopeObjectZodSchema = makeSchema();
