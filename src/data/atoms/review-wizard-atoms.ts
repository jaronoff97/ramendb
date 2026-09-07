import { atom } from 'jotai'

/** A picture waiting to be attached to the review, before it is saved. */
export interface DraftPicture {
  url: string
  caption?: string
}

export const locationIdAtom = atom<string | null>(null)
export const reviewIdAtom = atom<string | null>(null)
export const picturesAtom = atom<Array<DraftPicture>>([])
export const ratingIdAtom = atom<string | null>(null)

/**
 * Clears everything the wizard collected.
 *
 * Without this the atoms outlive a submission, so "Write Another" starts on
 * top of the review that was just saved. Set it to anything: `useSetAtom`
 * gives you a function, and the value is ignored.
 */
export const resetWizardAtom = atom(null, (_get, set) => {
  set(locationIdAtom, null)
  set(reviewIdAtom, null)
  set(ratingIdAtom, null)
  set(picturesAtom, [])
})
