import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagScalarWhereInputObjectSchema as LocationTagScalarWhereInputObjectSchema } from './LocationTagScalarWhereInput.schema';
import { LocationTagUpdateManyMutationInputObjectSchema as LocationTagUpdateManyMutationInputObjectSchema } from './LocationTagUpdateManyMutationInput.schema';
import { LocationTagUncheckedUpdateManyWithoutLocationInputObjectSchema as LocationTagUncheckedUpdateManyWithoutLocationInputObjectSchema } from './LocationTagUncheckedUpdateManyWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationTagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LocationTagUpdateManyMutationInputObjectSchema), z.lazy(() => LocationTagUncheckedUpdateManyWithoutLocationInputObjectSchema)])
}).strict();
export const LocationTagUpdateManyWithWhereWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationTagUpdateManyWithWhereWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUpdateManyWithWhereWithoutLocationInput>;
export const LocationTagUpdateManyWithWhereWithoutLocationInputObjectZodSchema = makeSchema();
