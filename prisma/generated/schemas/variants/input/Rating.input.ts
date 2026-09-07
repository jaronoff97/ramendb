import * as z from 'zod';
// prettier-ignore
export const RatingInputSchema = z.object({
    id: z.string(),
    locationId: z.string(),
    userId: z.string(),
    value: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    location: z.unknown(),
    user: z.unknown(),
    reviews: z.array(z.unknown()),
    tags: z.array(z.unknown()),
    ratingPictures: z.array(z.unknown())
}).strict();

export type RatingInputType = z.infer<typeof RatingInputSchema>;
