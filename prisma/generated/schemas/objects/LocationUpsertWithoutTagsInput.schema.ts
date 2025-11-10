import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationUpdateWithoutTagsInputObjectSchema as LocationUpdateWithoutTagsInputObjectSchema } from './LocationUpdateWithoutTagsInput.schema';
import { LocationUncheckedUpdateWithoutTagsInputObjectSchema as LocationUncheckedUpdateWithoutTagsInputObjectSchema } from './LocationUncheckedUpdateWithoutTagsInput.schema';
import { LocationCreateWithoutTagsInputObjectSchema as LocationCreateWithoutTagsInputObjectSchema } from './LocationCreateWithoutTagsInput.schema';
import { LocationUncheckedCreateWithoutTagsInputObjectSchema as LocationUncheckedCreateWithoutTagsInputObjectSchema } from './LocationUncheckedCreateWithoutTagsInput.schema';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LocationUpdateWithoutTagsInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => LocationCreateWithoutTagsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutTagsInputObjectSchema)]),
  where: z.lazy(() => LocationWhereInputObjectSchema).optional()
}).strict();
export const LocationUpsertWithoutTagsInputObjectSchema: z.ZodType<Prisma.LocationUpsertWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpsertWithoutTagsInput>;
export const LocationUpsertWithoutTagsInputObjectZodSchema = makeSchema();
