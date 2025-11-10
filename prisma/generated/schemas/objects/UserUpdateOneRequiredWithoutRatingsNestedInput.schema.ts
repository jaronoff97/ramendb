import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutRatingsInputObjectSchema as UserCreateWithoutRatingsInputObjectSchema } from './UserCreateWithoutRatingsInput.schema';
import { UserUncheckedCreateWithoutRatingsInputObjectSchema as UserUncheckedCreateWithoutRatingsInputObjectSchema } from './UserUncheckedCreateWithoutRatingsInput.schema';
import { UserCreateOrConnectWithoutRatingsInputObjectSchema as UserCreateOrConnectWithoutRatingsInputObjectSchema } from './UserCreateOrConnectWithoutRatingsInput.schema';
import { UserUpsertWithoutRatingsInputObjectSchema as UserUpsertWithoutRatingsInputObjectSchema } from './UserUpsertWithoutRatingsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutRatingsInputObjectSchema as UserUpdateToOneWithWhereWithoutRatingsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutRatingsInput.schema';
import { UserUpdateWithoutRatingsInputObjectSchema as UserUpdateWithoutRatingsInputObjectSchema } from './UserUpdateWithoutRatingsInput.schema';
import { UserUncheckedUpdateWithoutRatingsInputObjectSchema as UserUncheckedUpdateWithoutRatingsInputObjectSchema } from './UserUncheckedUpdateWithoutRatingsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRatingsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRatingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRatingsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutRatingsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutRatingsInputObjectSchema), z.lazy(() => UserUpdateWithoutRatingsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRatingsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutRatingsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRatingsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutRatingsNestedInput>;
export const UserUpdateOneRequiredWithoutRatingsNestedInputObjectZodSchema = makeSchema();
