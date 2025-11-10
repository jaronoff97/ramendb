import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountRatingsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountRatingsArgsObjectZodSchema = makeSchema();
