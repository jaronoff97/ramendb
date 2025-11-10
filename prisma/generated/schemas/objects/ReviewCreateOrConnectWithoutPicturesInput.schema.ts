import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutPicturesInputObjectSchema as ReviewCreateWithoutPicturesInputObjectSchema } from './ReviewCreateWithoutPicturesInput.schema';
import { ReviewUncheckedCreateWithoutPicturesInputObjectSchema as ReviewUncheckedCreateWithoutPicturesInputObjectSchema } from './ReviewUncheckedCreateWithoutPicturesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewCreateWithoutPicturesInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutPicturesInputObjectSchema)])
}).strict();
export const ReviewCreateOrConnectWithoutPicturesInputObjectSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateOrConnectWithoutPicturesInput>;
export const ReviewCreateOrConnectWithoutPicturesInputObjectZodSchema = makeSchema();
