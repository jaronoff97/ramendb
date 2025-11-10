import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DishUncheckedCreateNestedManyWithoutLocationInputObjectSchema as DishUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './DishUncheckedCreateNestedManyWithoutLocationInput.schema';
import { RatingUncheckedCreateNestedManyWithoutLocationInputObjectSchema as RatingUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './RatingUncheckedCreateNestedManyWithoutLocationInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutLocationInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutLocationInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutLocationInput.schema';
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
  dishes: z.lazy(() => DishUncheckedCreateNestedManyWithoutLocationInputObjectSchema),
  ratings: z.lazy(() => RatingUncheckedCreateNestedManyWithoutLocationInputObjectSchema),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutLocationInputObjectSchema),
  tags: z.lazy(() => LocationTagUncheckedCreateNestedManyWithoutLocationInputObjectSchema),
  pictures: z.lazy(() => LocationPictureUncheckedCreateNestedManyWithoutLocationInputObjectSchema)
}).strict();
export const LocationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.LocationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUncheckedCreateInput>;
export const LocationUncheckedCreateInputObjectZodSchema = makeSchema();
