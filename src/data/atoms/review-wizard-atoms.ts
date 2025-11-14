import { atom } from 'jotai'
import type { z } from 'zod'
import type {
  ReviewPictureCreateInputObjectSchema,
} from 'prisma/generated/schemas'
import type { User } from '@workos-inc/node';

type PictureData = z.infer<typeof ReviewPictureCreateInputObjectSchema>

export const userAtom = atom<User | null>(null)
export const locationIdAtom = atom<string | null>(null)
export const reviewIdAtom = atom<string | null>(null)
export const picturesAtom = atom<Array<PictureData>>([])
export const ratingIdAtom = atom<string | null>(null)

// computed atom to combine all steps for final submission
export const fullReviewAtom = atom((get) => ({
  user: get(userAtom),
  location: get(locationIdAtom),
  review: get(reviewIdAtom),
  pictures: get(picturesAtom),
  rating: get(ratingIdAtom),
}))
