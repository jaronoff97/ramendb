import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationPictureWhereUniqueInputObjectSchema as LocationPictureWhereUniqueInputObjectSchema } from './LocationPictureWhereUniqueInput.schema';
import { LocationPictureUpdateWithoutLocationInputObjectSchema as LocationPictureUpdateWithoutLocationInputObjectSchema } from './LocationPictureUpdateWithoutLocationInput.schema';
import { LocationPictureUncheckedUpdateWithoutLocationInputObjectSchema as LocationPictureUncheckedUpdateWithoutLocationInputObjectSchema } from './LocationPictureUncheckedUpdateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationPictureWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LocationPictureUpdateWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureUncheckedUpdateWithoutLocationInputObjectSchema)])
}).strict();
export const LocationPictureUpdateWithWhereUniqueWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationPictureUpdateWithWhereUniqueWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureUpdateWithWhereUniqueWithoutLocationInput>;
export const LocationPictureUpdateWithWhereUniqueWithoutLocationInputObjectZodSchema = makeSchema();
