import * as z from 'zod';
// prettier-ignore
export const ReviewTagModelSchema = z.object({
    reviewId: z.string(),
    tagId: z.string(),
    review: z.unknown(),
    tag: z.unknown()
}).strict();

export type ReviewTagPureType = z.infer<typeof ReviewTagModelSchema>;
