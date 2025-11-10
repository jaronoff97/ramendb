import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateWithoutTagsInputObjectSchema as RatingCreateWithoutTagsInputObjectSchema } from './RatingCreateWithoutTagsInput.schema';
import { RatingUncheckedCreateWithoutTagsInputObjectSchema as RatingUncheckedCreateWithoutTagsInputObjectSchema } from './RatingUncheckedCreateWithoutTagsInput.schema';
import { RatingCreateOrConnectWithoutTagsInputObjectSchema as RatingCreateOrConnectWithoutTagsInputObjectSchema } from './RatingCreateOrConnectWithoutTagsInput.schema';
import { RatingUpsertWithoutTagsInputObjectSchema as RatingUpsertWithoutTagsInputObjectSchema } from './RatingUpsertWithoutTagsInput.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingUpdateToOneWithWhereWithoutTagsInputObjectSchema as RatingUpdateToOneWithWhereWithoutTagsInputObjectSchema } from './RatingUpdateToOneWithWhereWithoutTagsInput.schema';
import { RatingUpdateWithoutTagsInputObjectSchema as RatingUpdateWithoutTagsInputObjectSchema } from './RatingUpdateWithoutTagsInput.schema';
import { RatingUncheckedUpdateWithoutTagsInputObjectSchema as RatingUncheckedUpdateWithoutTagsInputObjectSchema } from './RatingUncheckedUpdateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingCreateWithoutTagsInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RatingCreateOrConnectWithoutTagsInputObjectSchema).optional(),
  upsert: z.lazy(() => RatingUpsertWithoutTagsInputObjectSchema).optional(),
  connect: z.lazy(() => RatingWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RatingUpdateToOneWithWhereWithoutTagsInputObjectSchema), z.lazy(() => RatingUpdateWithoutTagsInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutTagsInputObjectSchema)]).optional()
}).strict();
export const RatingUpdateOneRequiredWithoutTagsNestedInputObjectSchema: z.ZodType<Prisma.RatingUpdateOneRequiredWithoutTagsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateOneRequiredWithoutTagsNestedInput>;
export const RatingUpdateOneRequiredWithoutTagsNestedInputObjectZodSchema = makeSchema();
