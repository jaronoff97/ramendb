import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutRatingsInputObjectSchema as UserCreateWithoutRatingsInputObjectSchema } from './UserCreateWithoutRatingsInput.schema';
import { UserUncheckedCreateWithoutRatingsInputObjectSchema as UserUncheckedCreateWithoutRatingsInputObjectSchema } from './UserUncheckedCreateWithoutRatingsInput.schema';
import { UserCreateOrConnectWithoutRatingsInputObjectSchema as UserCreateOrConnectWithoutRatingsInputObjectSchema } from './UserCreateOrConnectWithoutRatingsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutRatingsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRatingsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutRatingsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutRatingsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutRatingsInput>;
export const UserCreateNestedOneWithoutRatingsInputObjectZodSchema = makeSchema();
