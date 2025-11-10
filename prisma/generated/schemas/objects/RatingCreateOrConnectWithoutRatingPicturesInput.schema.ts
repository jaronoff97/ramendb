import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingCreateWithoutRatingPicturesInputObjectSchema as RatingCreateWithoutRatingPicturesInputObjectSchema } from './RatingCreateWithoutRatingPicturesInput.schema';
import { RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema as RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema } from './RatingUncheckedCreateWithoutRatingPicturesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RatingCreateWithoutRatingPicturesInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema)])
}).strict();
export const RatingCreateOrConnectWithoutRatingPicturesInputObjectSchema: z.ZodType<Prisma.RatingCreateOrConnectWithoutRatingPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateOrConnectWithoutRatingPicturesInput>;
export const RatingCreateOrConnectWithoutRatingPicturesInputObjectZodSchema = makeSchema();
