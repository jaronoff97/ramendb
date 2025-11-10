import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateWithoutReviewsInputObjectSchema as RatingCreateWithoutReviewsInputObjectSchema } from './RatingCreateWithoutReviewsInput.schema';
import { RatingUncheckedCreateWithoutReviewsInputObjectSchema as RatingUncheckedCreateWithoutReviewsInputObjectSchema } from './RatingUncheckedCreateWithoutReviewsInput.schema';
import { RatingCreateOrConnectWithoutReviewsInputObjectSchema as RatingCreateOrConnectWithoutReviewsInputObjectSchema } from './RatingCreateOrConnectWithoutReviewsInput.schema';
import { RatingUpsertWithoutReviewsInputObjectSchema as RatingUpsertWithoutReviewsInputObjectSchema } from './RatingUpsertWithoutReviewsInput.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingUpdateToOneWithWhereWithoutReviewsInputObjectSchema as RatingUpdateToOneWithWhereWithoutReviewsInputObjectSchema } from './RatingUpdateToOneWithWhereWithoutReviewsInput.schema';
import { RatingUpdateWithoutReviewsInputObjectSchema as RatingUpdateWithoutReviewsInputObjectSchema } from './RatingUpdateWithoutReviewsInput.schema';
import { RatingUncheckedUpdateWithoutReviewsInputObjectSchema as RatingUncheckedUpdateWithoutReviewsInputObjectSchema } from './RatingUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingCreateWithoutReviewsInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RatingCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  upsert: z.lazy(() => RatingUpsertWithoutReviewsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => RatingWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => RatingWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => RatingWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RatingUpdateToOneWithWhereWithoutReviewsInputObjectSchema), z.lazy(() => RatingUpdateWithoutReviewsInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutReviewsInputObjectSchema)]).optional()
}).strict();
export const RatingUpdateOneWithoutReviewsNestedInputObjectSchema: z.ZodType<Prisma.RatingUpdateOneWithoutReviewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateOneWithoutReviewsNestedInput>;
export const RatingUpdateOneWithoutReviewsNestedInputObjectZodSchema = makeSchema();
