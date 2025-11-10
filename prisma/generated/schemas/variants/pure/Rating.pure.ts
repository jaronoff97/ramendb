import * as z from 'zod';
// prettier-ignore
export const RatingModelSchema = z.object({
    id: z.string(),
    locationId: z.string(),
    userId: z.string(),
    value: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
    location: z.unknown(),
    user: z.unknown(),
    reviews: z.array(z.unknown()),
    tags: z.array(z.unknown()),
    ratingPictures: z.array(z.unknown())
}).strict();

export type RatingPureType = z.infer<typeof RatingModelSchema>;
