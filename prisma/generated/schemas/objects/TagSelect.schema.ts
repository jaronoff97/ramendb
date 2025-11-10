import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagFindManySchema as LocationTagFindManySchema } from '../findManyLocationTag.schema';
import { DishTagFindManySchema as DishTagFindManySchema } from '../findManyDishTag.schema';
import { RatingTagFindManySchema as RatingTagFindManySchema } from '../findManyRatingTag.schema';
import { ReviewTagFindManySchema as ReviewTagFindManySchema } from '../findManyReviewTag.schema';
import { TagCountOutputTypeArgsObjectSchema as TagCountOutputTypeArgsObjectSchema } from './TagCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  category: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  locations: z.union([z.boolean(), z.lazy(() => LocationTagFindManySchema)]).optional(),
  dishes: z.union([z.boolean(), z.lazy(() => DishTagFindManySchema)]).optional(),
  ratings: z.union([z.boolean(), z.lazy(() => RatingTagFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewTagFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagSelectObjectSchema: z.ZodType<Prisma.TagSelect> = makeSchema() as unknown as z.ZodType<Prisma.TagSelect>;
export const TagSelectObjectZodSchema = makeSchema();
