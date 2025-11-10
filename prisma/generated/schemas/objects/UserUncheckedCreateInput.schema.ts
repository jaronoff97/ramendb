import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingUncheckedCreateNestedManyWithoutUserInputObjectSchema as RatingUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './RatingUncheckedCreateNestedManyWithoutUserInput.schema';
import { ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  workosId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  pictureUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  ratings: z.lazy(() => RatingUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
