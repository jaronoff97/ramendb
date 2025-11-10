import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCountOutputTypeCountDishesArgsObjectSchema as LocationCountOutputTypeCountDishesArgsObjectSchema } from './LocationCountOutputTypeCountDishesArgs.schema';
import { LocationCountOutputTypeCountRatingsArgsObjectSchema as LocationCountOutputTypeCountRatingsArgsObjectSchema } from './LocationCountOutputTypeCountRatingsArgs.schema';
import { LocationCountOutputTypeCountReviewsArgsObjectSchema as LocationCountOutputTypeCountReviewsArgsObjectSchema } from './LocationCountOutputTypeCountReviewsArgs.schema';
import { LocationCountOutputTypeCountTagsArgsObjectSchema as LocationCountOutputTypeCountTagsArgsObjectSchema } from './LocationCountOutputTypeCountTagsArgs.schema';
import { LocationCountOutputTypeCountPicturesArgsObjectSchema as LocationCountOutputTypeCountPicturesArgsObjectSchema } from './LocationCountOutputTypeCountPicturesArgs.schema'

const makeSchema = () => z.object({
  dishes: z.union([z.boolean(), z.lazy(() => LocationCountOutputTypeCountDishesArgsObjectSchema)]).optional(),
  ratings: z.union([z.boolean(), z.lazy(() => LocationCountOutputTypeCountRatingsArgsObjectSchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => LocationCountOutputTypeCountReviewsArgsObjectSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => LocationCountOutputTypeCountTagsArgsObjectSchema)]).optional(),
  pictures: z.union([z.boolean(), z.lazy(() => LocationCountOutputTypeCountPicturesArgsObjectSchema)]).optional()
}).strict();
export const LocationCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.LocationCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.LocationCountOutputTypeSelect>;
export const LocationCountOutputTypeSelectObjectZodSchema = makeSchema();
