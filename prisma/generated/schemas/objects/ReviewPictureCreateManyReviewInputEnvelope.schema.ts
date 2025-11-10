import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewPictureCreateManyReviewInputObjectSchema as ReviewPictureCreateManyReviewInputObjectSchema } from './ReviewPictureCreateManyReviewInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReviewPictureCreateManyReviewInputObjectSchema), z.lazy(() => ReviewPictureCreateManyReviewInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReviewPictureCreateManyReviewInputEnvelopeObjectSchema: z.ZodType<Prisma.ReviewPictureCreateManyReviewInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureCreateManyReviewInputEnvelope>;
export const ReviewPictureCreateManyReviewInputEnvelopeObjectZodSchema = makeSchema();
