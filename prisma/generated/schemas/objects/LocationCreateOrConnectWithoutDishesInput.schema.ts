import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema';
import { LocationCreateWithoutDishesInputObjectSchema as LocationCreateWithoutDishesInputObjectSchema } from './LocationCreateWithoutDishesInput.schema';
import { LocationUncheckedCreateWithoutDishesInputObjectSchema as LocationUncheckedCreateWithoutDishesInputObjectSchema } from './LocationUncheckedCreateWithoutDishesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LocationCreateWithoutDishesInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutDishesInputObjectSchema)])
}).strict();
export const LocationCreateOrConnectWithoutDishesInputObjectSchema: z.ZodType<Prisma.LocationCreateOrConnectWithoutDishesInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateOrConnectWithoutDishesInput>;
export const LocationCreateOrConnectWithoutDishesInputObjectZodSchema = makeSchema();
