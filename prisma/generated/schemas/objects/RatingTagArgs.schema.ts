import * as z from 'zod';
import { RatingTagSelectObjectSchema as RatingTagSelectObjectSchema } from './RatingTagSelect.schema';
import { RatingTagIncludeObjectSchema as RatingTagIncludeObjectSchema } from './RatingTagInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => RatingTagSelectObjectSchema).optional(),
  include: z.lazy(() => RatingTagIncludeObjectSchema).optional()
}).strict();
export const RatingTagArgsObjectSchema = makeSchema();
export const RatingTagArgsObjectZodSchema = makeSchema();
