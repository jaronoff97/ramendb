import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingCreateWithoutLocationInputObjectSchema as RatingCreateWithoutLocationInputObjectSchema } from './RatingCreateWithoutLocationInput.schema';
import { RatingUncheckedCreateWithoutLocationInputObjectSchema as RatingUncheckedCreateWithoutLocationInputObjectSchema } from './RatingUncheckedCreateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RatingCreateWithoutLocationInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutLocationInputObjectSchema)])
}).strict();
export const RatingCreateOrConnectWithoutLocationInputObjectSchema: z.ZodType<Prisma.RatingCreateOrConnectWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingCreateOrConnectWithoutLocationInput>;
export const RatingCreateOrConnectWithoutLocationInputObjectZodSchema = makeSchema();
