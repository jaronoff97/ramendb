import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagCreateNestedManyWithoutTagInputObjectSchema as LocationTagCreateNestedManyWithoutTagInputObjectSchema } from './LocationTagCreateNestedManyWithoutTagInput.schema';
import { RatingTagCreateNestedManyWithoutTagInputObjectSchema as RatingTagCreateNestedManyWithoutTagInputObjectSchema } from './RatingTagCreateNestedManyWithoutTagInput.schema';
import { ReviewTagCreateNestedManyWithoutTagInputObjectSchema as ReviewTagCreateNestedManyWithoutTagInputObjectSchema } from './ReviewTagCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  locations: z.lazy(() => LocationTagCreateNestedManyWithoutTagInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingTagCreateNestedManyWithoutTagInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewTagCreateNestedManyWithoutTagInputObjectSchema).optional()
}).strict();
export const TagCreateWithoutDishesInputObjectSchema: z.ZodType<Prisma.TagCreateWithoutDishesInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateWithoutDishesInput>;
export const TagCreateWithoutDishesInputObjectZodSchema = makeSchema();
