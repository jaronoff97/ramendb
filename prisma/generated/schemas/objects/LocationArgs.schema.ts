import * as z from 'zod';
import { LocationSelectObjectSchema as LocationSelectObjectSchema } from './LocationSelect.schema';
import { LocationIncludeObjectSchema as LocationIncludeObjectSchema } from './LocationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LocationSelectObjectSchema).optional(),
  include: z.lazy(() => LocationIncludeObjectSchema).optional()
}).strict();
export const LocationArgsObjectSchema = makeSchema();
export const LocationArgsObjectZodSchema = makeSchema();
