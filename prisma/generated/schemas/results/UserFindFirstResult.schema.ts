import * as z from 'zod';
export const UserFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  workosId: z.string(),
  email: z.string(),
  name: z.string().optional(),
  pictureUrl: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ratings: z.array(z.unknown()),
  reviews: z.array(z.unknown())
}));