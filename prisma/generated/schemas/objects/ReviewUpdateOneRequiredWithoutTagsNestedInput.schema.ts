import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateWithoutTagsInputObjectSchema as ReviewCreateWithoutTagsInputObjectSchema } from './ReviewCreateWithoutTagsInput.schema';
import { ReviewUncheckedCreateWithoutTagsInputObjectSchema as ReviewUncheckedCreateWithoutTagsInputObjectSchema } from './ReviewUncheckedCreateWithoutTagsInput.schema';
import { ReviewCreateOrConnectWithoutTagsInputObjectSchema as ReviewCreateOrConnectWithoutTagsInputObjectSchema } from './ReviewCreateOrConnectWithoutTagsInput.schema';
import { ReviewUpsertWithoutTagsInputObjectSchema as ReviewUpsertWithoutTagsInputObjectSchema } from './ReviewUpsertWithoutTagsInput.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateToOneWithWhereWithoutTagsInputObjectSchema as ReviewUpdateToOneWithWhereWithoutTagsInputObjectSchema } from './ReviewUpdateToOneWithWhereWithoutTagsInput.schema';
import { ReviewUpdateWithoutTagsInputObjectSchema as ReviewUpdateWithoutTagsInputObjectSchema } from './ReviewUpdateWithoutTagsInput.schema';
import { ReviewUncheckedUpdateWithoutTagsInputObjectSchema as ReviewUncheckedUpdateWithoutTagsInputObjectSchema } from './ReviewUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutTagsInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ReviewCreateOrConnectWithoutTagsInputObjectSchema).optional(),
  upsert: z.lazy(() => ReviewUpsertWithoutTagsInputObjectSchema).optional(),
  connect: z.lazy(() => ReviewWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ReviewUpdateToOneWithWhereWithoutTagsInputObjectSchema), z.lazy(() => ReviewUpdateWithoutTagsInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutTagsInputObjectSchema)]).optional()
}).strict();
export const ReviewUpdateOneRequiredWithoutTagsNestedInputObjectSchema: z.ZodType<Prisma.ReviewUpdateOneRequiredWithoutTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateOneRequiredWithoutTagsNestedInput>;
export const ReviewUpdateOneRequiredWithoutTagsNestedInputObjectZodSchema = makeSchema();
