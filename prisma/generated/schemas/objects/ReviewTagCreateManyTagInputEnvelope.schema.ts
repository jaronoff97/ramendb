import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagCreateManyTagInputObjectSchema as ReviewTagCreateManyTagInputObjectSchema } from './ReviewTagCreateManyTagInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ReviewTagCreateManyTagInputObjectSchema), z.lazy(() => ReviewTagCreateManyTagInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ReviewTagCreateManyTagInputEnvelopeObjectSchema: z.ZodType<Prisma.ReviewTagCreateManyTagInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCreateManyTagInputEnvelope>;
export const ReviewTagCreateManyTagInputEnvelopeObjectZodSchema = makeSchema();
