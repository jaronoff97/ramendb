import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateWithoutDishesInputObjectSchema as LocationCreateWithoutDishesInputObjectSchema } from './LocationCreateWithoutDishesInput.schema';
import { LocationUncheckedCreateWithoutDishesInputObjectSchema as LocationUncheckedCreateWithoutDishesInputObjectSchema } from './LocationUncheckedCreateWithoutDishesInput.schema';
import { LocationCreateOrConnectWithoutDishesInputObjectSchema as LocationCreateOrConnectWithoutDishesInputObjectSchema } from './LocationCreateOrConnectWithoutDishesInput.schema';
import { LocationUpsertWithoutDishesInputObjectSchema as LocationUpsertWithoutDishesInputObjectSchema } from './LocationUpsertWithoutDishesInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationUpdateToOneWithWhereWithoutDishesInputObjectSchema as LocationUpdateToOneWithWhereWithoutDishesInputObjectSchema } from './LocationUpdateToOneWithWhereWithoutDishesInput.schema';
import { LocationUpdateWithoutDishesInputObjectSchema as LocationUpdateWithoutDishesInputObjectSchema } from './LocationUpdateWithoutDishesInput.schema';
import { LocationUncheckedUpdateWithoutDishesInputObjectSchema as LocationUncheckedUpdateWithoutDishesInputObjectSchema } from './LocationUncheckedUpdateWithoutDishesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationCreateWithoutDishesInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutDishesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutDishesInputObjectSchema).optional(),
  upsert: z.lazy(() => LocationUpsertWithoutDishesInputObjectSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => LocationUpdateToOneWithWhereWithoutDishesInputObjectSchema), z.lazy(() => LocationUpdateWithoutDishesInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutDishesInputObjectSchema)]).optional()
}).strict();
export const LocationUpdateOneRequiredWithoutDishesNestedInputObjectSchema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutDishesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpdateOneRequiredWithoutDishesNestedInput>;
export const LocationUpdateOneRequiredWithoutDishesNestedInputObjectZodSchema = makeSchema();
