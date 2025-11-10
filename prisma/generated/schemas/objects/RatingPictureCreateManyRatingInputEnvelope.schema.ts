import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingPictureCreateManyRatingInputObjectSchema as RatingPictureCreateManyRatingInputObjectSchema } from './RatingPictureCreateManyRatingInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RatingPictureCreateManyRatingInputObjectSchema), z.lazy(() => RatingPictureCreateManyRatingInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RatingPictureCreateManyRatingInputEnvelopeObjectSchema: z.ZodType<Prisma.RatingPictureCreateManyRatingInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureCreateManyRatingInputEnvelope>;
export const RatingPictureCreateManyRatingInputEnvelopeObjectZodSchema = makeSchema();
