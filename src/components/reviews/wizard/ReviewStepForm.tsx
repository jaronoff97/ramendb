import { useAtomValue, useSetAtom } from 'jotai'
import { useForm } from '@tanstack/react-form'
import * as z from 'zod'
import { useWizard } from './useWizard'
import { locationIdAtom, reviewIdAtom } from '@/data/atoms/review-wizard-atoms'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useCreateReview } from '@/lib/mutations/useCreateReview'
import { fieldErrors } from '@/lib/form-errors'

// The form's own shape. It used to be validated with the Prisma create schema,
// which wants `user`, `location` and relation objects this form never holds.
const formSchema = z.object({
  title: z.string().min(1, 'Give the review a title'),
  text: z.string(),
})

export function ReviewStepForm() {
  const setReview = useSetAtom(reviewIdAtom)
  const locationId = useAtomValue(locationIdAtom)
  const createReview = useCreateReview()
  const { goNext } = useWizard()

  const form = useForm({
    defaultValues: { title: '', text: '' },
    validators: { onChange: formSchema },
    onSubmit: async ({ value }) => {
      if (!locationId) return
      // The author comes from the session on the server, so nothing about the
      // user belongs in this payload.
      const created = await createReview.mutateAsync({
        title: value.title.trim(),
        text: value.text.trim() || null,
        locationId,
      })
      setReview(created.id)
      goNext()
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        void form.handleSubmit()
      }}
      className="space-y-4"
    >
      <form.Field
        name="title"
        children={(field) => (
          <div className="space-y-1">
            <Label htmlFor={field.name}>Title</Label>
            <Input
              id={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
            {field.state.meta.isTouched && (
              <p className="text-destructive text-sm">
                {fieldErrors(field.state.meta.errors)}
              </p>
            )}
          </div>
        )}
      />

      <form.Field
        name="text"
        children={(field) => (
          <div className="space-y-1">
            <Label htmlFor={field.name}>Review</Label>
            <Textarea
              id={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              rows={5}
            />
          </div>
        )}
      />

      {createReview.isError && (
        <p className="text-destructive text-sm">
          Could not save the review: {createReview.error.message}
        </p>
      )}

      <Button type="submit" disabled={createReview.isPending}>
        {createReview.isPending ? 'Saving…' : 'Save Review'}
      </Button>
    </form>
  )
}
