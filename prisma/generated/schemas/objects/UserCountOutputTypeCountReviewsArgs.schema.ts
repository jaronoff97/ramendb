import * as z from 'zod';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountReviewsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountReviewsArgsObjectZodSchema = makeSchema();
