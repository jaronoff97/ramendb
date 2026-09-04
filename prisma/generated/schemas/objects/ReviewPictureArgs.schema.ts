import * as z from 'zod';
import { ReviewPictureSelectObjectSchema as ReviewPictureSelectObjectSchema } from './ReviewPictureSelect.schema';
import { ReviewPictureIncludeObjectSchema as ReviewPictureIncludeObjectSchema } from './ReviewPictureInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReviewPictureSelectObjectSchema).optional(),
  include: z.lazy(() => ReviewPictureIncludeObjectSchema).optional()
}).strict();
export const ReviewPictureArgsObjectSchema = makeSchema();
export const ReviewPictureArgsObjectZodSchema = makeSchema();
