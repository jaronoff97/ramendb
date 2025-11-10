import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateWithoutTagsInputObjectSchema as ReviewCreateWithoutTagsInputObjectSchema } from './ReviewCreateWithoutTagsInput.schema';
import { ReviewUncheckedCreateWithoutTagsInputObjectSchema as ReviewUncheckedCreateWithoutTagsInputObjectSchema } from './ReviewUncheckedCreateWithoutTagsInput.schema';
import { ReviewCreateOrConnectWithoutTagsInputObjectSchema as ReviewCreateOrConnectWithoutTagsInputObjectSchema } from './ReviewCreateOrConnectWithoutTagsInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutTagsInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutTagsInputObjectSchema).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputObjectSchema).optional()
}).strict();
export const ReviewCreateNestedOneWithoutTagsInputObjectSchema: z.ZodType<Prisma.ReviewCreateNestedOneWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateNestedOneWithoutTagsInput>;
export const ReviewCreateNestedOneWithoutTagsInputObjectZodSchema = makeSchema();
