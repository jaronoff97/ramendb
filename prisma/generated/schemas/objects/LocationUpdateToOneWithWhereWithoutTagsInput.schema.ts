import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { LocationUpdateWithoutTagsInputObjectSchema as LocationUpdateWithoutTagsInputObjectSchema } from './LocationUpdateWithoutTagsInput.schema';
import { LocationUncheckedUpdateWithoutTagsInputObjectSchema as LocationUncheckedUpdateWithoutTagsInputObjectSchema } from './LocationUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LocationUpdateWithoutTagsInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutTagsInputObjectSchema)])
}).strict();
export const LocationUpdateToOneWithWhereWithoutTagsInputObjectSchema: z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutTagsInput>;
export const LocationUpdateToOneWithWhereWithoutTagsInputObjectZodSchema = makeSchema();
