import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { LocationUpdateWithoutRatingsInputObjectSchema as LocationUpdateWithoutRatingsInputObjectSchema } from './LocationUpdateWithoutRatingsInput.schema';
import { LocationUncheckedUpdateWithoutRatingsInputObjectSchema as LocationUncheckedUpdateWithoutRatingsInputObjectSchema } from './LocationUncheckedUpdateWithoutRatingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LocationUpdateWithoutRatingsInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutRatingsInputObjectSchema)])
}).strict();
export const LocationUpdateToOneWithWhereWithoutRatingsInputObjectSchema: z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutRatingsInput>;
export const LocationUpdateToOneWithWhereWithoutRatingsInputObjectZodSchema = makeSchema();
