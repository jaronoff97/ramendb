import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereInputObjectSchema as RatingWhereInputObjectSchema } from './RatingWhereInput.schema';
import { RatingUpdateWithoutTagsInputObjectSchema as RatingUpdateWithoutTagsInputObjectSchema } from './RatingUpdateWithoutTagsInput.schema';
import { RatingUncheckedUpdateWithoutTagsInputObjectSchema as RatingUncheckedUpdateWithoutTagsInputObjectSchema } from './RatingUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => RatingUpdateWithoutTagsInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutTagsInputObjectSchema)])
}).strict();
export const RatingUpdateToOneWithWhereWithoutTagsInputObjectSchema: z.ZodType<Prisma.RatingUpdateToOneWithWhereWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateToOneWithWhereWithoutTagsInput>;
export const RatingUpdateToOneWithWhereWithoutTagsInputObjectZodSchema = makeSchema();
