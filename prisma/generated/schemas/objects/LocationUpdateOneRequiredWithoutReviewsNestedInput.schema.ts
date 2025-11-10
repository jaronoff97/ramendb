import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateWithoutReviewsInputObjectSchema as LocationCreateWithoutReviewsInputObjectSchema } from './LocationCreateWithoutReviewsInput.schema';
import { LocationUncheckedCreateWithoutReviewsInputObjectSchema as LocationUncheckedCreateWithoutReviewsInputObjectSchema } from './LocationUncheckedCreateWithoutReviewsInput.schema';
import { LocationCreateOrConnectWithoutReviewsInputObjectSchema as LocationCreateOrConnectWithoutReviewsInputObjectSchema } from './LocationCreateOrConnectWithoutReviewsInput.schema';
import { LocationUpsertWithoutReviewsInputObjectSchema as LocationUpsertWithoutReviewsInputObjectSchema } from './LocationUpsertWithoutReviewsInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateToOneWithWhereWithoutReviewsInputObjectSchema as LocationUpdateToOneWithWhereWithoutReviewsInputObjectSchema } from './LocationUpdateToOneWithWhereWithoutReviewsInput.schema';
import { LocationUpdateWithoutReviewsInputObjectSchema as LocationUpdateWithoutReviewsInputObjectSchema } from './LocationUpdateWithoutReviewsInput.schema';
import { LocationUncheckedUpdateWithoutReviewsInputObjectSchema as LocationUncheckedUpdateWithoutReviewsInputObjectSchema } from './LocationUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationCreateWithoutReviewsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  upsert: z.lazy(() => LocationUpsertWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LocationUpdateToOneWithWhereWithoutReviewsInputObjectSchema), z.lazy(() => LocationUpdateWithoutReviewsInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutReviewsInputObjectSchema)]).optional()
}).strict();
export const LocationUpdateOneRequiredWithoutReviewsNestedInputObjectSchema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutReviewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpdateOneRequiredWithoutReviewsNestedInput>;
export const LocationUpdateOneRequiredWithoutReviewsNestedInputObjectZodSchema = makeSchema();
