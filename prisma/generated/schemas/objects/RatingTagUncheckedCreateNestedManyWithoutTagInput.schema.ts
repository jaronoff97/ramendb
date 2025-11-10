import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagCreateWithoutTagInputObjectSchema as RatingTagCreateWithoutTagInputObjectSchema } from './RatingTagCreateWithoutTagInput.schema';
import { RatingTagUncheckedCreateWithoutTagInputObjectSchema as RatingTagUncheckedCreateWithoutTagInputObjectSchema } from './RatingTagUncheckedCreateWithoutTagInput.schema';
import { RatingTagCreateOrConnectWithoutTagInputObjectSchema as RatingTagCreateOrConnectWithoutTagInputObjectSchema } from './RatingTagCreateOrConnectWithoutTagInput.schema';
import { RatingTagCreateManyTagInputEnvelopeObjectSchema as RatingTagCreateManyTagInputEnvelopeObjectSchema } from './RatingTagCreateManyTagInputEnvelope.schema';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './RatingTagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingTagCreateWithoutTagInputObjectSchema), z.lazy(() => RatingTagCreateWithoutTagInputObjectSchema).array(), z.lazy(() => RatingTagUncheckedCreateWithoutTagInputObjectSchema), z.lazy(() => RatingTagUncheckedCreateWithoutTagInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RatingTagCreateOrConnectWithoutTagInputObjectSchema), z.lazy(() => RatingTagCreateOrConnectWithoutTagInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RatingTagCreateManyTagInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RatingTagWhereUniqueInputObjectSchema), z.lazy(() => RatingTagWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RatingTagUncheckedCreateNestedManyWithoutTagInputObjectSchema: z.ZodType<Prisma.RatingTagUncheckedCreateNestedManyWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUncheckedCreateNestedManyWithoutTagInput>;
export const RatingTagUncheckedCreateNestedManyWithoutTagInputObjectZodSchema = makeSchema();
