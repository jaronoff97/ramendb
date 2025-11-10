import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateManyUserInputObjectSchema as ReviewCreateManyUserInputObjectSchema } from './ReviewCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReviewCreateManyUserInputObjectSchema), z.lazy(() => ReviewCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReviewCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ReviewCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateManyUserInputEnvelope>;
export const ReviewCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
