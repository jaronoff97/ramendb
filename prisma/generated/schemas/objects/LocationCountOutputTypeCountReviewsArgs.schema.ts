import * as z from 'zod';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereInputObjectSchema).optional()
}).strict();
export const LocationCountOutputTypeCountReviewsArgsObjectSchema = makeSchema();
export const LocationCountOutputTypeCountReviewsArgsObjectZodSchema = makeSchema();
