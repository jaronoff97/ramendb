import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagCreateNestedManyWithoutTagInputObjectSchema as LocationTagCreateNestedManyWithoutTagInputObjectSchema } from './LocationTagCreateNestedManyWithoutTagInput.schema';
import { DishTagCreateNestedManyWithoutTagInputObjectSchema as DishTagCreateNestedManyWithoutTagInputObjectSchema } from './DishTagCreateNestedManyWithoutTagInput.schema';
import { RatingTagCreateNestedManyWithoutTagInputObjectSchema as RatingTagCreateNestedManyWithoutTagInputObjectSchema } from './RatingTagCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  locations: z.lazy(() => LocationTagCreateNestedManyWithoutTagInputObjectSchema).optional(),
  dishes: z.lazy(() => DishTagCreateNestedManyWithoutTagInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingTagCreateNestedManyWithoutTagInputObjectSchema).optional()
}).strict();
export const TagCreateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.TagCreateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateWithoutReviewsInput>;
export const TagCreateWithoutReviewsInputObjectZodSchema = makeSchema();
