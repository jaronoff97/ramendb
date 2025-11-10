import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateWithoutRatingsInputObjectSchema as TagCreateWithoutRatingsInputObjectSchema } from './TagCreateWithoutRatingsInput.schema';
import { TagUncheckedCreateWithoutRatingsInputObjectSchema as TagUncheckedCreateWithoutRatingsInputObjectSchema } from './TagUncheckedCreateWithoutRatingsInput.schema';
import { TagCreateOrConnectWithoutRatingsInputObjectSchema as TagCreateOrConnectWithoutRatingsInputObjectSchema } from './TagCreateOrConnectWithoutRatingsInput.schema';
import { TagUpsertWithoutRatingsInputObjectSchema as TagUpsertWithoutRatingsInputObjectSchema } from './TagUpsertWithoutRatingsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagUpdateToOneWithWhereWithoutRatingsInputObjectSchema as TagUpdateToOneWithWhereWithoutRatingsInputObjectSchema } from './TagUpdateToOneWithWhereWithoutRatingsInput.schema';
import { TagUpdateWithoutRatingsInputObjectSchema as TagUpdateWithoutRatingsInputObjectSchema } from './TagUpdateWithoutRatingsInput.schema';
import { TagUncheckedUpdateWithoutRatingsInputObjectSchema as TagUncheckedUpdateWithoutRatingsInputObjectSchema } from './TagUncheckedUpdateWithoutRatingsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutRatingsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutRatingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutRatingsInputObjectSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutRatingsInputObjectSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TagUpdateToOneWithWhereWithoutRatingsInputObjectSchema), z.lazy(() => TagUpdateWithoutRatingsInputObjectSchema), z.lazy(() => TagUncheckedUpdateWithoutRatingsInputObjectSchema)]).optional()
}).strict();
export const TagUpdateOneRequiredWithoutRatingsNestedInputObjectSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutRatingsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TagUpdateOneRequiredWithoutRatingsNestedInput>;
export const TagUpdateOneRequiredWithoutRatingsNestedInputObjectZodSchema = makeSchema();
