import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutLocationInputObjectSchema as ReviewUpdateWithoutLocationInputObjectSchema } from './ReviewUpdateWithoutLocationInput.schema';
import { ReviewUncheckedUpdateWithoutLocationInputObjectSchema as ReviewUncheckedUpdateWithoutLocationInputObjectSchema } from './ReviewUncheckedUpdateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateWithoutLocationInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateWithoutLocationInputObjectSchema)])
}).strict();
export const ReviewUpdateWithWhereUniqueWithoutLocationInputObjectSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutLocationInput>;
export const ReviewUpdateWithWhereUniqueWithoutLocationInputObjectZodSchema = makeSchema();
