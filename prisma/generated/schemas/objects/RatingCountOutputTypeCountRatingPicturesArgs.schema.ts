import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingPictureWhereInputObjectSchema as RatingPictureWhereInputObjectSchema } from './RatingPictureWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingPictureWhereInputObjectSchema).optional()
}).strict();
export const RatingCountOutputTypeCountRatingPicturesArgsObjectSchema = makeSchema();
export const RatingCountOutputTypeCountRatingPicturesArgsObjectZodSchema = makeSchema();
