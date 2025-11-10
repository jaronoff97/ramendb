import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutRatingsInputObjectSchema as UserUpdateWithoutRatingsInputObjectSchema } from './UserUpdateWithoutRatingsInput.schema';
import { UserUncheckedUpdateWithoutRatingsInputObjectSchema as UserUncheckedUpdateWithoutRatingsInputObjectSchema } from './UserUncheckedUpdateWithoutRatingsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutRatingsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutRatingsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutRatingsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRatingsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutRatingsInput>;
export const UserUpdateToOneWithWhereWithoutRatingsInputObjectZodSchema = makeSchema();
