import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagUpdateWithoutRatingsInputObjectSchema as TagUpdateWithoutRatingsInputObjectSchema } from './TagUpdateWithoutRatingsInput.schema';
import { TagUncheckedUpdateWithoutRatingsInputObjectSchema as TagUncheckedUpdateWithoutRatingsInputObjectSchema } from './TagUncheckedUpdateWithoutRatingsInput.schema';
import { TagCreateWithoutRatingsInputObjectSchema as TagCreateWithoutRatingsInputObjectSchema } from './TagCreateWithoutRatingsInput.schema';
import { TagUncheckedCreateWithoutRatingsInputObjectSchema as TagUncheckedCreateWithoutRatingsInputObjectSchema } from './TagUncheckedCreateWithoutRatingsInput.schema';
import { TagWhereInputObjectSchema as TagWhereInputObjectSchema } from './TagWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TagUpdateWithoutRatingsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutRatingsInputObjectSchema)]),
  create: z.union([z.lazy(() => TagCreateWithoutRatingsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutRatingsInputObjectSchema)]),
  where: z.lazy(() => TagWhereInputObjectSchema).optional()
}).strict();
export const TagUpsertWithoutRatingsInputObjectSchema: z.ZodType<Prisma.TagUpsertWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpsertWithoutRatingsInput>;
export const TagUpsertWithoutRatingsInputObjectZodSchema = makeSchema();
