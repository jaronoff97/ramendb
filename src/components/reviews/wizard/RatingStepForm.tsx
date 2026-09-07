import { useAtomValue, useSetAtom } from 'jotai'
import { useForm } from '@tanstack/react-form'
import * as z from 'zod'
import { useWizard } from './useWizard'
import {
  locationIdAtom,
  ratingIdAtom,
  reviewIdAtom,
} from '@/data/atoms/review-wizard-atoms'
import { Button } from '@/components/ui/button'
import { useCreateRating } from '@/lib/mutations/useCreateRating'

const formSchema = z.object({
  value: z.number().int().min(1, 'Pick a score').max(5),
})

const STARS = [1, 2, 3, 4, 5]

export function RatingStepForm() {
  const setRating = useSetAtom(ratingIdAtom)
  const locationId = useAtomValue(locationIdAtom)
  const reviewId = useAtomValue(reviewIdAtom)
  const createRating = useCreateRating()
  const { goNext } = useWizard()

  const form = useForm({
    defaultValues: { value: 5 },
    validators: { onChange: formSchema },
    onSubmit: async ({ value }) => {
      if (!locationId || !reviewId) return
      const created = await createRating.mutateAsync({
        locationId,
        reviewId,
        value: value.value,
      })
      setRating(created.id)
      goNext()
    },
  })

  return (
    <form
      id="rating-form"
      onSubmit={(e) => {
        e.preventDefault()
        void form.handleSubmit()
      }}
      className="space-y-4"
    >
      <form.Field
        name="value"
        children={(field) => (
          <div className="space-y-1">
            <span className="text-sm font-medium">Rating</span>
            <div
              className="flex gap-1"
              role="radiogroup"
              aria-label="Rating out of 5"
            >
              {STARS.map((star) => (
                <Button
                  key={star}
                  type="button"
                  size="sm"
                  role="radio"
                  aria-checked={field.state.value === star}
                  aria-label={`${star} out of 5`}
                  variant={field.state.value >= star ? 'default' : 'outline'}
                  onClick={() => field.handleChange(star)}
                >
                  ★
                </Button>
              ))}
            </div>
          </div>
        )}
      />

      {createRating.isError && (
        <p className="text-destructive text-sm">
          Could not save the rating: {createRating.error.message}
        </p>
      )}

      <Button type="submit" disabled={createRating.isPending}>
        {createRating.isPending ? 'Saving…' : 'Submit Review'}
      </Button>
    </form>
  )
}
