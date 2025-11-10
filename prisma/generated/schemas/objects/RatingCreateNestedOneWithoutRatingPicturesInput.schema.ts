import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateWithoutRatingPicturesInputObjectSchema as RatingCreateWithoutRatingPicturesInputObjectSchema } from './RatingCreateWithoutRatingPicturesInput.schema';
import { RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema as RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema } from './RatingUncheckedCreateWithoutRatingPicturesInput.schema';
import { RatingCreateOrConnectWithoutRatingPicturesInputObjectSchema as RatingCreateOrConnectWithoutRatingPicturesInputObjectSchema } from './RatingCreateOrConnectWithoutRatingPicturesInput.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingCreateWithoutRatingPicturesInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutRatingPicturesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RatingCreateOrConnectWithoutRatingPicturesInputObjectSchema).optional(),
  connect: z.lazy(() => RatingWhereUniqueInputObjectSchema).optional()
}).strict();
export const RatingCreateNestedOneWithoutRatingPicturesInputObjectSchema: z.ZodType<Prisma.RatingCreateNestedOneWithoutRatingPicturesInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateNestedOneWithoutRatingPicturesInput>;
export const RatingCreateNestedOneWithoutRatingPicturesInputObjectZodSchema = makeSchema();
