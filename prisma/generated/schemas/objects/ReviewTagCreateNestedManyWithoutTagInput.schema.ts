import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagCreateWithoutTagInputObjectSchema as ReviewTagCreateWithoutTagInputObjectSchema } from './ReviewTagCreateWithoutTagInput.schema';
import { ReviewTagUncheckedCreateWithoutTagInputObjectSchema as ReviewTagUncheckedCreateWithoutTagInputObjectSchema } from './ReviewTagUncheckedCreateWithoutTagInput.schema';
import { ReviewTagCreateOrConnectWithoutTagInputObjectSchema as ReviewTagCreateOrConnectWithoutTagInputObjectSchema } from './ReviewTagCreateOrConnectWithoutTagInput.schema';
import { ReviewTagCreateManyTagInputEnvelopeObjectSchema as ReviewTagCreateManyTagInputEnvelopeObjectSchema } from './ReviewTagCreateManyTagInputEnvelope.schema';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './ReviewTagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewTagCreateWithoutTagInputObjectSchema), z.lazy(() => ReviewTagCreateWithoutTagInputObjectSchema).array(), z.lazy(() => ReviewTagUncheckedCreateWithoutTagInputObjectSchema), z.lazy(() => ReviewTagUncheckedCreateWithoutTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewTagCreateOrConnectWithoutTagInputObjectSchema), z.lazy(() => ReviewTagCreateOrConnectWithoutTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewTagCreateManyTagInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReviewTagWhereUniqueInputObjectSchema), z.lazy(() => ReviewTagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReviewTagCreateNestedManyWithoutTagInputObjectSchema: z.ZodType<Prisma.ReviewTagCreateNestedManyWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCreateNestedManyWithoutTagInput>;
export const ReviewTagCreateNestedManyWithoutTagInputObjectZodSchema = makeSchema();
