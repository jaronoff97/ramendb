import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateWithoutTagsInputObjectSchema as RatingCreateWithoutTagsInputObjectSchema } from './RatingCreateWithoutTagsInput.schema';
import { RatingUncheckedCreateWithoutTagsInputObjectSchema as RatingUncheckedCreateWithoutTagsInputObjectSchema } from './RatingUncheckedCreateWithoutTagsInput.schema';
import { RatingCreateOrConnectWithoutTagsInputObjectSchema as RatingCreateOrConnectWithoutTagsInputObjectSchema } from './RatingCreateOrConnectWithoutTagsInput.schema';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RatingCreateWithoutTagsInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutTagsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RatingCreateOrConnectWithoutTagsInputObjectSchema).optional(),
  connect: z.lazy(() => RatingWhereUniqueInputObjectSchema).optional()
}).strict();
export const RatingCreateNestedOneWithoutTagsInputObjectSchema: z.ZodType<Prisma.RatingCreateNestedOneWithoutTagsInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateNestedOneWithoutTagsInput>;
export const RatingCreateNestedOneWithoutTagsInputObjectZodSchema = makeSchema();
