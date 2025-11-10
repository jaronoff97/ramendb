import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateNestedOneWithoutRatingsInputObjectSchema as TagCreateNestedOneWithoutRatingsInputObjectSchema } from './TagCreateNestedOneWithoutRatingsInput.schema'

const makeSchema = () => z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutRatingsInputObjectSchema)
}).strict();
export const RatingTagCreateWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingTagCreateWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCreateWithoutRatingInput>;
export const RatingTagCreateWithoutRatingInputObjectZodSchema = makeSchema();
