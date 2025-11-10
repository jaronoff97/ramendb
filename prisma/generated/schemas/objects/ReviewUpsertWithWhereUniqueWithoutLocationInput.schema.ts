import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutLocationInputObjectSchema as ReviewUpdateWithoutLocationInputObjectSchema } from './ReviewUpdateWithoutLocationInput.schema';
import { ReviewUncheckedUpdateWithoutLocationInputObjectSchema as ReviewUncheckedUpdateWithoutLocationInputObjectSchema } from './ReviewUncheckedUpdateWithoutLocationInput.schema';
import { ReviewCreateWithoutLocationInputObjectSchema as ReviewCreateWithoutLocationInputObjectSchema } from './ReviewCreateWithoutLocationInput.schema';
import { ReviewUncheckedCreateWithoutLocationInputObjectSchema as ReviewUncheckedCreateWithoutLocationInputObjectSchema } from './ReviewUncheckedCreateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ReviewUpdateWithoutLocationInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutLocationInputObjectSchema)]),
  create: z.union([z.lazy(() => ReviewCreateWithoutLocationInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutLocationInputObjectSchema)])
}).strict();
export const ReviewUpsertWithWhereUniqueWithoutLocationInputObjectSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutLocationInput>;
export const ReviewUpsertWithWhereUniqueWithoutLocationInputObjectZodSchema = makeSchema();
