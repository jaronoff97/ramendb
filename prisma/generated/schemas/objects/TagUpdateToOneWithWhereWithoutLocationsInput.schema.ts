import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema';
import { TagUpdateWithoutLocationsInputObjectSchema as TagUpdateWithoutLocationsInputObjectSchema } from './TagUpdateWithoutLocationsInput.schema';
import { TagUncheckedUpdateWithoutLocationsInputObjectSchema as TagUncheckedUpdateWithoutLocationsInputObjectSchema } from './TagUncheckedUpdateWithoutLocationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TagUpdateWithoutLocationsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutLocationsInputObjectSchema)])
}).strict();
export const TagUpdateToOneWithWhereWithoutLocationsInputObjectSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutLocationsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutLocationsInput>;
export const TagUpdateToOneWithWhereWithoutLocationsInputObjectZodSchema = makeSchema();
