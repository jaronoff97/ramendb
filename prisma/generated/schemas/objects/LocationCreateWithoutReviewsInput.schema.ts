import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DishCreateNestedManyWithoutLocationInputObjectSchema as DishCreateNestedManyWithoutLocationInputObjectSchema } from './DishCreateNestedManyWithoutLocationInput.schema';
import { RatingCreateNestedManyWithoutLocationInputObjectSchema as RatingCreateNestedManyWithoutLocationInputObjectSchema } from './RatingCreateNestedManyWithoutLocationInput.schema';
import { LocationTagCreateNestedManyWithoutLocationInputObjectSchema as LocationTagCreateNestedManyWithoutLocationInputObjectSchema } from './LocationTagCreateNestedManyWithoutLocationInput.schema';
import { LocationPictureCreateNestedManyWithoutLocationInputObjectSchema as LocationPictureCreateNestedManyWithoutLocationInputObjectSchema } from './LocationPictureCreateNestedManyWithoutLocationInput.schema'

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
  dishes: z.lazy(() => DishCreateNestedManyWithoutLocationInputObjectSchema).optional(),
  ratings: z.lazy(() => RatingCreateNestedManyWithoutLocationInputObjectSchema).optional(),
  tags: z.lazy(() => LocationTagCreateNestedManyWithoutLocationInputObjectSchema).optional(),
  pictures: z.lazy(() => LocationPictureCreateNestedManyWithoutLocationInputObjectSchema).optional()
}).strict();
export const LocationCreateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.LocationCreateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateWithoutReviewsInput>;
export const LocationCreateWithoutReviewsInputObjectZodSchema = makeSchema();
