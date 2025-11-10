import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingUpdateWithoutTagsInputObjectSchema as RatingUpdateWithoutTagsInputObjectSchema } from './RatingUpdateWithoutTagsInput.schema';
import { RatingUncheckedUpdateWithoutTagsInputObjectSchema as RatingUncheckedUpdateWithoutTagsInputObjectSchema } from './RatingUncheckedUpdateWithoutTagsInput.schema';
import { RatingCreateWithoutTagsInputObjectSchema as RatingCreateWithoutTagsInputObjectSchema } from './RatingCreateWithoutTagsInput.schema';
import { RatingUncheckedCreateWithoutTagsInputObjectSchema as RatingUncheckedCreateWithoutTagsInputObjectSchema } from './RatingUncheckedCreateWithoutTagsInput.schema';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RatingUpdateWithoutTagsInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutTagsInputObjectSchema)]),
  create: z.union([z.lazy(() => RatingCreateWithoutTagsInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutTagsInputObjectSchema)]),
  where: z.lazy(() => RatingWhereInputObjectSchema).optional()
}).strict();
export const RatingUpsertWithoutTagsInputObjectSchema: z.ZodType<Prisma.RatingUpsertWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpsertWithoutTagsInput>;
export const RatingUpsertWithoutTagsInputObjectZodSchema = makeSchema();
