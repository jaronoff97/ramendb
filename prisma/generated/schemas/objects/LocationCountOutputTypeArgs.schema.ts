import * as z from 'zod';
import { LocationCountOutputTypeSelectObjectSchema as LocationCountOutputTypeSelectObjectSchema } from './LocationCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => LocationCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const LocationCountOutputTypeArgsObjectSchema = makeSchema();
export const LocationCountOutputTypeArgsObjectZodSchema = makeSchema();
