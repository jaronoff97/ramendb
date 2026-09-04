import * as z from 'zod';
import { RatingPictureSelectObjectSchema as RatingPictureSelectObjectSchema } from './RatingPictureSelect.schema';
import { RatingPictureIncludeObjectSchema as RatingPictureIncludeObjectSchema } from './RatingPictureInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RatingPictureSelectObjectSchema).optional(),
  include: z.lazy(() => RatingPictureIncludeObjectSchema).optional()
}).strict();
export const RatingPictureArgsObjectSchema = makeSchema();
export const RatingPictureArgsObjectZodSchema = makeSchema();
