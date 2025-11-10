import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewUpdateWithoutPicturesInputObjectSchema as ReviewUpdateWithoutPicturesInputObjectSchema } from './ReviewUpdateWithoutPicturesInput.schema';
import { ReviewUncheckedUpdateWithoutPicturesInputObjectSchema as ReviewUncheckedUpdateWithoutPicturesInputObjectSchema } from './ReviewUncheckedUpdateWithoutPicturesInput.schema';
import { ReviewCreateWithoutPicturesInputObjectSchema as ReviewCreateWithoutPicturesInputObjectSchema } from './ReviewCreateWithoutPicturesInput.schema';
import { ReviewUncheckedCreateWithoutPicturesInputObjectSchema as ReviewUncheckedCreateWithoutPicturesInputObjectSchema } from './ReviewUncheckedCreateWithoutPicturesInput.schema';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ReviewUpdateWithoutPicturesInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutPicturesInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutPicturesInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutPicturesInputObjectSchema)]),
  where: z.lazy(() => ReviewWhereInputObjectSchema).optional()
}).strict();
export const ReviewUpsertWithoutPicturesInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithoutPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithoutPicturesInput>;
export const ReviewUpsertWithoutPicturesInputObjectZodSchema = makeSchema();
