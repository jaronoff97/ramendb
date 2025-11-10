import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationUpdateWithoutDishesInputObjectSchema as LocationUpdateWithoutDishesInputObjectSchema } from './LocationUpdateWithoutDishesInput.schema';
import { LocationUncheckedUpdateWithoutDishesInputObjectSchema as LocationUncheckedUpdateWithoutDishesInputObjectSchema } from './LocationUncheckedUpdateWithoutDishesInput.schema';
import { LocationCreateWithoutDishesInputObjectSchema as LocationCreateWithoutDishesInputObjectSchema } from './LocationCreateWithoutDishesInput.schema';
import { LocationUncheckedCreateWithoutDishesInputObjectSchema as LocationUncheckedCreateWithoutDishesInputObjectSchema } from './LocationUncheckedCreateWithoutDishesInput.schema';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LocationUpdateWithoutDishesInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutDishesInputObjectSchema)]),
  create: z.union([z.lazy(() => LocationCreateWithoutDishesInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutDishesInputObjectSchema)]),
  where: z.lazy(() => LocationWhereInputObjectSchema).optional()
}).strict();
export const LocationUpsertWithoutDishesInputObjectSchema: z.ZodType<Prisma.LocationUpsertWithoutDishesInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpsertWithoutDishesInput>;
export const LocationUpsertWithoutDishesInputObjectZodSchema = makeSchema();
