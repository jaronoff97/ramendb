import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationWhereInputObjectSchema as LocationWhereInputObjectSchema } from './LocationWhereInput.schema';
import { LocationUpdateWithoutDishesInputObjectSchema as LocationUpdateWithoutDishesInputObjectSchema } from './LocationUpdateWithoutDishesInput.schema';
import { LocationUncheckedUpdateWithoutDishesInputObjectSchema as LocationUncheckedUpdateWithoutDishesInputObjectSchema } from './LocationUncheckedUpdateWithoutDishesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LocationUpdateWithoutDishesInputObjectSchema), z.lazy(() => LocationUncheckedUpdateWithoutDishesInputObjectSchema)])
}).strict();
export const LocationUpdateToOneWithWhereWithoutDishesInputObjectSchema: z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutDishesInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationUpdateToOneWithWhereWithoutDishesInput>;
export const LocationUpdateToOneWithWhereWithoutDishesInputObjectZodSchema = makeSchema();
