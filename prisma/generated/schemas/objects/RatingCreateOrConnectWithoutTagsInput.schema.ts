import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingCreateWithoutTagsInputObjectSchema as RatingCreateWithoutTagsInputObjectSchema } from './RatingCreateWithoutTagsInput.schema';
import { RatingUncheckedCreateWithoutTagsInputObjectSchema as RatingUncheckedCreateWithoutTagsInputObjectSchema } from './RatingUncheckedCreateWithoutTagsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RatingCreateWithoutTagsInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutTagsInputObjectSchema)])
}).strict();
export const RatingCreateOrConnectWithoutTagsInputObjectSchema: z.ZodType<Prisma.RatingCreateOrConnectWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateOrConnectWithoutTagsInput>;
export const RatingCreateOrConnectWithoutTagsInputObjectZodSchema = makeSchema();
