import * as z from 'zod';
import { LocationTagSelectObjectSchema as LocationTagSelectObjectSchema } from './LocationTagSelect.schema';
import { LocationTagIncludeObjectSchema as LocationTagIncludeObjectSchema } from './LocationTagInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LocationTagSelectObjectSchema).optional(),
  include: z.lazy(() => LocationTagIncludeObjectSchema).optional()
}).strict();
export const LocationTagArgsObjectSchema = makeSchema();
export const LocationTagArgsObjectZodSchema = makeSchema();
