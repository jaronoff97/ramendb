import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { RatingPictureSelectObjectSchema as RatingPictureSelectObjectSchema } from './objects/RatingPictureSelect.schema';
import { RatingPictureIncludeObjectSchema as RatingPictureIncludeObjectSchema } from './objects/RatingPictureInclude.schema';
import { RatingPictureWhereUniqueInputObjectSchema as RatingPictureWhereUniqueInputObjectSchema } from './objects/RatingPictureWhereUniqueInput.schema';
import { RatingPictureCreateInputObjectSchema as RatingPictureCreateInputObjectSchema } from './objects/RatingPictureCreateInput.schema';
import { RatingPictureUncheckedCreateInputObjectSchema as RatingPictureUncheckedCreateInputObjectSchema } from './objects/RatingPictureUncheckedCreateInput.schema';
import { RatingPictureUpdateInputObjectSchema as RatingPictureUpdateInputObjectSchema } from './objects/RatingPictureUpdateInput.schema';
import { RatingPictureUncheckedUpdateInputObjectSchema as RatingPictureUncheckedUpdateInputObjectSchema } from './objects/RatingPictureUncheckedUpdateInput.schema';

export const RatingPictureUpsertOneSchema: z.ZodType<Prisma.RatingPictureUpsertArgs> = z.object({ select: RatingPictureSelectObjectSchema.optional(), include: RatingPictureIncludeObjectSchema.optional(), where: RatingPictureWhereUniqueInputObjectSchema, create: z.union([ RatingPictureCreateInputObjectSchema, RatingPictureUncheckedCreateInputObjectSchema ]), update: z.union([ RatingPictureUpdateInputObjectSchema, RatingPictureUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RatingPictureUpsertArgs>;

export const RatingPictureUpsertOneZodSchema = z.object({ select: RatingPictureSelectObjectSchema.optional(), include: RatingPictureIncludeObjectSchema.optional(), where: RatingPictureWhereUniqueInputObjectSchema, create: z.union([ RatingPictureCreateInputObjectSchema, RatingPictureUncheckedCreateInputObjectSchema ]), update: z.union([ RatingPictureUpdateInputObjectSchema, RatingPictureUncheckedUpdateInputObjectSchema ]) }).strict();