import * as z from 'zod';
export const LocationPictureGroupByResultSchema = z.array(z.object({
  id: z.string(),
  locationId: z.string(),
  url: z.string(),
  caption: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    locationId: z.number(),
    url: z.number(),
    caption: z.number(),
    createdAt: z.number(),
    location: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    locationId: z.string().nullable(),
    url: z.string().nullable(),
    caption: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    locationId: z.string().nullable(),
    url: z.string().nullable(),
    caption: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));