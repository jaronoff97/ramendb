import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationPictureWhereUniqueInputObjectSchema as LocationPictureWhereUniqueInputObjectSchema } from './LocationPictureWhereUniqueInput.schema';
import { LocationPictureUpdateWithoutLocationInputObjectSchema as LocationPictureUpdateWithoutLocationInputObjectSchema } from './LocationPictureUpdateWithoutLocationInput.schema';
import { LocationPictureUncheckedUpdateWithoutLocationInputObjectSchema as LocationPictureUncheckedUpdateWithoutLocationInputObjectSchema } from './LocationPictureUncheckedUpdateWithoutLocationInput.schema';
import { LocationPictureCreateWithoutLocationInputObjectSchema as LocationPictureCreateWithoutLocationInputObjectSchema } from './LocationPictureCreateWithoutLocationInput.schema';
import { LocationPictureUncheckedCreateWithoutLocationInputObjectSchema as LocationPictureUncheckedCreateWithoutLocationInputObjectSchema } from './LocationPictureUncheckedCreateWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationPictureWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => LocationPictureUpdateWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureUncheckedUpdateWithoutLocationInputObjectSchema)]),
  create: z.union([z.lazy(() => LocationPictureCreateWithoutLocationInputObjectSchema), z.lazy(() => LocationPictureUncheckedCreateWithoutLocationInputObjectSchema)])
}).strict();
export const LocationPictureUpsertWithWhereUniqueWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationPictureUpsertWithWhereUniqueWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureUpsertWithWhereUniqueWithoutLocationInput>;
export const LocationPictureUpsertWithWhereUniqueWithoutLocationInputObjectZodSchema = makeSchema();
