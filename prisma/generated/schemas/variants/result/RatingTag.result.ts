import * as z from 'zod';
// prettier-ignore
export const RatingTagResultSchema = z.object({
    ratingId: z.string(),
    tagId: z.string(),
    rating: z.unknown(),
    tag: z.unknown()
}).strict();

export type RatingTagResultType = z.infer<typeof RatingTagResultSchema>;
