import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagWhereUniqueInputObjectSchema as LocationTagWhereUniqueInputObjectSchema } from './LocationTagWhereUniqueInput.schema';
import { LocationTagUpdateWithoutTagInputObjectSchema as LocationTagUpdateWithoutTagInputObjectSchema } from './LocationTagUpdateWithoutTagInput.schema';
import { LocationTagUncheckedUpdateWithoutTagInputObjectSchema as LocationTagUncheckedUpdateWithoutTagInputObjectSchema } from './LocationTagUncheckedUpdateWithoutTagInput.schema';
import { LocationTagCreateWithoutTagInputObjectSchema as LocationTagCreateWithoutTagInputObjectSchema } from './LocationTagCreateWithoutTagInput.schema';
import { LocationTagUncheckedCreateWithoutTagInputObjectSchema as LocationTagUncheckedCreateWithoutTagInputObjectSchema } from './LocationTagUncheckedCreateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationTagWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LocationTagUpdateWithoutTagInputObjectSchema), z.lazy(() => LocationTagUncheckedUpdateWithoutTagInputObjectSchema)]),
  create: z.union([z.lazy(() => LocationTagCreateWithoutTagInputObjectSchema), z.lazy(() => LocationTagUncheckedCreateWithoutTagInputObjectSchema)])
}).strict();
export const LocationTagUpsertWithWhereUniqueWithoutTagInputObjectSchema: z.ZodType<Prisma.LocationTagUpsertWithWhereUniqueWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUpsertWithWhereUniqueWithoutTagInput>;
export const LocationTagUpsertWithWhereUniqueWithoutTagInputObjectZodSchema = makeSchema();
