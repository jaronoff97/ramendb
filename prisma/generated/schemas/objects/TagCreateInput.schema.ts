import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagCreateNestedManyWithoutTagInputObjectSchema as LocationTagCreateNestedManyWithoutTagInputObjectSchema } from './LocationTagCreateNestedManyWithoutTagInput.schema';
import { DishTagCreateNestedManyWithoutTagInputObjectSchema as DishTagCreateNestedManyWithoutTagInputObjectSchema } from './DishTagCreateNestedManyWithoutTagInput.schema';
import { RatingTagCreateNestedManyWithoutTagInputObjectSchema as RatingTagCreateNestedManyWithoutTagInputObjectSchema } from './RatingTagCreateNestedManyWithoutTagInput.schema';
import { ReviewTagCreateNestedManyWithoutTagInputObjectSchema as ReviewTagCreateNestedManyWithoutTagInputObjectSchema } from './ReviewTagCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  locations: z.lazy(() => LocationTagCreateNestedManyWithoutTagInputObjectSchema),
  dishes: z.lazy(() => DishTagCreateNestedManyWithoutTagInputObjectSchema),
  ratings: z.lazy(() => RatingTagCreateNestedManyWithoutTagInputObjectSchema),
  reviews: z.lazy(() => ReviewTagCreateNestedManyWithoutTagInputObjectSchema)
}).strict();
export const TagCreateInputObjectSchema: z.ZodType<Prisma.TagCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateInput>;
export const TagCreateInputObjectZodSchema = makeSchema();
