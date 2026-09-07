import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DishFindManySchema as DishFindManySchema } from '../findManyDish.schema';
import { RatingFindManySchema as RatingFindManySchema } from '../findManyRating.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { LocationTagFindManySchema as LocationTagFindManySchema } from '../findManyLocationTag.schema';
import { LocationPictureFindManySchema as LocationPictureFindManySchema } from '../findManyLocationPicture.schema';
import { LocationCountOutputTypeArgsObjectSchema as LocationCountOutputTypeArgsObjectSchema } from './LocationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  osmId: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  country: z.boolean().optional(),
  latitude: z.boolean().optional(),
  longitude: z.boolean().optional(),
  website: z.boolean().optional(),
  hours: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  dishes: z.union([z.boolean(), z.lazy(() => DishFindManySchema)]).optional(),
  ratings: z.union([z.boolean(), z.lazy(() => RatingFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => LocationTagFindManySchema)]).optional(),
  pictures: z.union([z.boolean(), z.lazy(() => LocationPictureFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => LocationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const LocationSelectObjectSchema: z.ZodType<Prisma.LocationSelect> = makeSchema() as unknown as z.ZodType<Prisma.LocationSelect>;
export const LocationSelectObjectZodSchema = makeSchema();
