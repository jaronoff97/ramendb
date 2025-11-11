import { atom } from 'jotai'
import type { z } from 'zod'
import type {
  LocationCreateInputObjectSchema,
  RatingCreateWithoutReviewsInputObjectSchema,
  ReviewCreateInputObjectSchema,
  ReviewPictureCreateInputObjectSchema,
} from 'prisma/generated/schemas'
import type { User } from '@workos-inc/node';

type LocationData = z.infer<typeof LocationCreateInputObjectSchema>
type ReviewData = z.infer<typeof ReviewCreateInputObjectSchema>
type PictureData = z.infer<typeof ReviewPictureCreateInputObjectSchema>
type RatingData = z.infer<typeof RatingCreateWithoutReviewsInputObjectSchema>

export const userAtom = atom<User | null>(null)
export const locationAtom = atom<LocationData | null>(null)
export const reviewAtom = atom<ReviewData | null>(null)
export const picturesAtom = atom<Array<PictureData>>([])
export const ratingAtom = atom<RatingData | null>(null)

// computed atom to combine all steps for final submission
export const fullReviewAtom = atom((get) => ({
  user: get(userAtom),
  location: get(locationAtom),
  review: get(reviewAtom),
  pictures: get(picturesAtom),
  rating: get(ratingAtom),
}))
