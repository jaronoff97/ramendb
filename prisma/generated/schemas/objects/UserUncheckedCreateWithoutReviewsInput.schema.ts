import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingUncheckedCreateNestedManyWithoutUserInputObjectSchema as RatingUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './RatingUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  workosId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  pictureUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ratings: z.lazy(() => RatingUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutReviewsInput>;
export const UserUncheckedCreateWithoutReviewsInputObjectZodSchema = makeSchema();
