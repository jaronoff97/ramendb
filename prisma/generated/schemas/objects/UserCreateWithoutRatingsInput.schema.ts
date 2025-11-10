import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewCreateNestedManyWithoutUserInputObjectSchema as ReviewCreateNestedManyWithoutUserInputObjectSchema } from './ReviewCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  workosId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  pictureUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutRatingsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutRatingsInput>;
export const UserCreateWithoutRatingsInputObjectZodSchema = makeSchema();
