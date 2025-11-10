import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateManyLocationInputObjectSchema as ReviewCreateManyLocationInputObjectSchema } from './ReviewCreateManyLocationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReviewCreateManyLocationInputObjectSchema), z.lazy(() => ReviewCreateManyLocationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReviewCreateManyLocationInputEnvelopeObjectSchema: z.ZodType<Prisma.ReviewCreateManyLocationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyLocationInputEnvelope>;
export const ReviewCreateManyLocationInputEnvelopeObjectZodSchema = makeSchema();
