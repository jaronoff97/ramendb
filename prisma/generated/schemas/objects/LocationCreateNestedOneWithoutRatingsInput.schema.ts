import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateWithoutRatingsInputObjectSchema as LocationCreateWithoutRatingsInputObjectSchema } from './LocationCreateWithoutRatingsInput.schema';
import { LocationUncheckedCreateWithoutRatingsInputObjectSchema as LocationUncheckedCreateWithoutRatingsInputObjectSchema } from './LocationUncheckedCreateWithoutRatingsInput.schema';
import { LocationCreateOrConnectWithoutRatingsInputObjectSchema as LocationCreateOrConnectWithoutRatingsInputObjectSchema } from './LocationCreateOrConnectWithoutRatingsInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationCreateWithoutRatingsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutRatingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutRatingsInputObjectSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional()
}).strict();
export const LocationCreateNestedOneWithoutRatingsInputObjectSchema: z.ZodType<Prisma.LocationCreateNestedOneWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateNestedOneWithoutRatingsInput>;
export const LocationCreateNestedOneWithoutRatingsInputObjectZodSchema = makeSchema();
