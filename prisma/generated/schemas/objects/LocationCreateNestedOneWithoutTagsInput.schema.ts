import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateWithoutTagsInputObjectSchema as LocationCreateWithoutTagsInputObjectSchema } from './LocationCreateWithoutTagsInput.schema';
import { LocationUncheckedCreateWithoutTagsInputObjectSchema as LocationUncheckedCreateWithoutTagsInputObjectSchema } from './LocationUncheckedCreateWithoutTagsInput.schema';
import { LocationCreateOrConnectWithoutTagsInputObjectSchema as LocationCreateOrConnectWithoutTagsInputObjectSchema } from './LocationCreateOrConnectWithoutTagsInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationCreateWithoutTagsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutTagsInputObjectSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional()
}).strict();
export const LocationCreateNestedOneWithoutTagsInputObjectSchema: z.ZodType<Prisma.LocationCreateNestedOneWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateNestedOneWithoutTagsInput>;
export const LocationCreateNestedOneWithoutTagsInputObjectZodSchema = makeSchema();
