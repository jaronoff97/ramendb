import * as z from 'zod';
import { ReviewTagSelectObjectSchema as ReviewTagSelectObjectSchema } from './ReviewTagSelect.schema';
import { ReviewTagIncludeObjectSchema as ReviewTagIncludeObjectSchema } from './ReviewTagInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ReviewTagSelectObjectSchema).optional(),
  include: z.lazy(() => ReviewTagIncludeObjectSchema).optional()
}).strict();
export const ReviewTagArgsObjectSchema = makeSchema();
export const ReviewTagArgsObjectZodSchema = makeSchema();
