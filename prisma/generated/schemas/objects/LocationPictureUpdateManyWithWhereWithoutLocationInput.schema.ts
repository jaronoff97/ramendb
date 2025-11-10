import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationPictureScalarWhereInputObjectSchema as LocationPictureScalarWhereInputObjectSchema } from './LocationPictureScalarWhereInput.schema';
import { LocationPictureUpdateManyMutationInputObjectSchema as LocationPictureUpdateManyMutationInputObjectSchema } from './LocationPictureUpdateManyMutationInput.schema';
import { LocationPictureUncheckedUpdateManyWithoutLocationInputObjectSchema as LocationPictureUncheckedUpdateManyWithoutLocationInputObjectSchema } from './LocationPictureUncheckedUpdateManyWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationPictureScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LocationPictureUpdateManyMutationInputObjectSchema), z.lazy(() => LocationPictureUncheckedUpdateManyWithoutLocationInputObjectSchema)])
}).strict();
export const LocationPictureUpdateManyWithWhereWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationPictureUpdateManyWithWhereWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationPictureUpdateManyWithWhereWithoutLocationInput>;
export const LocationPictureUpdateManyWithWhereWithoutLocationInputObjectZodSchema = makeSchema();
