import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DishUncheckedCreateNestedManyWithoutLocationInputObjectSchema as DishUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './DishUncheckedCreateNestedManyWithoutLocationInput.schema';
import { RatingUncheckedCreateNestedManyWithoutLocationInputObjectSchema as RatingUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './RatingUncheckedCreateNestedManyWithoutLocationInput.schema';
import { LocationTagUncheckedCreateNestedManyWithoutLocationInputObjectSchema as LocationTagUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './LocationTagUncheckedCreateNestedManyWithoutLocationInput.schema';
import { LocationPictureUncheckedCreateNestedManyWithoutLocationInputObjectSchema as LocationPictureUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './LocationPictureUncheckedCreateNestedManyWithoutLocationInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  slug: z.string(),
  name: z.string(),
  type: z.string(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  latitude: z.number().optional().nullable(),
  longitude: z.number().optional().nullable(),
  website: z.string().optional().nullable(),
  hours: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  dishes: z.lazy(() => DishUncheckedCreateNestedManyWithoutLocationInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingUncheckedCreateNestedManyWithoutLocationInputObjectSchema).optional(),
  tags: z.lazy(() => LocationTagUncheckedCreateNestedManyWithoutLocationInputObjectSchema).optional(),
  pictures: z.lazy(() => LocationPictureUncheckedCreateNestedManyWithoutLocationInputObjectSchema).optional()
}).strict();
export const LocationUncheckedCreateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.LocationUncheckedCreateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUncheckedCreateWithoutReviewsInput>;
export const LocationUncheckedCreateWithoutReviewsInputObjectZodSchema = makeSchema();
