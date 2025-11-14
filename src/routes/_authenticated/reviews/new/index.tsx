import { createFileRoute } from '@tanstack/react-router'
import { PickLocationForm } from '@/components/reviews/wizard/PickLocationForm'

export const Route = createFileRoute('/_authenticated/reviews/new/')({
  component: PickLocationForm,
})
