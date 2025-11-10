import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateNestedOneWithoutTagsInputObjectSchema as RatingCreateNestedOneWithoutTagsInputObjectSchema } from './RatingCreateNestedOneWithoutTagsInput.schema'

const makeSchema = () => z.object({
  rating: z.lazy(() => RatingCreateNestedOneWithoutTagsInputObjectSchema)
}).strict();
export const RatingTagCreateWithoutTagInputObjectSchema: z.ZodType<Prisma.RatingTagCreateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCreateWithoutTagInput>;
export const RatingTagCreateWithoutTagInputObjectZodSchema = makeSchema();
