import * as z from 'zod';
export const LocationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    slug: z.number(),
    name: z.number(),
    type: z.number(),
    address: z.number(),
    city: z.number(),
    state: z.number(),
    country: z.number(),
    latitude: z.number(),
    longitude: z.number(),
    website: z.number(),
    hours: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    dishes: z.number(),
    ratings: z.number(),
    reviews: z.number(),
    tags: z.number(),
    pictures: z.number()
  }).optional(),
  _sum: z.object({
    latitude: z.number().nullable(),
    longitude: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    latitude: z.number().nullable(),
    longitude: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    slug: z.string().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    address: z.string().nullable(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    country: z.string().nullable(),
    latitude: z.number().nullable(),
    longitude: z.number().nullable(),
    website: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    slug: z.string().nullable(),
    name: z.string().nullable(),
    type: z.string().nullable(),
    address: z.string().nullable(),
    city: z.string().nullable(),
    state: z.string().nullable(),
    country: z.string().nullable(),
    latitude: z.number().nullable(),
    longitude: z.number().nullable(),
    website: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});