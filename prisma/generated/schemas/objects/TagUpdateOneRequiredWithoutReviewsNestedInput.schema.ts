import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateWithoutReviewsInputObjectSchema as TagCreateWithoutReviewsInputObjectSchema } from './TagCreateWithoutReviewsInput.schema';
import { TagUncheckedCreateWithoutReviewsInputObjectSchema as TagUncheckedCreateWithoutReviewsInputObjectSchema } from './TagUncheckedCreateWithoutReviewsInput.schema';
import { TagCreateOrConnectWithoutReviewsInputObjectSchema as TagCreateOrConnectWithoutReviewsInputObjectSchema } from './TagCreateOrConnectWithoutReviewsInput.schema';
import { TagUpsertWithoutReviewsInputObjectSchema as TagUpsertWithoutReviewsInputObjectSchema } from './TagUpsertWithoutReviewsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateToOneWithWhereWithoutReviewsInputObjectSchema as TagUpdateToOneWithWhereWithoutReviewsInputObjectSchema } from './TagUpdateToOneWithWhereWithoutReviewsInput.schema';
import { TagUpdateWithoutReviewsInputObjectSchema as TagUpdateWithoutReviewsInputObjectSchema } from './TagUpdateWithoutReviewsInput.schema';
import { TagUncheckedUpdateWithoutReviewsInputObjectSchema as TagUncheckedUpdateWithoutReviewsInputObjectSchema } from './TagUncheckedUpdateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutReviewsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TagUpdateToOneWithWhereWithoutReviewsInputObjectSchema), z.lazy(() => TagUpdateWithoutReviewsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutReviewsInputObjectSchema)]).optional()
}).strict();
export const TagUpdateOneRequiredWithoutReviewsNestedInputObjectSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutReviewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateOneRequiredWithoutReviewsNestedInput>;
export const TagUpdateOneRequiredWithoutReviewsNestedInputObjectZodSchema = makeSchema();
