import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateWithoutLocationInputObjectSchema as ReviewCreateWithoutLocationInputObjectSchema } from './ReviewCreateWithoutLocationInput.schema';
import { ReviewUncheckedCreateWithoutLocationInputObjectSchema as ReviewUncheckedCreateWithoutLocationInputObjectSchema } from './ReviewUncheckedCreateWithoutLocationInput.schema';
import { ReviewCreateOrConnectWithoutLocationInputObjectSchema as ReviewCreateOrConnectWithoutLocationInputObjectSchema } from './ReviewCreateOrConnectWithoutLocationInput.schema';
import { ReviewCreateManyLocationInputEnvelopeObjectSchema as ReviewCreateManyLocationInputEnvelopeObjectSchema } from './ReviewCreateManyLocationInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ReviewCreateWithoutLocationInputObjectSchema), z.lazy(() => ReviewCreateWithoutLocationInputObjectSchema).array(), z.lazy(() => ReviewUncheckedCreateWithoutLocationInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutLocationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ReviewCreateOrConnectWithoutLocationInputObjectSchema), z.lazy(() => ReviewCreateOrConnectWithoutLocationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ReviewCreateManyLocationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ReviewWhereUniqueInputObjectSchema), z.lazy(() => ReviewWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ReviewUncheckedCreateNestedManyWithoutLocationInputObjectSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutLocationInput>;
export const ReviewUncheckedCreateNestedManyWithoutLocationInputObjectZodSchema = makeSchema();
