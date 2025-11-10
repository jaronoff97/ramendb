import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './LocationTagWhereUniqueInput.schema';
import { LocationTagCreateWithoutTagInputObjectSchema as LocationTagCreateWithoutTagInputObjectSchema } from './LocationTagCreateWithoutTagInput.schema';
import { LocationTagUncheckedCreateWithoutTagInputObjectSchema as LocationTagUncheckedCreateWithoutTagInputObjectSchema } from './LocationTagUncheckedCreateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationTagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LocationTagCreateWithoutTagInputObjectSchema), z.lazy(() => LocationTagUncheckedCreateWithoutTagInputObjectSchema)])
}).strict();
export const LocationTagCreateOrConnectWithoutTagInputObjectSchema: z.ZodType<Prisma.LocationTagCreateOrConnectWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagCreateOrConnectWithoutTagInput>;
export const LocationTagCreateOrConnectWithoutTagInputObjectZodSchema = makeSchema();
