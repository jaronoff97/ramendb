import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationCreateWithoutDishesInputObjectSchema as LocationCreateWithoutDishesInputObjectSchema } from './LocationCreateWithoutDishesInput.schema';
import { LocationUncheckedCreateWithoutDishesInputObjectSchema as LocationUncheckedCreateWithoutDishesInputObjectSchema } from './LocationUncheckedCreateWithoutDishesInput.schema';
import { LocationCreateOrConnectWithoutDishesInputObjectSchema as LocationCreateOrConnectWithoutDishesInputObjectSchema } from './LocationCreateOrConnectWithoutDishesInput.schema';
import { LocationWhereUniqueInputObjectSchema as LocationWhereUniqueInputObjectSchema } from './LocationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LocationCreateWithoutDishesInputObjectSchema), z.lazy(() => LocationUncheckedCreateWithoutDishesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LocationCreateOrConnectWithoutDishesInputObjectSchema).optional(),
  connect: z.lazy(() => LocationWhereUniqueInputObjectSchema).optional()
}).strict();
export const LocationCreateNestedOneWithoutDishesInputObjectSchema: z.ZodType<Prisma.LocationCreateNestedOneWithoutDishesInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationCreateNestedOneWithoutDishesInput>;
export const LocationCreateNestedOneWithoutDishesInputObjectZodSchema = makeSchema();
