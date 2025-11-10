import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateWithoutLocationsInputObjectSchema as TagCreateWithoutLocationsInputObjectSchema } from './TagCreateWithoutLocationsInput.schema';
import { TagUncheckedCreateWithoutLocationsInputObjectSchema as TagUncheckedCreateWithoutLocationsInputObjectSchema } from './TagUncheckedCreateWithoutLocationsInput.schema';
import { TagCreateOrConnectWithoutLocationsInputObjectSchema as TagCreateOrConnectWithoutLocationsInputObjectSchema } from './TagCreateOrConnectWithoutLocationsInput.schema';
import { TagUpsertWithoutLocationsInputObjectSchema as TagUpsertWithoutLocationsInputObjectSchema } from './TagUpsertWithoutLocationsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateToOneWithWhereWithoutLocationsInputObjectSchema as TagUpdateToOneWithWhereWithoutLocationsInputObjectSchema } from './TagUpdateToOneWithWhereWithoutLocationsInput.schema';
import { TagUpdateWithoutLocationsInputObjectSchema as TagUpdateWithoutLocationsInputObjectSchema } from './TagUpdateWithoutLocationsInput.schema';
import { TagUncheckedUpdateWithoutLocationsInputObjectSchema as TagUncheckedUpdateWithoutLocationsInputObjectSchema } from './TagUncheckedUpdateWithoutLocationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutLocationsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutLocationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutLocationsInputObjectSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutLocationsInputObjectSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TagUpdateToOneWithWhereWithoutLocationsInputObjectSchema), z.lazy(() => TagUpdateWithoutLocationsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutLocationsInputObjectSchema)]).optional()
}).strict();
export const TagUpdateOneRequiredWithoutLocationsNestedInputObjectSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutLocationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateOneRequiredWithoutLocationsNestedInput>;
export const TagUpdateOneRequiredWithoutLocationsNestedInputObjectZodSchema = makeSchema();
