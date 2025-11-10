import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingWhereUniqueInputObjectSchema as RatingWhereUniqueInputObjectSchema } from './RatingWhereUniqueInput.schema';
import { RatingUpdateWithoutLocationInputObjectSchema as RatingUpdateWithoutLocationInputObjectSchema } from './RatingUpdateWithoutLocationInput.schema';
import { RatingUncheckedUpdateWithoutLocationInputObjectSchema as RatingUncheckedUpdateWithoutLocationInputObjectSchema } from './RatingUncheckedUpdateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RatingWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RatingUpdateWithoutLocationInputObjectSchema), z.lazy(() => RatingUncheckedUpdateWithoutLocationInputObjectSchema)])
}).strict();
export const RatingUpdateWithWhereUniqueWithoutLocationInputObjectSchema: z.ZodType<Prisma.RatingUpdateWithWhereUniqueWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.RatingUpdateWithWhereUniqueWithoutLocationInput>;
export const RatingUpdateWithWhereUniqueWithoutLocationInputObjectZodSchema = makeSchema();
