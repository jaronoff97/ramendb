import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateNestedOneWithoutRatingPicturesInputObjectSchema as RatingCreateNestedOneWithoutRatingPicturesInputObjectSchema } from './RatingCreateNestedOneWithoutRatingPicturesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  caption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  rating: z.lazy(() => RatingCreateNestedOneWithoutRatingPicturesInputObjectSchema)
}).strict();
export const RatingPictureCreateInputObjectSchema: z.ZodType<Prisma.RatingPictureCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureCreateInput>;
export const RatingPictureCreateInputObjectZodSchema = makeSchema();
