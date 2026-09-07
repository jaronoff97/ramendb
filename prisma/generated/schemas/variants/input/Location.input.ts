import * as z from 'zod';
// prettier-ignore
export const LocationInputSchema = z.object({
    id: z.string(),
    slug: z.string(),
    osmId: z.string().optional().nullable(),
    name: z.string(),
    type: z.string(),
    address: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    state: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
    latitude: z.number().optional().nullable(),
    longitude: z.number().optional().nullable(),
    website: z.string().optional().nullable(),
    hours: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    dishes: z.array(z.unknown()).optional(),
    ratings: z.array(z.unknown()).optional(),
    reviews: z.array(z.unknown()).optional(),
    tags: z.array(z.unknown()).optional(),
    pictures: z.array(z.unknown()).optional()
}).strict();

export type LocationInputType = z.infer<typeof LocationInputSchema>;
