import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingPictureCreateWithoutRatingInputObjectSchema as RatingPictureCreateWithoutRatingInputObjectSchema } from './RatingPictureCreateWithoutRatingInput.schema';
import { RatingPictureUncheckedCreateWithoutRatingInputObjectSchema as RatingPictureUncheckedCreateWithoutRatingInputObjectSchema } from './RatingPictureUncheckedCreateWithoutRatingInput.schema';
import { RatingPictureCreateOrConnectWithoutRatingInputObjectSchema as RatingPictureCreateOrConnectWithoutRatingInputObjectSchema } from './RatingPictureCreateOrConnectWithoutRatingInput.schema';
import { RatingPictureUpsertWithWhereUniqueWithoutRatingInputObjectSchema as RatingPictureUpsertWithWhereUniqueWithoutRatingInputObjectSchema } from './RatingPictureUpsertWithWhereUniqueWithoutRatingInput.schema';
import { RatingPictureCreateManyRatingInputEnvelopeObjectSchema as RatingPictureCreateManyRatingInputEnvelopeObjectSchema } from './RatingPictureCreateManyRatingInputEnvelope.schema';
import { RatingPictureWhereUniqueInputObjectSchema as RatingPictureWhereUniqueInputObjectSchema } from './RatingPictureWhereUniqueInput.schema';
import { RatingPictureUpdateWithWhereUniqueWithoutRatingInputObjectSchema as RatingPictureUpdateWithWhereUniqueWithoutRatingInputObjectSchema } from './RatingPictureUpdateWithWhereUniqueWithoutRatingInput.schema';
import { RatingPictureUpdateManyWithWhereWithoutRatingInputObjectSchema as RatingPictureUpdateManyWithWhereWithoutRatingInputObjectSchema } from './RatingPictureUpdateManyWithWhereWithoutRatingInput.schema';
import { RatingPictureScalarWhereInputObjectSchema as RatingPictureScalarWhereInputObjectSchema } from './RatingPictureScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingPictureCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureCreateWithoutRatingInputObjectSchema).array(), z.lazy(() => RatingPictureUncheckedCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureUncheckedCreateWithoutRatingInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RatingPictureCreateOrConnectWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureCreateOrConnectWithoutRatingInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RatingPictureUpsertWithWhereUniqueWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureUpsertWithWhereUniqueWithoutRatingInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RatingPictureCreateManyRatingInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RatingPictureWhereUniqueInputObjectSchema), z.lazy(() => RatingPictureWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RatingPictureWhereUniqueInputObjectSchema), z.lazy(() => RatingPictureWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RatingPictureWhereUniqueInputObjectSchema), z.lazy(() => RatingPictureWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RatingPictureWhereUniqueInputObjectSchema), z.lazy(() => RatingPictureWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RatingPictureUpdateWithWhereUniqueWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureUpdateWithWhereUniqueWithoutRatingInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RatingPictureUpdateManyWithWhereWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureUpdateManyWithWhereWithoutRatingInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RatingPictureScalarWhereInputObjectSchema), z.lazy(() => RatingPictureScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RatingPictureUncheckedUpdateManyWithoutRatingNestedInputObjectSchema: z.ZodType<Prisma.RatingPictureUncheckedUpdateManyWithoutRatingNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureUncheckedUpdateManyWithoutRatingNestedInput>;
export const RatingPictureUncheckedUpdateManyWithoutRatingNestedInputObjectZodSchema = makeSchema();
