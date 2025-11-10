import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagCreateManyRatingInputObjectSchema as RatingTagCreateManyRatingInputObjectSchema } from './RatingTagCreateManyRatingInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RatingTagCreateManyRatingInputObjectSchema), z.lazy(() => RatingTagCreateManyRatingInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RatingTagCreateManyRatingInputEnvelopeObjectSchema: z.ZodType<Prisma.RatingTagCreateManyRatingInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCreateManyRatingInputEnvelope>;
export const RatingTagCreateManyRatingInputEnvelopeObjectZodSchema = makeSchema();
