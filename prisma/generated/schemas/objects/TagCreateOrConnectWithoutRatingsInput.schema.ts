import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutRatingsInputObjectSchema as TagCreateWithoutRatingsInputObjectSchema } from './TagCreateWithoutRatingsInput.schema';
import { TagUncheckedCreateWithoutRatingsInputObjectSchema as TagUncheckedCreateWithoutRatingsInputObjectSchema } from './TagUncheckedCreateWithoutRatingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagCreateWithoutRatingsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutRatingsInputObjectSchema)])
}).strict();
export const TagCreateOrConnectWithoutRatingsInputObjectSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateOrConnectWithoutRatingsInput>;
export const TagCreateOrConnectWithoutRatingsInputObjectZodSchema = makeSchema();
