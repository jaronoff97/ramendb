import * as z from 'zod';
// prettier-ignore
export const RatingPictureModelSchema = z.object({
    id: z.string(),
    ratingId: z.string(),
    url: z.string(),
    caption: z.string().nullable(),
    createdAt: z.date(),
    rating: z.unknown()
}).strict();

export type RatingPicturePureType = z.infer<typeof RatingPictureModelSchema>;
