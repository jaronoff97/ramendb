import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateWithoutReviewsInputObjectSchema as LocationCreateWithoutReviewsInputObjectSchema } from './LocationCreateWithoutReviewsInput.schema';
import { LocationUncheckedCreateWithoutReviewsInputObjectSchema as LocationUncheckedCreateWithoutReviewsInputObjectSchema } from './LocationUncheckedCreateWithoutReviewsInput.schema';
import { LocationCreateOrConnectWithoutReviewsInputObjectSchema as LocationCreateOrConnectWithoutReviewsInputObjectSchema } from './LocationCreateOrConnectWithoutReviewsInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationCreateWithoutReviewsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional()
}).strict();
export const LocationCreateNestedOneWithoutReviewsInputObjectSchema: z.ZodType<Prisma.LocationCreateNestedOneWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateNestedOneWithoutReviewsInput>;
export const LocationCreateNestedOneWithoutReviewsInputObjectZodSchema = makeSchema();
