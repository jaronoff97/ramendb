import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateWithoutRatingPicturesInputObjectSchema as RatingCreateWithoutRatingPicturesInputObjectSchema } from './RatingCreateWithoutRatingPicturesInput.schema';
import { RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema as RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema } from './RatingUncheckedCreateWithoutRatingPicturesInput.schema';
import { RatingCreateOrConnectWithoutRatingPicturesInputObjectSchema as RatingCreateOrConnectWithoutRatingPicturesInputObjectSchema } from './RatingCreateOrConnectWithoutRatingPicturesInput.schema';
import { RatingUpsertWithoutRatingPicturesInputObjectSchema as RatingUpsertWithoutRatingPicturesInputObjectSchema } from './RatingUpsertWithoutRatingPicturesInput.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingUpdateToOneWithWhereWithoutRatingPicturesInputObjectSchema as RatingUpdateToOneWithWhereWithoutRatingPicturesInputObjectSchema } from './RatingUpdateToOneWithWhereWithoutRatingPicturesInput.schema';
import { RatingUpdateWithoutRatingPicturesInputObjectSchema as RatingUpdateWithoutRatingPicturesInputObjectSchema } from './RatingUpdateWithoutRatingPicturesInput.schema';
import { RatingUncheckedUpdateWithoutRatingPicturesInputObjectSchema as RatingUncheckedUpdateWithoutRatingPicturesInputObjectSchema } from './RatingUncheckedUpdateWithoutRatingPicturesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingCreateWithoutRatingPicturesInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RatingCreateOrConnectWithoutRatingPicturesInputObjectSchema).optional(),
  upsert: z.lazy(() => RatingUpsertWithoutRatingPicturesInputObjectSchema).optional(),
  connect: z.lazy(() => RatingWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RatingUpdateToOneWithWhereWithoutRatingPicturesInputObjectSchema), z.lazy(() => RatingUpdateWithoutRatingPicturesInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutRatingPicturesInputObjectSchema)]).optional()
}).strict();
export const RatingUpdateOneRequiredWithoutRatingPicturesNestedInputObjectSchema: z.ZodType<Prisma.RatingUpdateOneRequiredWithoutRatingPicturesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateOneRequiredWithoutRatingPicturesNestedInput>;
export const RatingUpdateOneRequiredWithoutRatingPicturesNestedInputObjectZodSchema = makeSchema();
