import * as z from 'zod';
// prettier-ignore
export const DishResultSchema = z.object({
    id: z.string(),
    locationId: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    location: z.unknown(),
    tags: z.array(z.unknown())
}).strict();

export type DishResultType = z.infer<typeof DishResultSchema>;
