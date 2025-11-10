import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateWithoutPicturesInputObjectSchema as ReviewCreateWithoutPicturesInputObjectSchema } from './ReviewCreateWithoutPicturesInput.schema';
import { ReviewUncheckedCreateWithoutPicturesInputObjectSchema as ReviewUncheckedCreateWithoutPicturesInputObjectSchema } from './ReviewUncheckedCreateWithoutPicturesInput.schema';
import { ReviewCreateOrConnectWithoutPicturesInputObjectSchema as ReviewCreateOrConnectWithoutPicturesInputObjectSchema } from './ReviewCreateOrConnectWithoutPicturesInput.schema';
import { ReviewUpsertWithoutPicturesInputObjectSchema as ReviewUpsertWithoutPicturesInputObjectSchema } from './ReviewUpsertWithoutPicturesInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateToOneWithWhereWithoutPicturesInputObjectSchema as ReviewUpdateToOneWithWhereWithoutPicturesInputObjectSchema } from './ReviewUpdateToOneWithWhereWithoutPicturesInput.schema';
import { ReviewUpdateWithoutPicturesInputObjectSchema as ReviewUpdateWithoutPicturesInputObjectSchema } from './ReviewUpdateWithoutPicturesInput.schema';
import { ReviewUncheckedUpdateWithoutPicturesInputObjectSchema as ReviewUncheckedUpdateWithoutPicturesInputObjectSchema } from './ReviewUncheckedUpdateWithoutPicturesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutPicturesInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutPicturesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutPicturesInputObjectSchema).optional(),
  upsert: z.lazy(() => ReviewUpsertWithoutPicturesInputObjectSchema).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReviewUpdateToOneWithWhereWithoutPicturesInputObjectSchema), z.lazy(() => ReviewUpdateWithoutPicturesInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutPicturesInputObjectSchema)]).optional()
}).strict();
export const ReviewUpdateOneRequiredWithoutPicturesNestedInputObjectSchema: z.ZodType<Prisma.ReviewUpdateOneRequiredWithoutPicturesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateOneRequiredWithoutPicturesNestedInput>;
export const ReviewUpdateOneRequiredWithoutPicturesNestedInputObjectZodSchema = makeSchema();
