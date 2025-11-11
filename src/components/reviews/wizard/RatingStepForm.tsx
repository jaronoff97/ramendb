import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useForm } from '@tanstack/react-form'
import { fullReviewAtom, locationAtom, ratingAtom, userAtom } from '@/data/atoms/review-wizard-atoms'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function RatingStepForm() {
  const setRating = useSetAtom(ratingAtom)
  const [readLocation] = useAtom(locationAtom)
  const [user] = useAtom(userAtom)
  const fullReview = useAtomValue(fullReviewAtom)

  const form = useForm({
    defaultValues: { value: 5 },
    onSubmit: ({ value }) => {
      if (!user || !readLocation) return;
      setRating({
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
        location: {
          connect: {
            id: readLocation.id
          }
        }
      })
      console.log('Submitting full review:', fullReview)
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
