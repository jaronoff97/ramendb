import * as z from 'zod';
export const UserAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    workosId: z.number(),
    email: z.number(),
    name: z.number(),
    pictureUrl: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    ratings: z.number(),
    reviews: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    workosId: z.string().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable(),
    pictureUrl: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    workosId: z.string().nullable(),
    email: z.string().nullable(),
    name: z.string().nullable(),
    pictureUrl: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});