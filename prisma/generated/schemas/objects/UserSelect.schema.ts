import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingFindManySchema as RatingFindManySchema } from '../findManyRating.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  workosId: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  pictureUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ratings: z.union([z.boolean(), z.lazy(() => RatingFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
