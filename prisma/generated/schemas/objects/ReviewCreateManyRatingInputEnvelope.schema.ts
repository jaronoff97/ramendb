import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateManyRatingInputObjectSchema as ReviewCreateManyRatingInputObjectSchema } from './ReviewCreateManyRatingInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReviewCreateManyRatingInputObjectSchema), z.lazy(() => ReviewCreateManyRatingInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReviewCreateManyRatingInputEnvelopeObjectSchema: z.ZodType<Prisma.ReviewCreateManyRatingInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyRatingInputEnvelope>;
export const ReviewCreateManyRatingInputEnvelopeObjectZodSchema = makeSchema();
