import * as z from 'zod';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereInputObjectSchema).optional()
}).strict();
export const LocationCountOutputTypeCountRatingsArgsObjectSchema = makeSchema();
export const LocationCountOutputTypeCountRatingsArgsObjectZodSchema = makeSchema();
