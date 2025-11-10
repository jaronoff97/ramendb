import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewPictureWhereInputObjectSchema as ReviewPictureWhereInputObjectSchema } from './ReviewPictureWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ReviewPictureWhereInputObjectSchema).optional(),
  some: z.lazy(() => ReviewPictureWhereInputObjectSchema).optional(),
  none: z.lazy(() => ReviewPictureWhereInputObjectSchema).optional()
}).strict();
export const ReviewPictureListRelationFilterObjectSchema: z.ZodType<Prisma.ReviewPictureListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureListRelationFilter>;
export const ReviewPictureListRelationFilterObjectZodSchema = makeSchema();
