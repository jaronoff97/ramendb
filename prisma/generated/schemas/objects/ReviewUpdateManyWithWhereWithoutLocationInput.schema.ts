import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewScalarWhereInputObjectSchema as ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';
import { ReviewUpdateManyMutationInputObjectSchema as ReviewUpdateManyMutationInputObjectSchema } from './ReviewUpdateManyMutationInput.schema';
import { ReviewUncheckedUpdateManyWithoutLocationInputObjectSchema as ReviewUncheckedUpdateManyWithoutLocationInputObjectSchema } from './ReviewUncheckedUpdateManyWithoutLocationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReviewScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReviewUpdateManyMutationInputObjectSchema), z.lazy(() => ReviewUncheckedUpdateManyWithoutLocationInputObjectSchema)])
}).strict();
export const ReviewUpdateManyWithWhereWithoutLocationInputObjectSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutLocationInput>;
export const ReviewUpdateManyWithWhereWithoutLocationInputObjectZodSchema = makeSchema();
