import * as z from 'zod';
import { ReviewPictureWhereInputObjectSchema as ReviewPictureWhereInputObjectSchema } from './ReviewPictureWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewPictureWhereInputObjectSchema).optional()
}).strict();
export const ReviewCountOutputTypeCountPicturesArgsObjectSchema = makeSchema();
export const ReviewCountOutputTypeCountPicturesArgsObjectZodSchema = makeSchema();
