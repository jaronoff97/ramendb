import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './LocationTagUncheckedCreateNestedManyWithoutTagInput.schema';
import { DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './DishTagUncheckedCreateNestedManyWithoutTagInput.schema';
import { RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './RatingTagUncheckedCreateNestedManyWithoutTagInput.schema';
import { ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './ReviewTagUncheckedCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  locations: z.lazy(() => LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema),
  dishes: z.lazy(() => DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema),
  ratings: z.lazy(() => RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema),
  reviews: z.lazy(() => ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema)
}).strict();
export const TagUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateInput>;
export const TagUncheckedCreateInputObjectZodSchema = makeSchema();
