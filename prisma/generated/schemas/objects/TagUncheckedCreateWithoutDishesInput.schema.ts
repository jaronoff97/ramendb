import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './LocationTagUncheckedCreateNestedManyWithoutTagInput.schema';
import { RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './RatingTagUncheckedCreateNestedManyWithoutTagInput.schema';
import { ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './ReviewTagUncheckedCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  locations: z.lazy(() => LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional()
}).strict();
export const TagUncheckedCreateWithoutDishesInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutDishesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateWithoutDishesInput>;
export const TagUncheckedCreateWithoutDishesInputObjectZodSchema = makeSchema();
