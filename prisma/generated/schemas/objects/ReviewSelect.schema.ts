import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationArgsObjectSchema as LocationArgsObjectSchema } from './LocationArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { RatingArgsObjectSchema as RatingArgsObjectSchema } from './RatingArgs.schema';
import { ReviewPictureFindManySchema as ReviewPictureFindManySchema } from '../findManyReviewPicture.schema';
import { ReviewTagFindManySchema as ReviewTagFindManySchema } from '../findManyReviewTag.schema';
import { ReviewCountOutputTypeArgsObjectSchema as ReviewCountOutputTypeArgsObjectSchema } from './ReviewCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  locationId: z.boolean().optional(),
  userId: z.boolean().optional(),
  ratingId: z.boolean().optional(),
  title: z.boolean().optional(),
  text: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  location: z.union([z.boolean(), z.lazy(() => LocationArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  rating: z.union([z.boolean(), z.lazy(() => RatingArgsObjectSchema)]).optional(),
  pictures: z.union([z.boolean(), z.lazy(() => ReviewPictureFindManySchema)]).optional(),
  tags: z.union([z.boolean(), z.lazy(() => ReviewTagFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ReviewCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ReviewSelectObjectSchema: z.ZodType<Prisma.ReviewSelect> = makeSchema() as unknown as z.ZodType<Prisma.ReviewSelect>;
export const ReviewSelectObjectZodSchema = makeSchema();
