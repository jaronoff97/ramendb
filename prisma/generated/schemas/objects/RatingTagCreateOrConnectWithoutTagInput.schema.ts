import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingTagWhereUniqueInputObjectSchema as RatingTagWhereUniqueInputObjectSchema } from './RatingTagWhereUniqueInput.schema';
import { RatingTagCreateWithoutTagInputObjectSchema as RatingTagCreateWithoutTagInputObjectSchema } from './RatingTagCreateWithoutTagInput.schema';
import { RatingTagUncheckedCreateWithoutTagInputObjectSchema as RatingTagUncheckedCreateWithoutTagInputObjectSchema } from './RatingTagUncheckedCreateWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingTagWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RatingTagCreateWithoutTagInputObjectSchema), z.lazy(() => RatingTagUncheckedCreateWithoutTagInputObjectSchema)])
}).strict();
export const RatingTagCreateOrConnectWithoutTagInputObjectSchema: z.ZodType<Prisma.RatingTagCreateOrConnectWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingTagCreateOrConnectWithoutTagInput>;
export const RatingTagCreateOrConnectWithoutTagInputObjectZodSchema = makeSchema();
