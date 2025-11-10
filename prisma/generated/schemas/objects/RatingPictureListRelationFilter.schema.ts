import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingPictureWhereInputObjectSchema as RatingPictureWhereInputObjectSchema } from './RatingPictureWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => RatingPictureWhereInputObjectSchema).optional(),
  some: z.lazy(() => RatingPictureWhereInputObjectSchema).optional(),
  none: z.lazy(() => RatingPictureWhereInputObjectSchema).optional()
}).strict();
export const RatingPictureListRelationFilterObjectSchema: z.ZodType<Prisma.RatingPictureListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureListRelationFilter>;
export const RatingPictureListRelationFilterObjectZodSchema = makeSchema();
