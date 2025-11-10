import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema';
import { TagUpdateWithoutRatingsInputObjectSchema as TagUpdateWithoutRatingsInputObjectSchema } from './TagUpdateWithoutRatingsInput.schema';
import { TagUncheckedUpdateWithoutRatingsInputObjectSchema as TagUncheckedUpdateWithoutRatingsInputObjectSchema } from './TagUncheckedUpdateWithoutRatingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TagUpdateWithoutRatingsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutRatingsInputObjectSchema)])
}).strict();
export const TagUpdateToOneWithWhereWithoutRatingsInputObjectSchema: z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateToOneWithWhereWithoutRatingsInput>;
export const TagUpdateToOneWithWhereWithoutRatingsInputObjectZodSchema = makeSchema();
