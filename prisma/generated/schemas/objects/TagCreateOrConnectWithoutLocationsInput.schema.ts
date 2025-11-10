import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutLocationsInputObjectSchema as TagCreateWithoutLocationsInputObjectSchema } from './TagCreateWithoutLocationsInput.schema';
import { TagUncheckedCreateWithoutLocationsInputObjectSchema as TagUncheckedCreateWithoutLocationsInputObjectSchema } from './TagUncheckedCreateWithoutLocationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagCreateWithoutLocationsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutLocationsInputObjectSchema)])
}).strict();
export const TagCreateOrConnectWithoutLocationsInputObjectSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutLocationsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateOrConnectWithoutLocationsInput>;
export const TagCreateOrConnectWithoutLocationsInputObjectZodSchema = makeSchema();
