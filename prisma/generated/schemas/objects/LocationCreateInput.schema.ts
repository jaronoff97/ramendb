import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DishCreateNestedManyWithoutLocationInputObjectSchema as DishCreateNestedManyWithoutLocationInputObjectSchema } from './DishCreateNestedManyWithoutLocationInput.schema';
import { RatingCreateNestedManyWithoutLocationInputObjectSchema as RatingCreateNestedManyWithoutLocationInputObjectSchema } from './RatingCreateNestedManyWithoutLocationInput.schema';
import { ReviewCreateNestedManyWithoutLocationInputObjectSchema as ReviewCreateNestedManyWithoutLocationInputObjectSchema } from './ReviewCreateNestedManyWithoutLocationInput.schema';
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
  dishes: z.lazy(() => DishCreateNestedManyWithoutLocationInputObjectSchema),
  ratings: z.lazy(() => RatingCreateNestedManyWithoutLocationInputObjectSchema),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutLocationInputObjectSchema),
  tags: z.lazy(() => LocationTagCreateNestedManyWithoutLocationInputObjectSchema),
  pictures: z.lazy(() => LocationPictureCreateNestedManyWithoutLocationInputObjectSchema)
}).strict();
export const LocationCreateInputObjectSchema: z.ZodType<Prisma.LocationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateInput>;
export const LocationCreateInputObjectZodSchema = makeSchema();
