import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutRatingsInputObjectSchema as UserUpdateWithoutRatingsInputObjectSchema } from './UserUpdateWithoutRatingsInput.schema';
import { UserUncheckedUpdateWithoutRatingsInputObjectSchema as UserUncheckedUpdateWithoutRatingsInputObjectSchema } from './UserUncheckedUpdateWithoutRatingsInput.schema';
import { UserCreateWithoutRatingsInputObjectSchema as UserCreateWithoutRatingsInputObjectSchema } from './UserCreateWithoutRatingsInput.schema';
import { UserUncheckedCreateWithoutRatingsInputObjectSchema as UserUncheckedCreateWithoutRatingsInputObjectSchema } from './UserUncheckedCreateWithoutRatingsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutRatingsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRatingsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutRatingsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRatingsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutRatingsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutRatingsInput>;
export const UserUpsertWithoutRatingsInputObjectZodSchema = makeSchema();
