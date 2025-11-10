import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingUpdateWithoutLocationInputObjectSchema as RatingUpdateWithoutLocationInputObjectSchema } from './RatingUpdateWithoutLocationInput.schema';
import { RatingUncheckedUpdateWithoutLocationInputObjectSchema as RatingUncheckedUpdateWithoutLocationInputObjectSchema } from './RatingUncheckedUpdateWithoutLocationInput.schema';
import { RatingCreateWithoutLocationInputObjectSchema as RatingCreateWithoutLocationInputObjectSchema } from './RatingCreateWithoutLocationInput.schema';
import { RatingUncheckedCreateWithoutLocationInputObjectSchema as RatingUncheckedCreateWithoutLocationInputObjectSchema } from './RatingUncheckedCreateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RatingUpdateWithoutLocationInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutLocationInputObjectSchema)]),
  create: z.union([z.lazy(() => RatingCreateWithoutLocationInputObjectSchema), z.lazy(() => RatingUncheckedCreateWithoutLocationInputObjectSchema)])
}).strict();
export const RatingUpsertWithWhereUniqueWithoutLocationInputObjectSchema: z.ZodType<Prisma.RatingUpsertWithWhereUniqueWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpsertWithWhereUniqueWithoutLocationInput>;
export const RatingUpsertWithWhereUniqueWithoutLocationInputObjectZodSchema = makeSchema();
