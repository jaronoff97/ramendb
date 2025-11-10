import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewWhereUniqueInputObjectSchema as ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutLocationInputObjectSchema as ReviewCreateWithoutLocationInputObjectSchema } from './ReviewCreateWithoutLocationInput.schema';
import { ReviewUncheckedCreateWithoutLocationInputObjectSchema as ReviewUncheckedCreateWithoutLocationInputObjectSchema } from './ReviewUncheckedCreateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ReviewCreateWithoutLocationInputObjectSchema), z.lazy(() => ReviewUncheckedCreateWithoutLocationInputObjectSchema)])
}).strict();
export const ReviewCreateOrConnectWithoutLocationInputObjectSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewCreateOrConnectWithoutLocationInput>;
export const ReviewCreateOrConnectWithoutLocationInputObjectZodSchema = makeSchema();
