import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateManyUserInputObjectSchema as RatingCreateManyUserInputObjectSchema } from './RatingCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RatingCreateManyUserInputObjectSchema), z.lazy(() => RatingCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RatingCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.RatingCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateManyUserInputEnvelope>;
export const RatingCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
