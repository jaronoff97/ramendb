import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  locationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LocationTagUncheckedUpdateWithoutTagInputObjectSchema: z.ZodType<Prisma.LocationTagUncheckedUpdateWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUncheckedUpdateWithoutTagInput>;
export const LocationTagUncheckedUpdateWithoutTagInputObjectZodSchema = makeSchema();
