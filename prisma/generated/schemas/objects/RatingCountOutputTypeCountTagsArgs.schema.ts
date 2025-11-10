import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagWhereInputObjectSchema as RatingTagWhereInputObjectSchema } from './RatingTagWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingTagWhereInputObjectSchema).optional()
}).strict();
export const RatingCountOutputTypeCountTagsArgsObjectSchema = makeSchema();
export const RatingCountOutputTypeCountTagsArgsObjectZodSchema = makeSchema();
