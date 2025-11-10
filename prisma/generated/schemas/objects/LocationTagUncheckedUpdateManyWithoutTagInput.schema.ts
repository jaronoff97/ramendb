import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  locationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LocationTagUncheckedUpdateManyWithoutTagInputObjectSchema: z.ZodType<Prisma.LocationTagUncheckedUpdateManyWithoutTagInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUncheckedUpdateManyWithoutTagInput>;
export const LocationTagUncheckedUpdateManyWithoutTagInputObjectZodSchema = makeSchema();
