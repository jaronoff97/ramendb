import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  tagId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const LocationTagUncheckedUpdateWithoutLocationInputObjectSchema: z.ZodType<Prisma.LocationTagUncheckedUpdateWithoutLocationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocationTagUncheckedUpdateWithoutLocationInput>;
export const LocationTagUncheckedUpdateWithoutLocationInputObjectZodSchema = makeSchema();
