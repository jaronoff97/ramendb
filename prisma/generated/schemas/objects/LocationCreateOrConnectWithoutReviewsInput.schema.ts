import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutReviewsInputObjectSchema as LocationCreateWithoutReviewsInputObjectSchema } from './LocationCreateWithoutReviewsInput.schema';
import { LocationUncheckedCreateWithoutReviewsInputObjectSchema as LocationUncheckedCreateWithoutReviewsInputObjectSchema } from './LocationUncheckedCreateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LocationCreateWithoutReviewsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutReviewsInputObjectSchema)])
}).strict();
export const LocationCreateOrConnectWithoutReviewsInputObjectSchema: z.ZodType<Prisma.LocationCreateOrConnectWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateOrConnectWithoutReviewsInput>;
export const LocationCreateOrConnectWithoutReviewsInputObjectZodSchema = makeSchema();
