import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateNestedManyWithoutUserInputObjectSchema as RatingCreateNestedManyWithoutUserInputObjectSchema } from './RatingCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  workosId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  pictureUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ratings: z.lazy(() => RatingCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutReviewsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutReviewsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutReviewsInput>;
export const UserCreateWithoutReviewsInputObjectZodSchema = makeSchema();
