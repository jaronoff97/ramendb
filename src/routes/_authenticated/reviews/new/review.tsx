import { createFileRoute } from '@tanstack/react-router'
import { ReviewStepForm } from '@/components/reviews/wizard/ReviewStepForm'

export const Route = createFileRoute('/_authenticated/reviews/new/review')({
  component: ReviewStepForm,
})
