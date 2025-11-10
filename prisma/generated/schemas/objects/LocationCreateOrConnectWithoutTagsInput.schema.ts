import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutTagsInputObjectSchema as LocationCreateWithoutTagsInputObjectSchema } from './LocationCreateWithoutTagsInput.schema';
import { LocationUncheckedCreateWithoutTagsInputObjectSchema as LocationUncheckedCreateWithoutTagsInputObjectSchema } from './LocationUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LocationCreateWithoutTagsInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const LocationCreateOrConnectWithoutTagsInputObjectSchema: z.ZodType<Prisma.LocationCreateOrConnectWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateOrConnectWithoutTagsInput>;
export const LocationCreateOrConnectWithoutTagsInputObjectZodSchema = makeSchema();
