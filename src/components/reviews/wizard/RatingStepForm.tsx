import { useAtom, useSetAtom } from 'jotai'
import { useForm } from '@tanstack/react-form'
import { useWizard } from './useWizard';
import type { RatingInput } from '@/lib/mutations/useCreateRating';
import { locationIdAtom, ratingIdAtom, reviewIdAtom, userAtom } from '@/data/atoms/review-wizard-atoms'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useCreateRating } from '@/lib/mutations/useCreateRating'

export function RatingStepForm() {
  const setRating = useSetAtom(ratingIdAtom)
  const [locationId] = useAtom(locationIdAtom)
  const [reviewId] = useAtom(reviewIdAtom)
  const [user] = useAtom(userAtom)
  const createRating = useCreateRating()
  const { goNext } = useWizard()

  const form = useForm({
    defaultValues: { value: 5 },
    onSubmit: ({ value }) => {
      if (!user || !locationId || !reviewId) return;
      const newRating: RatingInput = {
        user: {
          connectOrCreate: {
            where: {
              workosId: user.id
            },
            create: {
              email: user.email,
              name: `${user.firstName} ${user.lastName}`,
              workosId: user.id
            }
          }
        },
        value: value.value,
        tags: {},
        ratingPictures: {},
        reviews: {
          connect: {
            id: reviewId
          }
        },
        location: {
          connect: {
            id: locationId
          }
        },
      }

      createRating
        .mutateAsync(newRating)
        .then((createdRating) => {
          setRating(createdRating.id)
          goNext()
        })
        .catch((err) => {
          console.log({ msg: "failed", err })
        })

    },
  })

  return (
    <form id="rating-form" onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }} className="space-y-4">
      <form.Field
        name="value"
        children={(field) => (
          <div>
            <label>Rating (1–5)</label>
            <Input type="number" min="1" max="5" value={field.state.value} onChange={(e) => field.handleChange(Number(e.target.value))} />
          </div>
        )}
      />
      <Button type="submit">Submit Review</Button>
    </form>
  )
}
