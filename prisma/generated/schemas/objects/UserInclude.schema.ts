import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingFindManySchema as RatingFindManySchema } from '../findManyRating.schema';
import { ReviewFindManySchema as ReviewFindManySchema } from '../findManyReview.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  ratings: z.union([z.boolean(), z.lazy(() => RatingFindManySchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => ReviewFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<Prisma.UserInclude> = makeSchema() as unknown as z.ZodType<Prisma.UserInclude>;
export const UserIncludeObjectZodSchema = makeSchema();
