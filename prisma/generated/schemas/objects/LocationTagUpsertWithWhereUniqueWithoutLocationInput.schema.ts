import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './LocationTagWhereUniqueInput.schema';
import { LocationTagUpdateWithoutLocationInputObjectSchema as LocationTagUpdateWithoutLocationInputObjectSchema } from './LocationTagUpdateWithoutLocationInput.schema';
import { LocationTagUncheckedUpdateWithoutLocationInputObjectSchema as LocationTagUncheckedUpdateWithoutLocationInputObjectSchema } from './LocationTagUncheckedUpdateWithoutLocationInput.schema';
import { LocationTagCreateWithoutLocationInputObjectSchema as LocationTagCreateWithoutLocationInputObjectSchema } from './LocationTagCreateWithoutLocationInput.schema';
import { LocationTagUncheckedCreateWithoutLocationInputObjectSchema as LocationTagUncheckedCreateWithoutLocationInputObjectSchema } from './LocationTagUncheckedCreateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationTagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LocationTagUpdateWithoutLocationInputObjectSchema), z.lazy(() => LocationTagUncheckedUpdateWithoutLocationInputObjectSchema)]),
  create: z.union([z.lazy(() => LocationTagCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationTagUncheckedCreateWithoutLocationInputObjectSchema)])
}).strict();
export const LocationTagUpsertWithWhereUniqueWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationTagUpsertWithWhereUniqueWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUpsertWithWhereUniqueWithoutLocationInput>;
export const LocationTagUpsertWithWhereUniqueWithoutLocationInputObjectZodSchema = makeSchema();
