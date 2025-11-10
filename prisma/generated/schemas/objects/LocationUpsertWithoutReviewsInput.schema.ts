import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationUpdateWithoutReviewsInputObjectSchema as LocationUpdateWithoutReviewsInputObjectSchema } from './LocationUpdateWithoutReviewsInput.schema';
import { LocationUncheckedUpdateWithoutReviewsInputObjectSchema as LocationUncheckedUpdateWithoutReviewsInputObjectSchema } from './LocationUncheckedUpdateWithoutReviewsInput.schema';
import { LocationCreateWithoutReviewsInputObjectSchema as LocationCreateWithoutReviewsInputObjectSchema } from './LocationCreateWithoutReviewsInput.schema';
import { LocationUncheckedCreateWithoutReviewsInputObjectSchema as LocationUncheckedCreateWithoutReviewsInputObjectSchema } from './LocationUncheckedCreateWithoutReviewsInput.schema';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LocationUpdateWithoutReviewsInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutReviewsInputObjectSchema)]),
  create: z.union([z.lazy(() => LocationCreateWithoutReviewsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutReviewsInputObjectSchema)]),
  where: z.lazy(() => LocationWhereInputObjectSchema).optional()
}).strict();
export const LocationUpsertWithoutReviewsInputObjectSchema: z.ZodType<Prisma.LocationUpsertWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpsertWithoutReviewsInput>;
export const LocationUpsertWithoutReviewsInputObjectZodSchema = makeSchema();
