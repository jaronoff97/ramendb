import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './LocationTagWhereUniqueInput.schema';
import { LocationTagUpdateWithoutLocationInputObjectSchema as LocationTagUpdateWithoutLocationInputObjectSchema } from './LocationTagUpdateWithoutLocationInput.schema';
import { LocationTagUncheckedUpdateWithoutLocationInputObjectSchema as LocationTagUncheckedUpdateWithoutLocationInputObjectSchema } from './LocationTagUncheckedUpdateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationTagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LocationTagUpdateWithoutLocationInputObjectSchema), z.lazy(() => LocationTagUncheckedUpdateWithoutLocationInputObjectSchema)])
}).strict();
export const LocationTagUpdateWithWhereUniqueWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationTagUpdateWithWhereUniqueWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUpdateWithWhereUniqueWithoutLocationInput>;
export const LocationTagUpdateWithWhereUniqueWithoutLocationInputObjectZodSchema = makeSchema();
