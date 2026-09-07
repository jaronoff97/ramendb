import * as z from 'zod';
// prettier-ignore
export const LocationModelSchema = z.object({
    id: z.string(),
    slug: z.string(),
    osmId: z.string().nullable(),
    name: z.string(),
    type: z.string(),
    address: z.string().nullable(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    country: z.string().nullable(),
    latitude: z.number().nullable(),
    longitude: z.number().nullable(),
    website: z.string().nullable(),
    hours: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    dishes: z.array(z.unknown()).optional(),
    ratings: z.array(z.unknown()).optional(),
    reviews: z.array(z.unknown()).optional(),
    tags: z.array(z.unknown()).optional(),
    pictures: z.array(z.unknown()).optional()
}).strict();

export type LocationPureType = z.infer<typeof LocationModelSchema>;
