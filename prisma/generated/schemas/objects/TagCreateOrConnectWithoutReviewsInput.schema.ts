import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema';
import { TagCreateWithoutReviewsInputObjectSchema as TagCreateWithoutReviewsInputObjectSchema } from './TagCreateWithoutReviewsInput.schema';
import { TagUncheckedCreateWithoutReviewsInputObjectSchema as TagUncheckedCreateWithoutReviewsInputObjectSchema } from './TagUncheckedCreateWithoutReviewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TagCreateWithoutReviewsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutReviewsInputObjectSchema)])
}).strict();
export const TagCreateOrConnectWithoutReviewsInputObjectSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateOrConnectWithoutReviewsInput>;
export const TagCreateOrConnectWithoutReviewsInputObjectZodSchema = makeSchema();
