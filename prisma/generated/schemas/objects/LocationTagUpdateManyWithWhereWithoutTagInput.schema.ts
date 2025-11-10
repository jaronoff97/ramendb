import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LocationTagScalarWhereInputObjectSchema as LocationTagScalarWhereInputObjectSchema } from './LocationTagScalarWhereInput.schema';
import { LocationTagUpdateManyMutationInputObjectSchema as LocationTagUpdateManyMutationInputObjectSchema } from './LocationTagUpdateManyMutationInput.schema';
import { LocationTagUncheckedUpdateManyWithoutTagInputObjectSchema as LocationTagUncheckedUpdateManyWithoutTagInputObjectSchema } from './LocationTagUncheckedUpdateManyWithoutTagInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LocationTagScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => LocationTagUpdateManyMutationInputObjectSchema), z.lazy(() => LocationTagUncheckedUpdateManyWithoutTagInputObjectSchema)])
}).strict();
export const LocationTagUpdateManyWithWhereWithoutTagInputObjectSchema: z.ZodType<Prisma.LocationTagUpdateManyWithWhereWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUpdateManyWithWhereWithoutTagInput>;
export const LocationTagUpdateManyWithWhereWithoutTagInputObjectZodSchema = makeSchema();
