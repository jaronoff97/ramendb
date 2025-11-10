import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RatingCreateNestedManyWithoutUserInputObjectSchema as RatingCreateNestedManyWithoutUserInputObjectSchema } from './RatingCreateNestedManyWithoutUserInput.schema';
import { ReviewCreateNestedManyWithoutUserInputObjectSchema as ReviewCreateNestedManyWithoutUserInputObjectSchema } from './ReviewCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  workosId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  pictureUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  ratings: z.lazy(() => RatingCreateNestedManyWithoutUserInputObjectSchema),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
