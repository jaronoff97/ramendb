import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingPictureScalarWhereInputObjectSchema as RatingPictureScalarWhereInputObjectSchema } from './RatingPictureScalarWhereInput.schema';
import { RatingPictureUpdateManyMutationInputObjectSchema as RatingPictureUpdateManyMutationInputObjectSchema } from './RatingPictureUpdateManyMutationInput.schema';
import { RatingPictureUncheckedUpdateManyWithoutRatingInputObjectSchema as RatingPictureUncheckedUpdateManyWithoutRatingInputObjectSchema } from './RatingPictureUncheckedUpdateManyWithoutRatingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingPictureScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RatingPictureUpdateManyMutationInputObjectSchema), z.lazy(() => RatingPictureUncheckedUpdateManyWithoutRatingInputObjectSchema)])
}).strict();
export const RatingPictureUpdateManyWithWhereWithoutRatingInputObjectSchema: z.ZodType<Prisma.RatingPictureUpdateManyWithWhereWithoutRatingInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingPictureUpdateManyWithWhereWithoutRatingInput>;
export const RatingPictureUpdateManyWithWhereWithoutRatingInputObjectZodSchema = makeSchema();
