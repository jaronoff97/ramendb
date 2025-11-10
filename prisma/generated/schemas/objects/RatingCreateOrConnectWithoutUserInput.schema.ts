import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingCreateWithoutUserInputObjectSchema as RatingCreateWithoutUserInputObjectSchema } from './RatingCreateWithoutUserInput.schema';
import { RatingUncheckedCreateWithoutUserInputObjectSchema as RatingUncheckedCreateWithoutUserInputObjectSchema } from './RatingUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RatingCreateWithoutUserInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const RatingCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.RatingCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateOrConnectWithoutUserInput>;
export const RatingCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
