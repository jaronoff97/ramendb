import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagFindManySchema as LocationTagFindManySchema } from '../findManyLocationTag.schema';
import { DishTagFindManySchema as DishTagFindManySchema } from '../findManyDishTag.schema';
import { RatingTagFindManySchema as RatingTagFindManySchema } from '../findManyRatingTag.schema';
import { ReviewTagFindManySchema as ReviewTagFindManySchema } from '../findManyReviewTag.schema';
import { TagCountOutputTypeArgsObjectSchema as TagCountOutputTypeArgsObjectSchema } from './TagCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  locations: z.union([z.boolean(), z.lazy(() => LocationTagFindManySchema)]).optional(),
  dishes: z.union([z.boolean(), z.lazy(() => DishTagFindManySchema)]).optional(),
  ratings: z.union([z.boolean(), z.lazy(() => RatingTagFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewTagFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TagCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TagIncludeObjectSchema: z.ZodType<Prisma.TagInclude> = makeSchema() as unknown as z.ZodType<Prisma.TagInclude>;
export const TagIncludeObjectZodSchema = makeSchema();
