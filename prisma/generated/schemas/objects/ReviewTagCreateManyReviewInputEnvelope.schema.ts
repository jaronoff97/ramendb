import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagCreateManyReviewInputObjectSchema as ReviewTagCreateManyReviewInputObjectSchema } from './ReviewTagCreateManyReviewInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReviewTagCreateManyReviewInputObjectSchema), z.lazy(() => ReviewTagCreateManyReviewInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReviewTagCreateManyReviewInputEnvelopeObjectSchema: z.ZodType<Prisma.ReviewTagCreateManyReviewInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCreateManyReviewInputEnvelope>;
export const ReviewTagCreateManyReviewInputEnvelopeObjectZodSchema = makeSchema();
