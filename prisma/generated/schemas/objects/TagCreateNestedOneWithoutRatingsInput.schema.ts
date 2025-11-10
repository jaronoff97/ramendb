import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateWithoutRatingsInputObjectSchema as TagCreateWithoutRatingsInputObjectSchema } from './TagCreateWithoutRatingsInput.schema';
import { TagUncheckedCreateWithoutRatingsInputObjectSchema as TagUncheckedCreateWithoutRatingsInputObjectSchema } from './TagUncheckedCreateWithoutRatingsInput.schema';
import { TagCreateOrConnectWithoutRatingsInputObjectSchema as TagCreateOrConnectWithoutRatingsInputObjectSchema } from './TagCreateOrConnectWithoutRatingsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutRatingsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutRatingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutRatingsInputObjectSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional()
}).strict();
export const TagCreateNestedOneWithoutRatingsInputObjectSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateNestedOneWithoutRatingsInput>;
export const TagCreateNestedOneWithoutRatingsInputObjectZodSchema = makeSchema();
