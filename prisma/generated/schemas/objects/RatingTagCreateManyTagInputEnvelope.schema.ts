import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagCreateManyTagInputObjectSchema as RatingTagCreateManyTagInputObjectSchema } from './RatingTagCreateManyTagInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => RatingTagCreateManyTagInputObjectSchema), z.lazy(() => RatingTagCreateManyTagInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const RatingTagCreateManyTagInputEnvelopeObjectSchema: z.ZodType<Prisma.RatingTagCreateManyTagInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCreateManyTagInputEnvelope>;
export const RatingTagCreateManyTagInputEnvelopeObjectZodSchema = makeSchema();
