import { createFileRoute } from '@tanstack/react-router'
import { LocationStepForm } from '@/components/reviews/wizard/LocationStepForm'

export const Route = createFileRoute('/_authenticated/reviews/new/location')({
  component: LocationStepForm,
})
