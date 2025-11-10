import * as z from 'zod';
// prettier-ignore
export const ReviewPictureInputSchema = z.object({
    id: z.string(),
    reviewId: z.string(),
    url: z.string(),
    caption: z.string().optional().nullable(),
    createdAt: z.date(),
    review: z.unknown()
}).strict();

export type ReviewPictureInputType = z.infer<typeof ReviewPictureInputSchema>;
