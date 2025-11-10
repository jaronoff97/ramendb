import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateNestedOneWithoutPicturesInputObjectSchema as ReviewCreateNestedOneWithoutPicturesInputObjectSchema } from './ReviewCreateNestedOneWithoutPicturesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  url: z.string(),
  caption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  review: z.lazy(() => ReviewCreateNestedOneWithoutPicturesInputObjectSchema)
}).strict();
export const ReviewPictureCreateInputObjectSchema: z.ZodType<Prisma.ReviewPictureCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewPictureCreateInput>;
export const ReviewPictureCreateInputObjectZodSchema = makeSchema();
