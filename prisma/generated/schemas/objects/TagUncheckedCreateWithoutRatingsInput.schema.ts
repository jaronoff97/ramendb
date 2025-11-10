import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './LocationTagUncheckedCreateNestedManyWithoutTagInput.schema';
import { DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './DishTagUncheckedCreateNestedManyWithoutTagInput.schema';
import { ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema as ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema } from './ReviewTagUncheckedCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  locations: z.lazy(() => LocationTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
  dishes: z.lazy(() => DishTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewTagUncheckedCreateNestedManyWithoutTagInputObjectSchema).optional()
}).strict();
export const TagUncheckedCreateWithoutRatingsInputObjectSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUncheckedCreateWithoutRatingsInput>;
export const TagUncheckedCreateWithoutRatingsInputObjectZodSchema = makeSchema();
