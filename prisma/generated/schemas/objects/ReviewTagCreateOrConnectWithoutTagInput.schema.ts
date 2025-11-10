import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewTagWhereUniqueInputObjectSchema as ReviewTagWhereUniqueInputObjectSchema } from './ReviewTagWhereUniqueInput.schema';
import { ReviewTagCreateWithoutTagInputObjectSchema as ReviewTagCreateWithoutTagInputObjectSchema } from './ReviewTagCreateWithoutTagInput.schema';
import { ReviewTagUncheckedCreateWithoutTagInputObjectSchema as ReviewTagUncheckedCreateWithoutTagInputObjectSchema } from './ReviewTagUncheckedCreateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewTagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewTagCreateWithoutTagInputObjectSchema), z.lazy(() => ReviewTagUncheckedCreateWithoutTagInputObjectSchema)])
}).strict();
export const ReviewTagCreateOrConnectWithoutTagInputObjectSchema: z.ZodType<Prisma.ReviewTagCreateOrConnectWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewTagCreateOrConnectWithoutTagInput>;
export const ReviewTagCreateOrConnectWithoutTagInputObjectZodSchema = makeSchema();
