import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishTagCreateNestedManyWithoutTagInputObjectSchema as DishTagCreateNestedManyWithoutTagInputObjectSchema } from './DishTagCreateNestedManyWithoutTagInput.schema';
import { RatingTagCreateNestedManyWithoutTagInputObjectSchema as RatingTagCreateNestedManyWithoutTagInputObjectSchema } from './RatingTagCreateNestedManyWithoutTagInput.schema';
import { ReviewTagCreateNestedManyWithoutTagInputObjectSchema as ReviewTagCreateNestedManyWithoutTagInputObjectSchema } from './ReviewTagCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  dishes: z.lazy(() => DishTagCreateNestedManyWithoutTagInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingTagCreateNestedManyWithoutTagInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewTagCreateNestedManyWithoutTagInputObjectSchema).optional()
}).strict();
export const TagCreateWithoutLocationsInputObjectSchema: z.ZodType<Prisma.TagCreateWithoutLocationsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateWithoutLocationsInput>;
export const TagCreateWithoutLocationsInputObjectZodSchema = makeSchema();
