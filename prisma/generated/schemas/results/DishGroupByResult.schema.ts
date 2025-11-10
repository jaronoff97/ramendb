import * as z from 'zod';
export const DishGroupByResultSchema = z.array(z.object({
  id: z.string(),
  locationId: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    locationId: z.number(),
    name: z.number(),
    description: z.number(),
    price: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    location: z.number(),
    tags: z.number()
  }).optional(),
  _sum: z.object({
    price: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    price: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    locationId: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    locationId: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));