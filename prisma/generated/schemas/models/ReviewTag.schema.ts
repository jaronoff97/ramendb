import * as z from 'zod';

export const ReviewTagSchema = z.object({
  reviewId: z.string(),
  tagId: z.string(),
});

export type ReviewTagType = z.infer<typeof ReviewTagSchema>;
