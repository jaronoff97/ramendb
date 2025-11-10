import * as z from 'zod';
export const TagAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    category: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    locations: z.number(),
    dishes: z.number(),
    ratings: z.number(),
    reviews: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    category: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    category: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});