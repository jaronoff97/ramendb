import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutRatingsInputObjectSchema as LocationCreateWithoutRatingsInputObjectSchema } from './LocationCreateWithoutRatingsInput.schema';
import { LocationUncheckedCreateWithoutRatingsInputObjectSchema as LocationUncheckedCreateWithoutRatingsInputObjectSchema } from './LocationUncheckedCreateWithoutRatingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LocationCreateWithoutRatingsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutRatingsInputObjectSchema)])
}).strict();
export const LocationCreateOrConnectWithoutRatingsInputObjectSchema: z.ZodType<Prisma.LocationCreateOrConnectWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateOrConnectWithoutRatingsInput>;
export const LocationCreateOrConnectWithoutRatingsInputObjectZodSchema = makeSchema();
