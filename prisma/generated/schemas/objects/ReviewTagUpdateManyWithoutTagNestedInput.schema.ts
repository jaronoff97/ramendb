import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagCreateWithoutTagInputObjectSchema as ReviewTagCreateWithoutTagInputObjectSchema } from './ReviewTagCreateWithoutTagInput.schema';
import { ReviewTagUncheckedCreateWithoutTagInputObjectSchema as ReviewTagUncheckedCreateWithoutTagInputObjectSchema } from './ReviewTagUncheckedCreateWithoutTagInput.schema';
import { ReviewTagCreateOrConnectWithoutTagInputObjectSchema as ReviewTagCreateOrConnectWithoutTagInputObjectSchema } from './ReviewTagCreateOrConnectWithoutTagInput.schema';
import { ReviewTagUpsertWithWhereUniqueWithoutTagInputObjectSchema as ReviewTagUpsertWithWhereUniqueWithoutTagInputObjectSchema } from './ReviewTagUpsertWithWhereUniqueWithoutTagInput.schema';
import { ReviewTagCreateManyTagInputEnvelopeObjectSchema as ReviewTagCreateManyTagInputEnvelopeObjectSchema } from './ReviewTagCreateManyTagInputEnvelope.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './ReviewTagWhereUniqueInput.schema';
import { ReviewTagUpdateWithWhereUniqueWithoutTagInputObjectSchema as ReviewTagUpdateWithWhereUniqueWithoutTagInputObjectSchema } from './ReviewTagUpdateWithWhereUniqueWithoutTagInput.schema';
import { ReviewTagUpdateManyWithWhereWithoutTagInputObjectSchema as ReviewTagUpdateManyWithWhereWithoutTagInputObjectSchema } from './ReviewTagUpdateManyWithWhereWithoutTagInput.schema';
import { ReviewTagScalarWhereInputObjectSchema as ReviewTagScalarWhereInputObjectSchema } from './ReviewTagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewTagCreateWithoutTagInputObjectSchema), z.lazy(() => ReviewTagCreateWithoutTagInputObjectSchema).array(), z.lazy(() => ReviewTagUncheckedCreateWithoutTagInputObjectSchema), z.lazy(() => ReviewTagUncheckedCreateWithoutTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewTagCreateOrConnectWithoutTagInputObjectSchema), z.lazy(() => ReviewTagCreateOrConnectWithoutTagInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ReviewTagUpsertWithWhereUniqueWithoutTagInputObjectSchema), z.lazy(() => ReviewTagUpsertWithWhereUniqueWithoutTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewTagCreateManyTagInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ReviewTagWhereUniqueInputObjectSchema), z.lazy(() => ReviewTagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ReviewTagWhereUniqueInputObjectSchema), z.lazy(() => ReviewTagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ReviewTagWhereUniqueInputObjectSchema), z.lazy(() => ReviewTagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ReviewTagWhereUniqueInputObjectSchema), z.lazy(() => ReviewTagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ReviewTagUpdateWithWhereUniqueWithoutTagInputObjectSchema), z.lazy(() => ReviewTagUpdateWithWhereUniqueWithoutTagInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ReviewTagUpdateManyWithWhereWithoutTagInputObjectSchema), z.lazy(() => ReviewTagUpdateManyWithWhereWithoutTagInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ReviewTagScalarWhereInputObjectSchema), z.lazy(() => ReviewTagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ReviewTagUpdateManyWithoutTagNestedInputObjectSchema: z.ZodType<Prisma.ReviewTagUpdateManyWithoutTagNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagUpdateManyWithoutTagNestedInput>;
export const ReviewTagUpdateManyWithoutTagNestedInputObjectZodSchema = makeSchema();
