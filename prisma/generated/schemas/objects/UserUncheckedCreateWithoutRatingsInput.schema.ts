import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema as ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  workosId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  pictureUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutRatingsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutRatingsInput>;
export const UserUncheckedCreateWithoutRatingsInputObjectZodSchema = makeSchema();
