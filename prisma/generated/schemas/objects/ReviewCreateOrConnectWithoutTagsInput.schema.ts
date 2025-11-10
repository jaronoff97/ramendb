import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutTagsInputObjectSchema as ReviewCreateWithoutTagsInputObjectSchema } from './ReviewCreateWithoutTagsInput.schema';
import { ReviewUncheckedCreateWithoutTagsInputObjectSchema as ReviewUncheckedCreateWithoutTagsInputObjectSchema } from './ReviewUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewCreateWithoutTagsInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const ReviewCreateOrConnectWithoutTagsInputObjectSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateOrConnectWithoutTagsInput>;
export const ReviewCreateOrConnectWithoutTagsInputObjectZodSchema = makeSchema();
