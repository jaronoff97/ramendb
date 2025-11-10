import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  locationId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tagId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LocationTagUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.LocationTagUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUncheckedUpdateManyInput>;
export const LocationTagUncheckedUpdateManyInputObjectZodSchema = makeSchema();
