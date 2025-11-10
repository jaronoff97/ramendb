import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateWithoutLocationsInputObjectSchema as TagCreateWithoutLocationsInputObjectSchema } from './TagCreateWithoutLocationsInput.schema';
import { TagUncheckedCreateWithoutLocationsInputObjectSchema as TagUncheckedCreateWithoutLocationsInputObjectSchema } from './TagUncheckedCreateWithoutLocationsInput.schema';
import { TagCreateOrConnectWithoutLocationsInputObjectSchema as TagCreateOrConnectWithoutLocationsInputObjectSchema } from './TagCreateOrConnectWithoutLocationsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutLocationsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutLocationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutLocationsInputObjectSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional()
}).strict();
export const TagCreateNestedOneWithoutLocationsInputObjectSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutLocationsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateNestedOneWithoutLocationsInput>;
export const TagCreateNestedOneWithoutLocationsInputObjectZodSchema = makeSchema();
