import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagUpdateWithoutLocationsInputObjectSchema as TagUpdateWithoutLocationsInputObjectSchema } from './TagUpdateWithoutLocationsInput.schema';
import { TagUncheckedUpdateWithoutLocationsInputObjectSchema as TagUncheckedUpdateWithoutLocationsInputObjectSchema } from './TagUncheckedUpdateWithoutLocationsInput.schema';
import { TagCreateWithoutLocationsInputObjectSchema as TagCreateWithoutLocationsInputObjectSchema } from './TagCreateWithoutLocationsInput.schema';
import { TagUncheckedCreateWithoutLocationsInputObjectSchema as TagUncheckedCreateWithoutLocationsInputObjectSchema } from './TagUncheckedCreateWithoutLocationsInput.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TagUpdateWithoutLocationsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutLocationsInputObjectSchema)]),
  create: z.union([z.lazy(() => TagCreateWithoutLocationsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutLocationsInputObjectSchema)]),
  where: z.lazy(() => TagWhereInputObjectSchema).optional()
}).strict();
export const TagUpsertWithoutLocationsInputObjectSchema: z.ZodType<Prisma.TagUpsertWithoutLocationsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpsertWithoutLocationsInput>;
export const TagUpsertWithoutLocationsInputObjectZodSchema = makeSchema();
