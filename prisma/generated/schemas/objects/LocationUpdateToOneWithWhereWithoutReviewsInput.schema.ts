import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { LocationUpdateWithoutReviewsInputObjectSchema as LocationUpdateWithoutReviewsInputObjectSchema } from './LocationUpdateWithoutReviewsInput.schema';
import { LocationUncheckedUpdateWithoutReviewsInputObjectSchema as LocationUncheckedUpdateWithoutReviewsInputObjectSchema } from './LocationUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LocationUpdateWithoutReviewsInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutReviewsInputObjectSchema)])
}).strict();
export const LocationUpdateToOneWithWhereWithoutReviewsInputObjectSchema: z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutReviewsInput>;
export const LocationUpdateToOneWithWhereWithoutReviewsInputObjectZodSchema = makeSchema();
