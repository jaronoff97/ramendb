import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateWithoutTagsInputObjectSchema as LocationCreateWithoutTagsInputObjectSchema } from './LocationCreateWithoutTagsInput.schema';
import { LocationUncheckedCreateWithoutTagsInputObjectSchema as LocationUncheckedCreateWithoutTagsInputObjectSchema } from './LocationUncheckedCreateWithoutTagsInput.schema';
import { LocationCreateOrConnectWithoutTagsInputObjectSchema as LocationCreateOrConnectWithoutTagsInputObjectSchema } from './LocationCreateOrConnectWithoutTagsInput.schema';
import { LocationUpsertWithoutTagsInputObjectSchema as LocationUpsertWithoutTagsInputObjectSchema } from './LocationUpsertWithoutTagsInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateToOneWithWhereWithoutTagsInputObjectSchema as LocationUpdateToOneWithWhereWithoutTagsInputObjectSchema } from './LocationUpdateToOneWithWhereWithoutTagsInput.schema';
import { LocationUpdateWithoutTagsInputObjectSchema as LocationUpdateWithoutTagsInputObjectSchema } from './LocationUpdateWithoutTagsInput.schema';
import { LocationUncheckedUpdateWithoutTagsInputObjectSchema as LocationUncheckedUpdateWithoutTagsInputObjectSchema } from './LocationUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationCreateWithoutTagsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutTagsInputObjectSchema).optional(),
  upsert: z.lazy(() => LocationUpsertWithoutTagsInputObjectSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LocationUpdateToOneWithWhereWithoutTagsInputObjectSchema), z.lazy(() => LocationUpdateWithoutTagsInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutTagsInputObjectSchema)]).optional()
}).strict();
export const LocationUpdateOneRequiredWithoutTagsNestedInputObjectSchema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpdateOneRequiredWithoutTagsNestedInput>;
export const LocationUpdateOneRequiredWithoutTagsNestedInputObjectZodSchema = makeSchema();
