import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingPictureCreateWithoutRatingInputObjectSchema as RatingPictureCreateWithoutRatingInputObjectSchema } from './RatingPictureCreateWithoutRatingInput.schema';
import { RatingPictureUncheckedCreateWithoutRatingInputObjectSchema as RatingPictureUncheckedCreateWithoutRatingInputObjectSchema } from './RatingPictureUncheckedCreateWithoutRatingInput.schema';
import { RatingPictureCreateOrConnectWithoutRatingInputObjectSchema as RatingPictureCreateOrConnectWithoutRatingInputObjectSchema } from './RatingPictureCreateOrConnectWithoutRatingInput.schema';
import { RatingPictureCreateManyRatingInputEnvelopeObjectSchema as RatingPictureCreateManyRatingInputEnvelopeObjectSchema } from './RatingPictureCreateManyRatingInputEnvelope.schema';
import { RatingPictureWhereUniqueInputObjectSchema as RatingPictureWhereUniqueInputObjectSchema } from './RatingPictureWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingPictureCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureCreateWithoutRatingInputObjectSchema).array(), z.lazy(() => RatingPictureUncheckedCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureUncheckedCreateWithoutRatingInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RatingPictureCreateOrConnectWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureCreateOrConnectWithoutRatingInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RatingPictureCreateManyRatingInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RatingPictureWhereUniqueInputObjectSchema), z.lazy(() => RatingPictureWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingPictureUncheckedCreateNestedManyWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureUncheckedCreateNestedManyWithoutRatingInput>;
export const RatingPictureUncheckedCreateNestedManyWithoutRatingInputObjectZodSchema = makeSchema();
