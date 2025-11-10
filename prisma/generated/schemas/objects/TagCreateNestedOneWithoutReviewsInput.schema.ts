import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TagCreateWithoutReviewsInputObjectSchema as TagCreateWithoutReviewsInputObjectSchema } from './TagCreateWithoutReviewsInput.schema';
import { TagUncheckedCreateWithoutReviewsInputObjectSchema as TagUncheckedCreateWithoutReviewsInputObjectSchema } from './TagUncheckedCreateWithoutReviewsInput.schema';
import { TagCreateOrConnectWithoutReviewsInputObjectSchema as TagCreateOrConnectWithoutReviewsInputObjectSchema } from './TagCreateOrConnectWithoutReviewsInput.schema';
import { TagWhereUniqueInputObjectSchema as TagWhereUniqueInputObjectSchema } from './TagWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TagCreateWithoutReviewsInputObjectSchema), z.lazy(() => TagUncheckedCreateWithoutReviewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutReviewsInputObjectSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputObjectSchema).optional()
}).strict();
export const TagCreateNestedOneWithoutReviewsInputObjectSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.TagCreateNestedOneWithoutReviewsInput>;
export const TagCreateNestedOneWithoutReviewsInputObjectZodSchema = makeSchema();
