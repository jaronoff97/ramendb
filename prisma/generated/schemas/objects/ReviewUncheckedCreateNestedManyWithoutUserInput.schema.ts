import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateWithoutUserInputObjectSchema as ReviewCreateWithoutUserInputObjectSchema } from './ReviewCreateWithoutUserInput.schema';
import { ReviewUncheckedCreateWithoutUserInputObjectSchema as ReviewUncheckedCreateWithoutUserInputObjectSchema } from './ReviewUncheckedCreateWithoutUserInput.schema';
import { ReviewCreateOrConnectWithoutUserInputObjectSchema as ReviewCreateOrConnectWithoutUserInputObjectSchema } from './ReviewCreateOrConnectWithoutUserInput.schema';
import { ReviewCreateManyUserInputEnvelopeObjectSchema as ReviewCreateManyUserInputEnvelopeObjectSchema } from './ReviewCreateManyUserInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutUserInputObjectSchema), z.lazy(() => ReviewCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput>;
export const ReviewUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
