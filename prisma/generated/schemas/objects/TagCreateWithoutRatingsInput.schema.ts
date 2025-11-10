import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagCreateNestedManyWithoutTagInputObjectSchema as LocationTagCreateNestedManyWithoutTagInputObjectSchema } from './LocationTagCreateNestedManyWithoutTagInput.schema';
import { DishTagCreateNestedManyWithoutTagInputObjectSchema as DishTagCreateNestedManyWithoutTagInputObjectSchema } from './DishTagCreateNestedManyWithoutTagInput.schema';
import { ReviewTagCreateNestedManyWithoutTagInputObjectSchema as ReviewTagCreateNestedManyWithoutTagInputObjectSchema } from './ReviewTagCreateNestedManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  locations: z.lazy(() => LocationTagCreateNestedManyWithoutTagInputObjectSchema).optional(),
  dishes: z.lazy(() => DishTagCreateNestedManyWithoutTagInputObjectSchema).optional(),
  reviews: z.lazy(() => ReviewTagCreateNestedManyWithoutTagInputObjectSchema).optional()
}).strict();
export const TagCreateWithoutRatingsInputObjectSchema: z.ZodType<Prisma.TagCreateWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateWithoutRatingsInput>;
export const TagCreateWithoutRatingsInputObjectZodSchema = makeSchema();
