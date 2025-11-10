import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingPictureWhereUniqueInputObjectSchema as RatingPictureWhereUniqueInputObjectSchema } from './RatingPictureWhereUniqueInput.schema';
import { RatingPictureCreateWithoutRatingInputObjectSchema as RatingPictureCreateWithoutRatingInputObjectSchema } from './RatingPictureCreateWithoutRatingInput.schema';
import { RatingPictureUncheckedCreateWithoutRatingInputObjectSchema as RatingPictureUncheckedCreateWithoutRatingInputObjectSchema } from './RatingPictureUncheckedCreateWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingPictureWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RatingPictureCreateWithoutRatingInputObjectSchema), z.lazy(() => RatingPictureUncheckedCreateWithoutRatingInputObjectSchema)])
}).strict();
export const RatingPictureCreateOrConnectWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingPictureCreateOrConnectWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureCreateOrConnectWithoutRatingInput>;
export const RatingPictureCreateOrConnectWithoutRatingInputObjectZodSchema = makeSchema();
