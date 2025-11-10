import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationArgsObjectSchema as LocationArgsObjectSchema } from './LocationArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { RatingTagFindManySchema as RatingTagFindManySchema } from '../findManyRatingTag.schema';
import { RatingPictureFindManySchema as RatingPictureFindManySchema } from '../findManyRatingPicture.schema';
import { RatingCountOutputTypeArgsObjectSchema as RatingCountOutputTypeArgsObjectSchema } from './RatingCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  location: z.union([z.boolean(), z.lazy(() => LocationArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => RatingTagFindManySchema)]).optional(),
  ratingPictures: z.union([z.boolean(), z.lazy(() => RatingPictureFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => RatingCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const RatingIncludeObjectSchema: z.ZodType<Prisma.RatingInclude> = makeSchema() as unknown as z.ZodType<Prisma.RatingInclude>;
export const RatingIncludeObjectZodSchema = makeSchema();
