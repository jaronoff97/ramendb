import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './DishTagUncheckedCreateNestedManyWithoutTagInput.schema';
import { RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './RatingTagUncheckedCreateNestedManyWithoutTagInput.schema';
import { ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './ReviewTagUncheckedCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  dishes: z.lazy(() => DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional()
}).strict();
export const TagUncheckedCreateWithoutLocationsInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutLocationsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateWithoutLocationsInput>;
export const TagUncheckedCreateWithoutLocationsInputObjectZodSchema = makeSchema();
