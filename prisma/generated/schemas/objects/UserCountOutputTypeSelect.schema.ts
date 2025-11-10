import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCountOutputTypeCountRatingsArgsObjectSchema as UserCountOutputTypeCountRatingsArgsObjectSchema } from './UserCountOutputTypeCountRatingsArgs.schema';
import { UserCountOutputTypeCountReviewsArgsObjectSchema as UserCountOutputTypeCountReviewsArgsObjectSchema } from './UserCountOutputTypeCountReviewsArgs.schema'

const makeSchema = () => z.object({
  ratings: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountRatingsArgsObjectSchema)]).optional(),
  reviews: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountReviewsArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
