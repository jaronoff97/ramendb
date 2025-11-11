import { createFileRoute } from '@tanstack/react-router'
import { RatingStepForm } from '@/components/reviews/wizard/RatingStepForm'

export const Route = createFileRoute('/_authenticated/reviews/new/rating')({
  component: RatingStepForm,
})
