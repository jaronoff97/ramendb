import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateWithoutPicturesInputObjectSchema as ReviewCreateWithoutPicturesInputObjectSchema } from './ReviewCreateWithoutPicturesInput.schema';
import { ReviewUncheckedCreateWithoutPicturesInputObjectSchema as ReviewUncheckedCreateWithoutPicturesInputObjectSchema } from './ReviewUncheckedCreateWithoutPicturesInput.schema';
import { ReviewCreateOrConnectWithoutPicturesInputObjectSchema as ReviewCreateOrConnectWithoutPicturesInputObjectSchema } from './ReviewCreateOrConnectWithoutPicturesInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutPicturesInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutPicturesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutPicturesInputObjectSchema).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReviewCreateNestedOneWithoutPicturesInputObjectSchema: z.ZodType<Prisma.ReviewCreateNestedOneWithoutPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateNestedOneWithoutPicturesInput>;
export const ReviewCreateNestedOneWithoutPicturesInputObjectZodSchema = makeSchema();
