import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './LocationTagUncheckedCreateNestedManyWithoutTagInput.schema';
import { DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './DishTagUncheckedCreateNestedManyWithoutTagInput.schema';
import { RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './RatingTagUncheckedCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  locations: z.lazy(() => LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
  dishes: z.lazy(() => DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional()
}).strict();
export const TagUncheckedCreateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateWithoutReviewsInput>;
export const TagUncheckedCreateWithoutReviewsInputObjectZodSchema = makeSchema();
