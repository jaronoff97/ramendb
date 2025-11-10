import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCountOutputTypeCountLocationsArgsObjectSchema as TagCountOutputTypeCountLocationsArgsObjectSchema } from './TagCountOutputTypeCountLocationsArgs.schema';
import { TagCountOutputTypeCountDishesArgsObjectSchema as TagCountOutputTypeCountDishesArgsObjectSchema } from './TagCountOutputTypeCountDishesArgs.schema';
import { TagCountOutputTypeCountRatingsArgsObjectSchema as TagCountOutputTypeCountRatingsArgsObjectSchema } from './TagCountOutputTypeCountRatingsArgs.schema';
import { TagCountOutputTypeCountReviewsArgsObjectSchema as TagCountOutputTypeCountReviewsArgsObjectSchema } from './TagCountOutputTypeCountReviewsArgs.schema'

const makeSchema = () => z.object({
  locations: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeCountLocationsArgsObjectSchema)]).optional(),
  dishes: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeCountDishesArgsObjectSchema)]).optional(),
  ratings: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeCountRatingsArgsObjectSchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeCountReviewsArgsObjectSchema)]).optional()
}).strict();
export const TagCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TagCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagCountOutputTypeSelect>;
export const TagCountOutputTypeSelectObjectZodSchema = makeSchema();
