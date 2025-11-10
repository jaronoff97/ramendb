import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateNestedOneWithoutTagsInputObjectSchema as RatingCreateNestedOneWithoutTagsInputObjectSchema } from './RatingCreateNestedOneWithoutTagsInput.schema';
import { TagCreateNestedOneWithoutRatingsInputObjectSchema as TagCreateNestedOneWithoutRatingsInputObjectSchema } from './TagCreateNestedOneWithoutRatingsInput.schema'

const makeSchema = () => z.object({
  rating: z.lazy(() => RatingCreateNestedOneWithoutTagsInputObjectSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutRatingsInputObjectSchema)
}).strict();
export const RatingTagCreateInputObjectSchema: z.ZodType<Prisma.RatingTagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCreateInput>;
export const RatingTagCreateInputObjectZodSchema = makeSchema();
