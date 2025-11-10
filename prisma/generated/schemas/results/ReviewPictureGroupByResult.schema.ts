import * as z from 'zod';
export const ReviewPictureGroupByResultSchema = z.array(z.object({
  id: z.string(),
  reviewId: z.string(),
  url: z.string(),
  caption: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    reviewId: z.number(),
    url: z.number(),
    caption: z.number(),
    createdAt: z.number(),
    review: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    reviewId: z.string().nullable(),
    url: z.string().nullable(),
    caption: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    reviewId: z.string().nullable(),
    url: z.string().nullable(),
    caption: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));