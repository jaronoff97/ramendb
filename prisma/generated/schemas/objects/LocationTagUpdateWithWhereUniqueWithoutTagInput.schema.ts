import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './LocationTagWhereUniqueInput.schema';
import { LocationTagUpdateWithoutTagInputObjectSchema as LocationTagUpdateWithoutTagInputObjectSchema } from './LocationTagUpdateWithoutTagInput.schema';
import { LocationTagUncheckedUpdateWithoutTagInputObjectSchema as LocationTagUncheckedUpdateWithoutTagInputObjectSchema } from './LocationTagUncheckedUpdateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationTagWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LocationTagUpdateWithoutTagInputObjectSchema), z.lazy(() => LocationTagUncheckedUpdateWithoutTagInputObjectSchema)])
}).strict();
export const LocationTagUpdateWithWhereUniqueWithoutTagInputObjectSchema: z.ZodType<Prisma.LocationTagUpdateWithWhereUniqueWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUpdateWithWhereUniqueWithoutTagInput>;
export const LocationTagUpdateWithWhereUniqueWithoutTagInputObjectZodSchema = makeSchema();
