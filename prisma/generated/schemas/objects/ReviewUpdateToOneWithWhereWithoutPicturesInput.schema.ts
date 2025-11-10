import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereInputObjectSchema as ReviewWhereInputObjectSchema } from './ReviewWhereInput.schema';
import { ReviewUpdateWithoutPicturesInputObjectSchema as ReviewUpdateWithoutPicturesInputObjectSchema } from './ReviewUpdateWithoutPicturesInput.schema';
import { ReviewUncheckedUpdateWithoutPicturesInputObjectSchema as ReviewUncheckedUpdateWithoutPicturesInputObjectSchema } from './ReviewUncheckedUpdateWithoutPicturesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ReviewUpdateWithoutPicturesInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutPicturesInputObjectSchema)])
}).strict();
export const ReviewUpdateToOneWithWhereWithoutPicturesInputObjectSchema: z.ZodType<Prisma.ReviewUpdateToOneWithWhereWithoutPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateToOneWithWhereWithoutPicturesInput>;
export const ReviewUpdateToOneWithWhereWithoutPicturesInputObjectZodSchema = makeSchema();
