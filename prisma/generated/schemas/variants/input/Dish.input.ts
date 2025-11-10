import * as z from 'zod';
// prettier-ignore
export const DishInputSchema = z.object({
    id: z.string(),
    locationId: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    price: z.number().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    location: z.unknown(),
    tags: z.array(z.unknown())
}).strict();

export type DishInputType = z.infer<typeof DishInputSchema>;
