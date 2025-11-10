import * as z from 'zod';
// prettier-ignore
export const RatingTagModelSchema = z.object({
    ratingId: z.string(),
    tagId: z.string(),
    rating: z.unknown(),
    tag: z.unknown()
}).strict();

export type RatingTagPureType = z.infer<typeof RatingTagModelSchema>;
