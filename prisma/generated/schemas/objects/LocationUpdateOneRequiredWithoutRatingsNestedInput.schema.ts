import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateWithoutRatingsInputObjectSchema as LocationCreateWithoutRatingsInputObjectSchema } from './LocationCreateWithoutRatingsInput.schema';
import { LocationUncheckedCreateWithoutRatingsInputObjectSchema as LocationUncheckedCreateWithoutRatingsInputObjectSchema } from './LocationUncheckedCreateWithoutRatingsInput.schema';
import { LocationCreateOrConnectWithoutRatingsInputObjectSchema as LocationCreateOrConnectWithoutRatingsInputObjectSchema } from './LocationCreateOrConnectWithoutRatingsInput.schema';
import { LocationUpsertWithoutRatingsInputObjectSchema as LocationUpsertWithoutRatingsInputObjectSchema } from './LocationUpsertWithoutRatingsInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateToOneWithWhereWithoutRatingsInputObjectSchema as LocationUpdateToOneWithWhereWithoutRatingsInputObjectSchema } from './LocationUpdateToOneWithWhereWithoutRatingsInput.schema';
import { LocationUpdateWithoutRatingsInputObjectSchema as LocationUpdateWithoutRatingsInputObjectSchema } from './LocationUpdateWithoutRatingsInput.schema';
import { LocationUncheckedUpdateWithoutRatingsInputObjectSchema as LocationUncheckedUpdateWithoutRatingsInputObjectSchema } from './LocationUncheckedUpdateWithoutRatingsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationCreateWithoutRatingsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutRatingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutRatingsInputObjectSchema).optional(),
  upsert: z.lazy(() => LocationUpsertWithoutRatingsInputObjectSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LocationUpdateToOneWithWhereWithoutRatingsInputObjectSchema), z.lazy(() => LocationUpdateWithoutRatingsInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutRatingsInputObjectSchema)]).optional()
}).strict();
export const LocationUpdateOneRequiredWithoutRatingsNestedInputObjectSchema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutRatingsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpdateOneRequiredWithoutRatingsNestedInput>;
export const LocationUpdateOneRequiredWithoutRatingsNestedInputObjectZodSchema = makeSchema();
