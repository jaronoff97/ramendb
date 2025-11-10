import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagCreateWithoutRatingInputObjectSchema as RatingTagCreateWithoutRatingInputObjectSchema } from './RatingTagCreateWithoutRatingInput.schema';
import { RatingTagUncheckedCreateWithoutRatingInputObjectSchema as RatingTagUncheckedCreateWithoutRatingInputObjectSchema } from './RatingTagUncheckedCreateWithoutRatingInput.schema';
import { RatingTagCreateOrConnectWithoutRatingInputObjectSchema as RatingTagCreateOrConnectWithoutRatingInputObjectSchema } from './RatingTagCreateOrConnectWithoutRatingInput.schema';
import { RatingTagUpsertWithWhereUniqueWithoutRatingInputObjectSchema as RatingTagUpsertWithWhereUniqueWithoutRatingInputObjectSchema } from './RatingTagUpsertWithWhereUniqueWithoutRatingInput.schema';
import { RatingTagCreateManyRatingInputEnvelopeObjectSchema as RatingTagCreateManyRatingInputEnvelopeObjectSchema } from './RatingTagCreateManyRatingInputEnvelope.schema';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './RatingTagWhereUniqueInput.schema';
import { RatingTagUpdateWithWhereUniqueWithoutRatingInputObjectSchema as RatingTagUpdateWithWhereUniqueWithoutRatingInputObjectSchema } from './RatingTagUpdateWithWhereUniqueWithoutRatingInput.schema';
import { RatingTagUpdateManyWithWhereWithoutRatingInputObjectSchema as RatingTagUpdateManyWithWhereWithoutRatingInputObjectSchema } from './RatingTagUpdateManyWithWhereWithoutRatingInput.schema';
import { RatingTagScalarWhereInputObjectSchema as RatingTagScalarWhereInputObjectSchema } from './RatingTagScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingTagCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingTagCreateWithoutRatingInputObjectSchema).array(), z.lazy(() => RatingTagUncheckedCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingTagUncheckedCreateWithoutRatingInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RatingTagCreateOrConnectWithoutRatingInputObjectSchema), z.lazy(() => RatingTagCreateOrConnectWithoutRatingInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RatingTagUpsertWithWhereUniqueWithoutRatingInputObjectSchema), z.lazy(() => RatingTagUpsertWithWhereUniqueWithoutRatingInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RatingTagCreateManyRatingInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RatingTagWhereUniqueInputObjectSchema), z.lazy(() => RatingTagWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RatingTagWhereUniqueInputObjectSchema), z.lazy(() => RatingTagWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RatingTagWhereUniqueInputObjectSchema), z.lazy(() => RatingTagWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RatingTagWhereUniqueInputObjectSchema), z.lazy(() => RatingTagWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RatingTagUpdateWithWhereUniqueWithoutRatingInputObjectSchema), z.lazy(() => RatingTagUpdateWithWhereUniqueWithoutRatingInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RatingTagUpdateManyWithWhereWithoutRatingInputObjectSchema), z.lazy(() => RatingTagUpdateManyWithWhereWithoutRatingInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RatingTagScalarWhereInputObjectSchema), z.lazy(() => RatingTagScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RatingTagUncheckedUpdateManyWithoutRatingNestedInputObjectSchema: z.ZodType<Prisma.RatingTagUncheckedUpdateManyWithoutRatingNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagUncheckedUpdateManyWithoutRatingNestedInput>;
export const RatingTagUncheckedUpdateManyWithoutRatingNestedInputObjectZodSchema = makeSchema();
