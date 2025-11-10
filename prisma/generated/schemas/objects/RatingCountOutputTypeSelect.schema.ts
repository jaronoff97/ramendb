import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCountOutputTypeCountReviewsArgsObjectSchema as RatingCountOutputTypeCountReviewsArgsObjectSchema } from './RatingCountOutputTypeCountReviewsArgs.schema';
import { RatingCountOutputTypeCountTagsArgsObjectSchema as RatingCountOutputTypeCountTagsArgsObjectSchema } from './RatingCountOutputTypeCountTagsArgs.schema';
import { RatingCountOutputTypeCountRatingPicturesArgsObjectSchema as RatingCountOutputTypeCountRatingPicturesArgsObjectSchema } from './RatingCountOutputTypeCountRatingPicturesArgs.schema'

const makeSchema = () => z.object({
  reviews: z.union([z.boolean(), z.lazy(() => RatingCountOutputTypeCountReviewsArgsObjectSchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => RatingCountOutputTypeCountTagsArgsObjectSchema)]).optional(),
  ratingPictures: z.union([z.boolean(), z.lazy(() => RatingCountOutputTypeCountRatingPicturesArgsObjectSchema)]).optional()
}).strict();
export const RatingCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.RatingCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.RatingCountOutputTypeSelect>;
export const RatingCountOutputTypeSelectObjectZodSchema = makeSchema();
