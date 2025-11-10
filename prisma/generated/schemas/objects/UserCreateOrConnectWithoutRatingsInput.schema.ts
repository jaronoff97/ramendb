import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutRatingsInputObjectSchema as UserCreateWithoutRatingsInputObjectSchema } from './UserCreateWithoutRatingsInput.schema';
import { UserUncheckedCreateWithoutRatingsInputObjectSchema as UserUncheckedCreateWithoutRatingsInputObjectSchema } from './UserUncheckedCreateWithoutRatingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutRatingsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutRatingsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutRatingsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutRatingsInput>;
export const UserCreateOrConnectWithoutRatingsInputObjectZodSchema = makeSchema();
