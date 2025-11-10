import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationUpdateWithoutRatingsInputObjectSchema as LocationUpdateWithoutRatingsInputObjectSchema } from './LocationUpdateWithoutRatingsInput.schema';
import { LocationUncheckedUpdateWithoutRatingsInputObjectSchema as LocationUncheckedUpdateWithoutRatingsInputObjectSchema } from './LocationUncheckedUpdateWithoutRatingsInput.schema';
import { LocationCreateWithoutRatingsInputObjectSchema as LocationCreateWithoutRatingsInputObjectSchema } from './LocationCreateWithoutRatingsInput.schema';
import { LocationUncheckedCreateWithoutRatingsInputObjectSchema as LocationUncheckedCreateWithoutRatingsInputObjectSchema } from './LocationUncheckedCreateWithoutRatingsInput.schema';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LocationUpdateWithoutRatingsInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutRatingsInputObjectSchema)]),
  create: z.union([z.lazy(() => LocationCreateWithoutRatingsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutRatingsInputObjectSchema)]),
  where: z.lazy(() => LocationWhereInputObjectSchema).optional()
}).strict();
export const LocationUpsertWithoutRatingsInputObjectSchema: z.ZodType<Prisma.LocationUpsertWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpsertWithoutRatingsInput>;
export const LocationUpsertWithoutRatingsInputObjectZodSchema = makeSchema();
