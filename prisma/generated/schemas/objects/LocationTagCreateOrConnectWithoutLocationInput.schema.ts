import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './LocationTagWhereUniqueInput.schema';
import { LocationTagCreateWithoutLocationInputObjectSchema as LocationTagCreateWithoutLocationInputObjectSchema } from './LocationTagCreateWithoutLocationInput.schema';
import { LocationTagUncheckedCreateWithoutLocationInputObjectSchema as LocationTagUncheckedCreateWithoutLocationInputObjectSchema } from './LocationTagUncheckedCreateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationTagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LocationTagCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationTagUncheckedCreateWithoutLocationInputObjectSchema)])
}).strict();
export const LocationTagCreateOrConnectWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationTagCreateOrConnectWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCreateOrConnectWithoutLocationInput>;
export const LocationTagCreateOrConnectWithoutLocationInputObjectZodSchema = makeSchema();
