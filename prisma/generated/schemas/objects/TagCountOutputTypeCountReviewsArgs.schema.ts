import * as z from 'zod';
import { ReviewTagWhereInputObjectSchema as ReviewTagWhereInputObjectSchema } from './ReviewTagWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewTagWhereInputObjectSchema).optional()
}).strict();
export const TagCountOutputTypeCountReviewsArgsObjectSchema = makeSchema();
export const TagCountOutputTypeCountReviewsArgsObjectZodSchema = makeSchema();
